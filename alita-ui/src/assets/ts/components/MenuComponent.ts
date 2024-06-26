/* eslint-disable @typescript-eslint/no-unused-vars */
import { createPopper, type VirtualElement } from "@popperjs/core";
import {
  DataUtil,
  DOMEventHandlerUtil,
  ElementStyleUtil,
  EventHandlerUtil,
  getAttributeValueByBreakpoint,
  getElementChild,
  getElementParents,
  getHighestZindex,
  getUniqueIdWithPrefix,
  insertAfterElement,
  slideDown,
  slideUp,
  throttle,
} from "../_utils/index";

export interface MenuOptions {
  dropdown: {
    hoverTimeout: number;
    zindex: number;
  };
  accordion: {
    slideSpeed: number;
    expand: boolean;
  };
}

const defaultMenuOptions: MenuOptions = {
  dropdown: {
    hoverTimeout: 200,
    zindex: 105,
  },
  accordion: {
    slideSpeed: 250,
    expand: false,
  },
};

type PopperPlacement =
  | "right"
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "bottom"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end"
  | undefined;

class MenuComponent {
  element: HTMLElement;
  options: MenuOptions;
  instanceUid: string;
  triggerElement: HTMLElement | null = null;

  constructor(_element: HTMLElement, options: MenuOptions) {
    this.element = _element;
    this.options = Object.assign(defaultMenuOptions, options);
    this.instanceUid = getUniqueIdWithPrefix("menu");
    // this.element.setAttribute('data-menu', 'true')
    this._setTriggerElement();
    this._update();
    DataUtil.set(this.element, "menu", this);
    return this;
  }

  // Set external trigger element
  private _setTriggerElement = () => {
    const target = document.querySelector(
      `[data-menu-target="#${this.element.getAttribute("id")}"`
    );

    if (target) {
      this.triggerElement = target as HTMLElement;
    } else if (this.element.closest("[data-menu-trigger]")) {
      this.triggerElement = this.element.closest(
        "[data-menu-trigger]"
      ) as HTMLElement;
    } else if (
      this.element.parentNode &&
      getElementChild(
        this.element.parentNode as HTMLElement,
        "[data-menu-trigger]"
      )
    ) {
      const child = getElementChild(
        this.element.parentNode as HTMLElement,
        "[data-menu-trigger]"
      );
      if (child) {
        this.triggerElement = child;
      }
    }

    if (this.triggerElement) {
      DataUtil.set(this.triggerElement, "menu", this);
    }
  };

  // Test if menu has external trigger element
  private _isTriggerElement = (item: HTMLElement) => {
    return this.triggerElement === item;
  };

  // Get item option(through html attributes)
  private _getItemOption = (item: HTMLElement, name: string) => {
    let value: string | JSON | null | boolean = null;
    if (item && item.hasAttribute("data-menu-" + name)) {
      const attr = item.getAttribute("data-menu-" + name) || "";
      value = getAttributeValueByBreakpoint(attr);
      if (value !== null && String(value) === "true") {
        value = true;
      } else if (value !== null && String(value) === "false") {
        value = false;
      }
    }
    return value;
  };

  // Get item element
  private _getItemElement = (
    _element: HTMLElement
  ): HTMLElement | undefined => {
    // Element is the external trigger element
    if (this._isTriggerElement(_element)) {
      return _element;
    }

    // Element has item toggler attribute
    if (_element.hasAttribute("data-menu-trigger")) {
      return _element;
    }

    // Element has item DOM reference in it's data storage
    const itemElement = DataUtil.get(_element, "item");
    if (itemElement) {
      return itemElement as HTMLElement;
    }

    // Item is parent of element
    const item = _element.closest<HTMLElement>(
      ".menu-item[data-menu-trigger]"
    );
    if (item) {
      return item;
    }

    // Element's parent has item DOM reference in it's data storage
    const sub = _element.closest(".menu-sub");
    if (sub) {
      const subItem = DataUtil.get(sub as HTMLElement, "item");
      if (subItem) {
        return subItem as HTMLElement;
      }
    }
  };

  // Get item parent element
  private _getItemParentElement = (item: HTMLElement) => {
    const sub = item.closest<HTMLElement>(".menu-sub");
    if (!sub) {
      return null;
    }

    const subItem = DataUtil.get(sub, "item");
    if (subItem) {
      return subItem as HTMLElement;
    }

    const parentItem = sub.closest<HTMLElement>(
      ".menu-item[data-menu-trigger]"
    );
    if (sub && parentItem) {
      return parentItem;
    }

    return null;
  };

  // Get item parent elements
  private _getItemParentElements = (item: HTMLElement) => {
    const parents: Array<HTMLElement> = [];
    let parent: HTMLElement | null;
    let i = 0;
    let buffer: HTMLElement = item;

    do {
      parent = this._getItemParentElement(buffer);
      if (parent) {
        parents.push(parent);
        buffer = parent as HTMLElement;
      }

      i++;
    } while (parent !== null && i < 20);

    if (this.triggerElement) {
      parents.unshift(this.triggerElement);
    }

    return parents;
  };

  // Prepare popper config for dropdown(see: https://popper.js.org/docs/v2/)
  private _getDropdownPopperConfig = (item: HTMLElement) => {
    // Placement
    const placementOption = this._getItemOption(item, "placement");
    let placement: PopperPlacement = "right";
    if (placementOption) {
      placement = placementOption as PopperPlacement;
    }

    // Flip
    // const flipValue = this._getItemOption(item, 'flip')
    // const flip = flipValue ? flipValue.toString().split(',') : []

    // Offset
    const offsetValue = this._getItemOption(item, "offset");
    const offset = offsetValue ? offsetValue.toString().split(",") : [];

    // Strategy
    const strategy: "absolute" | "fixed" | undefined =
      this._getItemOption(item, "overflow") === true ? "absolute" : "fixed";

    return {
      placement: placement,
      strategy: strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: offset,
          },
        },
        {
          name: "preventOverflow",
        },
        {
          name: "flip",
          options: {
            // altBoundary: true,
            // fallbackPlacements: flip,
            flipVariations: false,
          },
        },
      ],
    };
  };

  // Get item child element
  private _getItemChildElement = (item: HTMLElement): HTMLElement | null => {
    let selector = item;

    const subItem = DataUtil.get(item, "sub");
    if (subItem) {
      selector = subItem as HTMLElement;
    }

    if (selector) {
      //element = selector.querySelector('.show.menu-item[data-menu-trigger]');
      const element = selector.querySelector<HTMLElement>(
        ".menu-item[data-menu-trigger]"
      );
      if (element) {
        return element;
      }
    }
    return null;
  };

  // Get item child elements
  private _getItemChildElements = (item: HTMLElement) => {
    const children: Array<HTMLElement> = [];
    let child: HTMLElement | null;
    let i = 0;
    let buffer = item;
    do {
      child = this._getItemChildElement(buffer);
      if (child) {
        children.push(child);
        buffer = child as HTMLElement;
      }

      i++;
    } while (child !== null && i < 20);

    return children;
  };

  // Get item sub element
  private _getItemSubElement = (item: HTMLElement): HTMLElement | null => {
    if (!item) {
      return null;
    }

    if (this._isTriggerElement(item)) {
      return this.element;
    }

    if (item.classList.contains("menu-sub")) {
      return item;
    } else if (DataUtil.has(item, "sub")) {
      const itemSub = DataUtil.get(item, "sub");
      return itemSub ? (itemSub as HTMLElement) : null;
    } else {
      return getElementChild(item, ".menu-sub");
    }
  };

  private _getCss = (el: HTMLElement, styleProp: string) => {
    const defaultView = (el.ownerDocument || document).defaultView;
    if (!defaultView) {
      return "";
    }

    // sanitize property name to css notation
    // (hyphen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();

    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  };

  // Get item sub type
  private _getItemSubType = (element: HTMLElement) => {
    const sub = this._getItemSubElement(element);
    if (sub && parseInt(this._getCss(sub as HTMLElement, "z-index")) > 0) {
      return "dropdown";
    } else {
      return "accordion";
    }
  };

  // Test if item's sub is shown
  private _isItemSubShown = (item: HTMLElement) => {
    const sub = this._getItemSubElement(item);
    if (sub) {
      if (this._getItemSubType(item) === "dropdown") {
        const subHTMLElement = sub as HTMLElement;
        return (
          subHTMLElement.classList.contains("show") &&
          subHTMLElement.hasAttribute("data-popper-placement")
        );
      } else {
        return item.classList.contains("show");
      }
    }

    return false;
  };

  // Test if item dropdown is permanent
  private _isItemDropdownPermanent = (item: HTMLElement) => {
    return this._getItemOption(item, "permanent") === true;
  };

  // Test if item's parent is shown
  private _isItemParentShown = (item: HTMLElement) => {
    return getElementParents(item, ".menu-item.show").length > 0;
  };

  // Test of it is item sub element
  private _isItemSubElement = (item: HTMLElement) => {
    return item.classList.contains("menu-sub");
  };

  // Test if item has sub
  private _hasItemSub = (item: HTMLElement) => {
    return (
      item.classList.contains("menu-item") &&
      item.hasAttribute("data-menu-trigger")
    );
  };

  // Get link element
  private _getItemLinkElement = (item: HTMLElement) => {
    return getElementChild(item, ".menu-link");
  };

  // Get toggle element
  private _getItemToggleElement = (item: HTMLElement) => {
    if (this.triggerElement) {
      return this.triggerElement;
    }

    return this._getItemLinkElement(item);
  };

  // Show item dropdown
  private _showDropdown = (item: HTMLElement) => {
    if (
      EventHandlerUtil.trigger(this.element, "menu.dropdown.show") === false
    ) {
      return;
    }

    // Hide all currently shown dropdowns except current one
    MenuComponent.hideDropdowns(item);

    // const toggle = this._isTriggerElement(item) ? item : this._getItemLinkElement(item);
    const sub = this._getItemSubElement(item);
    const width = this._getItemOption(item, "width");
    const height = this._getItemOption(item, "height");

    let zindex = this.options.dropdown.zindex;
    const parentZindex = getHighestZindex(item); // update
    // Apply a new z-index if dropdown's toggle element or it's parent has greater z-index // update
    if (parentZindex !== null && parentZindex >= zindex) {
      zindex = parentZindex + 1;
    }

    if (zindex && sub) {
      ElementStyleUtil.set(sub, "z-index", zindex);
    }

    if (width && sub) {
      ElementStyleUtil.set(sub, "width", width);
    }

    if (height && sub) {
      ElementStyleUtil.set(sub, "height", height);
    }

    this.initDropdownPopper(item, sub as HTMLElement);

    item.classList.add("show");
    item.classList.add("menu-dropdown");
    sub?.classList.add("show");

    // Append the sub the the root of the menu
    if (this._getItemOption(item, "overflow") === true) {
      if (sub) {
        document.body.appendChild(sub);
        DataUtil.set(item, "sub", sub);
        DataUtil.set(sub, "item", item);
        DataUtil.set(sub, "menu", this);
      }
    } else {
      if (sub) {
        DataUtil.set(sub, "item", item);
      }
    }

    EventHandlerUtil.trigger(this.element, "menu.dropdown.shown");
  };

  // Init dropdown popper(new)
  private initDropdownPopper = (item: HTMLElement, sub: HTMLElement) => {
    // Setup popper instance
    let reference;
    const attach = this._getItemOption(item, "attach") as string;

    if (attach) {
      if (attach === "parent") {
        reference = item.parentNode;
      } else {
        reference = document.querySelector(attach);
      }
    } else {
      reference = item;
    }

    if (reference) {
      const popper = createPopper(
        reference as Element | VirtualElement,
        sub,
        this._getDropdownPopperConfig(item)
      );
      DataUtil.set(item, "popper", popper);
    }
  };

  // Hide item dropdown
  private _hideDropdown = (item: HTMLElement) => {
    if (
      EventHandlerUtil.trigger(this.element, "menu.dropdown.hide") === false
    ) {
      return;
    }

    const sub = this._getItemSubElement(item);
    if (sub) {
      ElementStyleUtil.set(sub, "z-index", "");
      ElementStyleUtil.set(sub, "width", "");
      ElementStyleUtil.set(sub, "height", "");
    }

    item.classList.remove("show");
    item.classList.remove("menu-dropdown");
    if (sub) {
      sub.classList.remove("show");
    }

    // Append the sub back to it's parent
    if (this._getItemOption(item, "overflow") === true) {
      if (item.classList.contains("menu-item")) {
        if (sub) {
          item.appendChild(sub);
        }
      } else {
        insertAfterElement(this.element, item);
      }

      if (sub) {
        DataUtil.remove(item, "sub");
        DataUtil.remove(sub, "item");
        DataUtil.remove(sub, "menu");
      }
    }

    if (DataUtil.has(item, "popper") === true) {
      // @ts-ignore
      DataUtil.get(item, "popper").destroy();
      DataUtil.remove(item, "popper");
    }

    // Destroy popper(new)
    this.destroyDropdownPopper(item);
    EventHandlerUtil.trigger(this.element, "menu.dropdown.hidden");
  };

  // Destroy dropdown popper(new)
  private destroyDropdownPopper = (item: HTMLElement) => {
    if (DataUtil.has(item, "popper") === true) {
      // @ts-ignore
      DataUtil.get(item, "popper").destroy();
      DataUtil.remove(item, "popper");
    }

    EventHandlerUtil.trigger(this.element, "menu.dropdown.hidden");
  };

  private _showAccordion = (item: HTMLElement) => {
    if (
      EventHandlerUtil.trigger(this.element, "menu.accordion.show") === false
    ) {
      return;
    }

    if (this.options.accordion.expand === false) {
      this._hideAccordions(item);
    }

    if (DataUtil.has(item, "popper") === true) {
      this._hideDropdown(item);
    }

    item.classList.add("hover"); // updateWW
    item.classList.add("showing");

    const subElement = this._getItemSubElement(item);
    if (subElement) {
      const sub = subElement as HTMLElement;
      slideDown(sub, this.options.accordion.slideSpeed, () => {
        item.classList.remove("showing");
        item.classList.add("show");
        sub.classList.add("show");
        EventHandlerUtil.trigger(this.element, "menu.accordion.shown");
      });
    }
  };

  private _hideAccordion = (item: HTMLElement) => {
    if (
      EventHandlerUtil.trigger(this.element, "menu.accordion.hide") === false
    ) {
      return;
    }

    const sub = this._getItemSubElement(item);
    item.classList.add("hiding");

    if (sub) {
      slideUp(sub, this.options.accordion.slideSpeed, () => {
        item.classList.remove("hiding");
        item.classList.remove("show");
        sub.classList.remove("show");
        item.classList.remove("hover"); // update
        EventHandlerUtil.trigger(this.element, "menu.accordion.hidden");
      });
    }
  };

  // Hide all shown accordions of item
  private _hideAccordions = (item: HTMLElement) => {
    const itemsToHide = this.element.querySelectorAll(
      ".show[data-menu-trigger]"
    );
    if (itemsToHide && itemsToHide.length > 0) {
      for (let i = 0, len = itemsToHide.length; i < len; i++) {
        const itemToHide = itemsToHide[i] as HTMLElement;

        if (
          this._getItemSubType(itemToHide) === "accordion" &&
          itemToHide !== item &&
          item.contains(itemToHide) === false &&
          itemToHide.contains(item) === false
        ) {
          this._hideAccordion(itemToHide);
        }
      }
    }
  };

  // Event Handlers
  // Reset item state classes if item sub type changed
  private _reset = (item: HTMLElement) => {
    if (this._hasItemSub(item) === false) {
      return;
    }

    const sub = this._getItemSubElement(item);

    // Reset sub state if sub type is changed during the window resize
    if (
      DataUtil.has(item, "type") &&
      DataUtil.get(item, "type") !== this._getItemSubType(item)
    ) {
      // updated
      item.classList.remove("hover");
      item.classList.remove("show");
      item.classList.remove("show");
      if (sub) {
        sub.classList.remove("show");
      }
    } // updated
  };

  // TODO: not done
  private _destroy = () => { };

  // Update all item state classes if item sub type changed
  private _update = () => {
    const items = this.element.querySelectorAll(
      ".menu-item[data-menu-trigger]"
    );
    items.forEach((el) => this._reset(el as HTMLElement));
  };

  // Hide item sub
  private _hide = (item: HTMLElement) => {
    if (!item) {
      return;
    }

    if (this._isItemSubShown(item) === false) {
      return;
    }

    if (this._getItemSubType(item) === "dropdown") {
      this._hideDropdown(item);
    } else if (this._getItemSubType(item) === "accordion") {
      this._hideAccordion(item);
    }
  };

  // Show item sub
  private _show = (item: HTMLElement) => {
    if (!item) {
      return;
    }

    if (this._isItemSubShown(item) === true) {
      return;
    }

    if (this._getItemSubType(item) === "dropdown") {
      this._showDropdown(item); // // show current dropdown
    } else if (this._getItemSubType(item) === "accordion") {
      this._showAccordion(item);
    }

    // Remember last submenu type

    DataUtil.set(item, "type", this._getItemSubType(item)); // updated
  };

  // Toggle item sub
  private _toggle = (item: HTMLElement) => {
    if (!item) {
      return;
    }

    if (this._isItemSubShown(item) === true) {
      this._hide(item);
    } else {
      this._show(item);
    }
  };

  // Mouseout handle
  private _mouseout = (element: HTMLElement, e: MouseEvent) => {
    const item = this._getItemElement(element);
    if (!item) {
      return;
    }

    if (this._getItemOption(item, "trigger") !== "hover") {
      return;
    }

    const timeout = setTimeout(() => {
      if (DataUtil.get(item, "hover") === "1") {
        this._hide(item);
      }
    }, this.options.dropdown.hoverTimeout);

    DataUtil.set(item, "hover", "1");
    DataUtil.set(item, "timeout", timeout);
  };

  // Mouseover handle
  private _mouseover = (element: HTMLElement, e: MouseEvent) => {
    const item = this._getItemElement(element);
    if (!item) {
      return;
    }

    if (this._getItemOption(item, "trigger") !== "hover") {
      return;
    }

    if (DataUtil.get(item, "hover") === "1") {
      const timeout = DataUtil.get(item, "timeout");
      if (timeout) {
        clearTimeout(timeout as number);
      }
      DataUtil.remove(item, "hover");
      DataUtil.remove(item, "timeout");
    }

    this._show(item);
  };

  // Dismiss handler
  private _dismiss = (element: HTMLElement, e: Event) => {
    const item = this._getItemElement(element);
    if (!item) {
      return;
    }
    const items = this._getItemChildElements(item);
    //if ( item !== null && _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
    const itemSubType = this._getItemSubType(item);
    if (item !== null && itemSubType === "dropdown") {
      this._hide(item); // hide items dropdown

      // Hide all child elements as well
      if (items.length > 0) {
        for (let i = 0, len = items.length; i < len; i++) {
          //if ( _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
          if (
            items[i] !== null &&
            this._getItemSubType(items[i] as HTMLElement) === "dropdown"
          ) {
            this._hide(items[i] as HTMLElement);
          }
        }
      }
    }
  };

  // Link handler
  private _link = (element: HTMLElement, e: Event) => {
    if (!EventHandlerUtil.trigger(this.element, "menu.link.click")) {
      return;
    }

    // Dismiss all shown dropdowns
    MenuComponent.hideDropdowns(undefined);
    EventHandlerUtil.trigger(this.element, "menu.link.clicked");
  };

  private _click = (element: HTMLElement, e: Event) => {
    e.preventDefault();
    const item = this._getItemElement(element);
    if (item) {
      if (this._getItemOption(item, "trigger") !== "click") {
        return;
      }

      if (this._getItemOption(item, "toggle") === false) {
        this._show(item);
      } else {
        this._toggle(item);
      }
    }
  };

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  public click = (element: HTMLElement, e: Event) => {
    return this._click(element, e);
  };

  public link = (element: HTMLElement, e: Event) => {
    return this._link(element, e);
  };

  public dismiss = (element: HTMLElement, e: Event) => {
    return this._dismiss(element, e);
  };

  public mouseover = (element: HTMLElement, e: Event) => {
    return this._mouseover(element, e as MouseEvent);
  };

  public mouseout = (element: HTMLElement, e: Event) => {
    return this._mouseout(element, e as MouseEvent);
  };

  // General Methods
  public getItemTriggerType = (item: HTMLElement) => {
    return this._getItemOption(item, "trigger");
  };

  public getItemSubType = (element: HTMLElement) => {
    return this._getItemSubType(element);
  };

  public show = (item: HTMLElement) => {
    return this._show(item);
  };

  public hide = (item: HTMLElement) => {
    return this._hide(item);
  };

  public reset = (item: HTMLElement) => {
    return this._reset(item);
  };

  public update = () => {
    return this._update();
  };

  public getElement = () => {
    return this.element;
  };

  public getItemLinkElement = (item: HTMLElement) => {
    return this._getItemLinkElement(item);
  };

  public getItemToggleElement = (item: HTMLElement) => {
    return this._getItemToggleElement(item);
  };

  public getItemSubElement = (item: HTMLElement) => {
    return this._getItemSubElement(item);
  };

  public getItemParentElements = (item: HTMLElement) => {
    return this._getItemParentElements(item);
  };

  public isItemSubShown = (item: HTMLElement) => {
    return this._isItemSubShown(item);
  };

  public isItemParentShown = (item: HTMLElement) => {
    return this._isItemParentShown(item);
  };

  public getTriggerElement = () => {
    return this.triggerElement;
  };

  public isItemDropdownPermanent = (item: HTMLElement) => {
    return this._isItemDropdownPermanent(item);
  };

  // Accordion Mode Methods
  public hideAccordions = (item: HTMLElement) => {
    return this._hideAccordions(item);
  };

  // Event API
  public on = (name: string, handler: any) => {
    return EventHandlerUtil.on(this.element, name, handler);
  };

  public one = (name: string, handler: any) => {
    return EventHandlerUtil.one(this.element, name, handler);
  };

  public off = (name: string, handlerId: string) => {
    return EventHandlerUtil.off(this.element, name, handlerId);
  };


  // Get Menu instance by element
  public static getInstance = (element: HTMLElement): MenuComponent | null => {
    // Element has menu DOM reference in it's DATA storage
    const elementMenu = DataUtil.get(element, "menu");
    if (elementMenu) {
      return elementMenu as MenuComponent;
    }

    // Element has .menu parent
    const menu = element.closest(".menu");
    if (menu) {
      const menuData = DataUtil.get(menu as HTMLElement, "menu");
      if (menuData) {
        return menuData as MenuComponent;
      }
    }

    // Element has a parent with DOM reference to .menu in it's DATA storage
    if (element.classList.contains("menu-link")) {
      const sub = element.closest(".menu-sub");
      if (sub) {
        const subMenu = DataUtil.get(sub as HTMLElement, "menu");
        if (subMenu) {
          return subMenu as MenuComponent;
        }
      }
    }

    return null;
  };

  // Hide all dropdowns and skip one if provided
  public static hideDropdowns = (skip: HTMLElement | undefined) => {
    const items = document.querySelectorAll<HTMLElement>(
      ".show.menu-dropdown[data-menu-trigger]"
    );

    if (items && items.length > 0) {
      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        const menu = MenuComponent.getInstance(item as HTMLElement);

        if (menu && menu.getItemSubType(item) === "dropdown") {
          if (skip) {
            if (
              // @ts-ignore
              menu.getItemSubElement(item).contains(skip) === false &&
              item.contains(skip) === false &&
              item !== skip
            ) {
              menu.hide(item);
            }
          } else {
            menu.hide(item);
          }
        }
      }
    }
  };

  public static updateDropdowns = () => {
    const items = document.querySelectorAll(
      ".show.menu-dropdown[data-menu-trigger]"
    );
    if (items && items.length > 0) {
      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];

        if (DataUtil.has(item as HTMLElement, "popper")) {
          // @ts-ignore
          DataUtil.get(item as HTMLElement, "popper").forceUpdate();
        }
      }
    }
  };


  /**
   * 创建并初始化菜单组件实例。
   * 该方法根据指定的选择器查询文档中的所有菜单元素，并初始化菜单组件实例。
   * @param selector 用于查询菜单元素的选择器。
   */
  public static createInstances = (selector: string) => {
    // 遍历查询到的所有菜单元素，并初始化菜单组件实例
    document.querySelectorAll(selector).forEach((el) => {
      const menuItem = el as HTMLElement;
      let menuInstance = MenuComponent.getInstance(menuItem);
      // 如果不存在菜单实例，则创建新的菜单组件实例并进行初始化
      if (!menuInstance) {
        menuInstance = new MenuComponent(el as HTMLElement, defaultMenuOptions);
      }
    });
  };


  /**
   * 初始化全局事件处理
   * 该方法用于处理下拉菜单的点击事件，当点击文档时隐藏所有显示的下拉菜单，除非菜单元素设置为静态显示。
   */
  public static initGlobalHandlers = () => {

    /**
     * 将事件处理程序绑定到文档的点击事件上。
     * 该方法用于处理文档中的点击事件，主要用于隐藏下拉菜单。
     * 当点击除下拉菜单外的其他区域时，会隐藏所有显示中的下拉菜单项。
     */
    document.addEventListener("click", (e) => {
      // 查询所有显示中的下拉菜单项
      const menuItems = document.querySelectorAll(
        '.show.menu-dropdown[data-menu-trigger]:not([data-menu-static="true"])'
      );
      if (menuItems && menuItems.length > 0) {
        for (let i = 0; i < menuItems.length; i++) {
          const item = menuItems[i] as HTMLElement;
          const menuObj = MenuComponent.getInstance(item) as MenuComponent;
          if (menuObj && menuObj.getItemSubType(item) === "dropdown") {
            // 获取菜单和子菜单元素
            const menu = menuObj.getElement();
            const sub = menuObj.getItemSubElement(item) as HTMLElement;
            // 如果点击的是菜单项或其包含的子元素，则跳过
            if (item === e.target || item.contains(e.target as HTMLElement)) {
              continue;
            }
            // 如果点击的是子菜单或其包含的子元素，则跳过
            if (sub && (sub === e.target || sub.contains(e.target as HTMLElement))) {
              continue;
            }
            // 隐藏下拉菜单
            menuObj.hide(item);
          }
        }
      }
    });

    /**
     * 将事件处理程序绑定到文档中的指定元素上。
     * 该方法用于处理菜单项点击事件。
     * 当菜单项的链接被点击时，会触发相关菜单组件的 click 方法。
     */
    DOMEventHandlerUtil.on(
      document.body,
      '.menu-item[data-menu-trigger] > .menu-link, [data-menu-trigger]:not(.menu-item):not([data-menu-trigger="auto"])',
      "click",
      function (this: HTMLElement, e: Event) {
        // 获取与当前元素关联的菜单组件实例
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu) {
          // 调用菜单组件的 click 方法处理点击事件
          return menu.click(this, e);
        }
      }
    );

    /**
     * 将事件处理程序绑定到文档中的指定元素上。
     * 该方法用于处理菜单项链接的点击事件。
     * 当菜单项链接被点击时，会调用相关菜单组件的 link 方法进行处理。
     * 该处理会阻止事件继续冒泡。
     */
    DOMEventHandlerUtil.on(
      document.body,
      ".menu-item:not([data-menu-trigger]) > .menu-link",
      "click",
      function (this: HTMLElement, e: Event) {
        // 阻止事件继续冒泡
        e.stopPropagation();
        // 获取当前元素关联的菜单组件实例
        const menu = MenuComponent.getInstance(this);
        if (menu && menu.link) {
          // 调用菜单组件的 link 方法处理点击事件
          return menu.link(this, e);
        }
      }
    );

    /**
     * 将事件处理程序绑定到文档中的指定元素上。
     * 该方法用于处理菜单中具有 data-menu-dismiss="true" 属性的元素的点击事件。
     * 当这些元素被点击时，会调用相关菜单组件的 dismiss 方法进行处理。
     */
    DOMEventHandlerUtil.on(
      document.body,
      '[data-menu-dismiss="true"]',
      "click",
      function (this: HTMLElement, e: Event) {
        // 获取与当前元素关联的菜单组件实例
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu) {
          // 调用菜单组件的 dismiss 方法处理点击事件
          return menu.dismiss(this, e);
        }
      }
    );


    // Mouseover handler
    DOMEventHandlerUtil.on(
      document.body,
      "[data-menu-trigger], .menu-sub",
      "mouseover",
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu && menu.getItemSubType(this) === "dropdown") {
          return menu.mouseover(this, e);
        }
      }
    );

    // Mouseout handler
    DOMEventHandlerUtil.on(
      document.body,
      "[data-menu-trigger], .menu-sub",
      "mouseout",
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu && menu.getItemSubType(this) === "dropdown") {
          return menu.mouseout(this, e);
        }
      }
    );

    // Resize handler
    window.addEventListener("resize", () => {
      let timer;
      throttle(
        timer,
        () => {
          // Locate and update Drawer instances on window resize
          const elements = document.querySelectorAll('[data-menu="true"]');
          elements.forEach((el) => {
            const menu = MenuComponent.getInstance(el as HTMLElement);
            if (menu) {
              menu.update();
            }
          });
        },
        200
      );
    });

  };


  public static bootstrap = () => {
    MenuComponent.initGlobalHandlers();
    MenuComponent.createInstances('[data-menu="true"]');
  };

  public static reinitialization = () => {
    MenuComponent.createInstances('[data-menu="true"]');
  };

  public static createInsance = (
    selector: string,
    options: MenuOptions = defaultMenuOptions
  ): MenuComponent | undefined => {
    const element = document.body.querySelector(selector);
    if (!element) {
      return;
    }
    const item = element as HTMLElement;
    let menu = MenuComponent.getInstance(item);
    if (!menu) {
      menu = new MenuComponent(item, options);
    }
    return menu;
  };
}

export { MenuComponent, defaultMenuOptions };
