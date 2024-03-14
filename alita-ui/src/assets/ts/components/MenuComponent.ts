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
    // this.element.setAttribute('data-alita-menu', 'true')
    this._setTriggerElement();
    this._update();
    DataUtil.set(this.element, "menu", this);
    return this;
  }

  /**
   * 为菜单设置触发元素，并将菜单实例与触发元素关联。
   * 触发元素可以是指定的目标元素，也可以是最接近的包含特定属性的父元素之一。
   */
  private _setTriggerElement = () => {
    // 根据菜单元素的 ID 查询目标元素
    const target = document.querySelector(`[data-alita-menu-target="#${this.element.getAttribute("id")}"]`);

    // 如果找到目标元素，则将其作为触发元素
    if (target) {
      this.triggerElement = target as HTMLElement;
    }
    // 如果未找到目标元素，但菜单元素的父元素包含指定属性，则将父元素作为触发元素
    else if (this.element.closest("[data-alita-menu-trigger]")) {
      this.triggerElement = this.element.closest("[data-alita-menu-trigger]") as HTMLElement;
    }
    // 如果未找到目标元素且菜单元素的父元素中存在包含指定属性的子元素，则将子元素作为触发元素
    else if (this.element.parentNode && getElementChild(this.element.parentNode as HTMLElement, "[data-alita-menu-trigger]")) {
      const child = getElementChild(this.element.parentNode as HTMLElement, "[data-alita-menu-trigger]");
      if (child) {
        this.triggerElement = child;
      }
    }

    // 如果触发元素存在，则将菜单实例与触发元素关联
    if (this.triggerElement) {
      DataUtil.set(this.triggerElement, "menu", this);
    }
  };

  /**
   * 检查给定的元素是否为当前菜单的触发元素。
   * @param item 要检查的元素
   * @returns 如果给定的元素是当前菜单的触发元素，则返回 true；否则返回 false。
   */
  private _isTriggerElement = (item: HTMLElement) => {
    // 检查给定的元素是否与当前菜单的触发元素相同
    return this.triggerElement === item;
  };


  /**
 * 从给定元素中获取指定名称的选项值
 * @param item 要检查的元素
 * @param name 要获取的选项名称
 * @returns 选项值，可能是字符串、JSON 对象、布尔值或 null
 */
  private _getItemOption = (item: HTMLElement, name: string) => {
    let value: string | JSON | null | boolean = null;

    // 检查元素是否存在以指定名称开头的属性
    if (item && item.hasAttribute("data-alita-menu-" + name)) {
      // 获取属性的值
      const attr = item.getAttribute("data-alita-menu-" + name) || "";

      // 处理属性值
      value = getAttributeValueByBreakpoint(attr);

      // 将字符串 "true" 转换为布尔值 true
      if (value === "true") {
        value = true;
      }
      // 将字符串 "false" 转换为布尔值 false
      else if (value === "false") {
        value = false;
      }
    }
    return value;
  };


  /**
   * 获取菜单项元素。
   * @param _element 要检查的元素
   * @returns 如果找到菜单项元素，则返回该元素；否则返回 undefined。
   */
  private _getItemElement = (_element: HTMLElement): HTMLElement | undefined => {
    // 如果给定元素是触发元素，则直接返回
    if (this._isTriggerElement(_element)) {
      return _element;
    }

    // 如果给定元素具有菜单项触发器属性，则直接返回
    if (_element.hasAttribute("data-alita-menu-trigger")) {
      return _element;
    }

    // 如果给定元素的数据存储中包含菜单项元素，则返回该元素
    const itemElement = DataUtil.get(_element, "item");
    if (itemElement) {
      return itemElement as HTMLElement;
    }

    // 如果给定元素的父元素是菜单项元素，则返回该父元素
    const item = _element.closest<HTMLElement>(
      ".menu-item[data-alita-menu-trigger]"
    );
    if (item) {
      return item;
    }

    // 如果给定元素的父元素的数据存储中包含菜单项元素，则返回该父元素
    const sub = _element.closest(".menu-sub");
    if (sub) {
      const subItem = DataUtil.get(sub as HTMLElement, "item");
      if (subItem) {
        return subItem as HTMLElement;
      }
    }

    // 如果都没有找到，则返回 undefined
    return undefined;
  };


  /**
   * 获取菜单项的父元素。
   * @param item 菜单项元素
   * @returns 如果找到菜单项的父元素，则返回该父元素；否则返回 null。
   */
  private _getItemParentElement = (item: HTMLElement) => {
    // 查找菜单项的最近的子菜单
    const sub = item.closest<HTMLElement>(".menu-sub");
    if (!sub) {
      return null; // 如果不存在子菜单，则返回 null
    }

    // 从子菜单中获取菜单项元素
    const subItem = DataUtil.get(sub, "item");
    if (subItem) {
      return subItem as HTMLElement; // 如果子菜单中存在菜单项元素，则返回该元素
    }

    // 查找子菜单的父菜单项元素
    const parentItem = sub.closest<HTMLElement>(
      ".menu-item[data-alita-menu-trigger]"
    );
    if (sub && parentItem) {
      return parentItem; // 如果存在父菜单项元素，则返回该元素
    }

    return null; // 如果未找到符合条件的父元素，则返回 null
  };



  /**
   * 获取给定菜单项的所有父元素，包括触发元素。
   * @param item 给定的菜单项元素
   * @returns 包含所有父元素的数组，其中第一个元素是触发元素，后续元素是菜单项的父元素，如果没有父元素则返回空数组。
   */
  private _getItemParentElements = (item: HTMLElement) => {
    const parents: Array<HTMLElement> = []; // 存储所有父元素的数组
    let parent: HTMLElement | null;
    let i = 0;
    let buffer: HTMLElement = item;

    // 循环查找所有父元素，直到找到触发元素或者达到最大循环次数
    do {
      parent = this._getItemParentElement(buffer);
      if (parent) {
        parents.push(parent); // 将找到的父元素添加到数组中
        buffer = parent as HTMLElement; // 将父元素作为下一次查找的缓冲元素
      }

      i++;
    } while (parent !== null && i < 20); // 限制最大循环次数，防止死循环

    // 如果存在触发元素，则将其作为父元素数组的第一个元素
    if (this.triggerElement) {
      parents.unshift(this.triggerElement);
    }

    return parents; // 返回包含所有父元素的数组
  };


  /**
   * 获取下拉菜单的 Popper 配置。
   * (see: https://popper.js.org/docs/v2/)
   * @param item 下拉菜单项元素
   * @returns Popper 配置对象，用于定义下拉菜单的位置、偏移等属性。
   */
  private _getDropdownPopperConfig = (item: HTMLElement) => {
    // 获取放置位置
    const placementOption = this._getItemOption(item, "placement");
    let placement: PopperPlacement = "right";
    if (placementOption) {
      placement = placementOption as PopperPlacement;
    }

    // Flip
    // const flipValue = this._getItemOption(item, 'flip')
    // const flip = flipValue ? flipValue.toString().split(',') : []

    // 获取偏移量
    const offsetValue = this._getItemOption(item, "offset");
    const offset = offsetValue ? offsetValue.toString().split(",") : [];

    // 获取策略（absolute 或 fixed）
    const strategy: "absolute" | "fixed" | undefined =
      this._getItemOption(item, "overflow") === true ? "absolute" : "fixed";

    return {
      placement: placement, // 放置位置
      strategy: strategy, // 策略（绝对定位或固定定位）
      modifiers: [
        {
          name: "offset",
          options: {
            offset: offset, // 偏移量
          },
        },
        {
          name: "preventOverflow", // 防止溢出
        },
        {
          name: "flip",
          options: {
            // altBoundary: true,
            // fallbackPlacements: flip,
            flipVariations: false, // 翻转选项
          },
        },
      ],
    };
  };


  /**
   * 获取给定菜单项的子菜单项元素。
   * @param item 给定的菜单项元素
   * @returns 如果找到子菜单项元素，则返回该元素；否则返回 null。
   */
  private _getItemChildElement = (item: HTMLElement): HTMLElement | null => {
    let selector = item;

    // 从数据存储中获取子菜单项元素
    const subItem = DataUtil.get(item, "sub");
    if (subItem) {
      selector = subItem as HTMLElement;
    }

    if (selector) {
      // 在子菜单项元素中查找具有指定属性的菜单项元素
      const element = selector.querySelector<HTMLElement>(
        ".menu-item[data-alita-menu-trigger]"
      );
      if (element) {
        return element; // 如果找到，则返回子菜单项元素
      }
    }
    return null; // 如果未找到子菜单项元素，则返回 null
  };


  /**
   * 获取给定菜单项的所有子菜单项元素。
   * @param item 给定的菜单项元素
   * @returns 包含所有子菜单项元素的数组，如果没有子菜单项则返回空数组。
   */
  private _getItemChildElements = (item: HTMLElement) => {
    const children: Array<HTMLElement> = []; // 存储所有子菜单项元素的数组
    let child: HTMLElement | null;
    let i = 0;
    let buffer = item;
    
    // 循环查找所有子菜单项元素，直到达到最大循环次数或者没有子菜单项为止
    do {
      child = this._getItemChildElement(buffer); // 获取当前菜单项的子菜单项元素
      if (child) {
        children.push(child); // 将找到的子菜单项元素添加到数组中
        buffer = child as HTMLElement; // 将子菜单项元素作为下一次查找的缓冲元素
      }

      i++;
    } while (child !== null && i < 20); // 限制最大循环次数，防止死循环

    return children; // 返回包含所有子菜单项元素的数组
  };


  /**
   * 获取给定菜单项的子菜单元素。
   * @param item 给定的菜单项元素
   * @returns 如果存在子菜单元素，则返回该元素；否则返回 null。
   */
  private _getItemSubElement = (item: HTMLElement): HTMLElement | null => {
    if (!item) {
      return null; // 如果给定的菜单项元素为空，则直接返回 null
    }

    // 如果给定的菜单项元素是触发元素，则返回菜单元素本身
    if (this._isTriggerElement(item)) {
      return this.element;
    }

    // 如果给定的菜单项元素具有 "menu-sub" 类，则返回该元素
    if (item.classList.contains("menu-sub")) {
      return item;
    } 
    // 如果给定的菜单项元素的数据存储中包含子菜单元素，则返回该元素
    else if (DataUtil.has(item, "sub")) {
      const itemSub = DataUtil.get(item, "sub");
      return itemSub ? (itemSub as HTMLElement) : null;
    } 
    // 否则，查找菜单项元素的子元素中具有 "menu-sub" 类的元素并返回
    else {
      return getElementChild(item, ".menu-sub");
    }
  };


  /**
   * 获取给定元素的指定 CSS 样式属性值。
   * @param el 给定的元素
   * @param styleProp 要获取的 CSS 样式属性
   * @returns 给定元素的指定 CSS 样式属性值
   */
  private _getCss = (el: HTMLElement, styleProp: string) => {
    // 获取元素所在的文档的默认视图
    const defaultView = (el.ownerDocument || document).defaultView;
    if (!defaultView) {
      return ""; // 如果没有默认视图，则返回空字符串
    }

    // 将 CSS 样式属性名称转换为 CSS 符号表示法（连字符分隔的单词，例如 font-Size）
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();

    // 获取给定元素的指定 CSS 样式属性值
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  };


  /**
   * 获取给定菜单项的子菜单类型。
   * @param element 给定的菜单项元素
   * @returns 子菜单类型，可能是 "dropdown" 或 "accordion"。
   */
  private _getItemSubType = (element: HTMLElement) => {
    // 获取菜单项的子菜单元素
    const sub = this._getItemSubElement(element);

    // 如果存在子菜单元素，并且 z-index 属性大于 0，则返回 "dropdown"
    if (sub && parseInt(this._getCss(sub as HTMLElement, "z-index")) > 0) {
      return "dropdown";
    } else {
      return "accordion"; // 否则返回 "accordion"
    }
  };


  /**
   * 检查给定菜单项的子菜单是否显示。
   * @param item 给定的菜单项元素
   * @returns 如果子菜单显示，则返回 true；否则返回 false。
   */
  private _isItemSubShown = (item: HTMLElement) => {
    // 获取菜单项的子菜单元素
    const sub = this._getItemSubElement(item);
    if (sub) {
      // 如果子菜单类型为 "dropdown"
      if (this._getItemSubType(item) === "dropdown") {
        const subHTMLElement = sub as HTMLElement;
        // 检查子菜单元素是否具有 "show" 类，并且具有 "data-popper-placement" 属性
        return (
          subHTMLElement.classList.contains("show") &&
          subHTMLElement.hasAttribute("data-popper-placement")
        );
      } else { // 如果子菜单类型为 "accordion"
        // 检查菜单项是否具有 "show" 类
        return item.classList.contains("show");
      }
    }

    return false; // 如果没有子菜单元素，则返回 false
  };


  /**
   * 检查菜单项的下拉菜单是否为永久显示。
   * @param item 要检查的菜单项元素
   * @returns 如果菜单项的下拉菜单为永久显示，则返回 true；否则返回 false。
   */
  private _isItemDropdownPermanent = (item: HTMLElement) => {
    // 检查菜单项的 "permanent" 属性是否为 true
    return this._getItemOption(item, "permanent") === true;
  };

  /**
   * 检查菜单项的父元素是否显示。
   * @param item 要检查的菜单项元素
   * @returns 如果菜单项的父元素显示，则返回 true；否则返回 false。
   */
  private _isItemParentShown = (item: HTMLElement) => {
    // 检查菜单项的所有父元素中是否存在具有 "show" 类的菜单项元素
    return getElementParents(item, ".menu-item.show").length > 0;
  };

  /**
   * 检查给定元素是否为菜单子菜单元素。
   * @param item 要检查的元素
   * @returns 如果给定元素是菜单子菜单元素，则返回 true；否则返回 false。
   */
  private _isItemSubElement = (item: HTMLElement) => {
    // 检查给定元素是否具有 "menu-sub" 类
    return item.classList.contains("menu-sub");
  };

  /**
   * 检查菜单项是否具有子菜单。
   * @param item 要检查的菜单项元素
   * @returns 如果菜单项具有子菜单，则返回 true；否则返回 false。
   */
  private _hasItemSub = (item: HTMLElement) => {
    // 检查菜单项是否具有 "menu-item" 类和 "data-alita-menu-trigger" 属性
    return (
      item.classList.contains("menu-item") &&
      item.hasAttribute("data-alita-menu-trigger")
    );
  };

  /**
   * 获取菜单项的链接元素。
   * @param item 要获取链接元素的菜单项元素
   * @returns 菜单项的链接元素，如果不存在则返回 null。
   */
  private _getItemLinkElement = (item: HTMLElement) => {
    // 获取菜单项下的具有 "menu-link" 类的子元素
    return getElementChild(item, ".menu-link");
  };


  /**
   * 获取菜单项的切换元素。
   * 如果存在触发元素，则返回触发元素；否则返回菜单项的链接元素。
   * @param item 要获取切换元素的菜单项元素
   * @returns 菜单项的切换元素
   */
  private _getItemToggleElement = (item: HTMLElement) => {
    // 如果存在触发元素，则返回触发元素
    if (this.triggerElement) {
      return this.triggerElement;
    }

    // 否则返回菜单项的链接元素
    return this._getItemLinkElement(item);
  };


  /**
   * 显示下拉菜单。
   * @param item 要显示下拉菜单的菜单项元素
   */
  private _showDropdown = (item: HTMLElement) => {
    // 触发 alita.menu.dropdown.show 事件，如果事件处理函数返回 false，则不进行下一步操作
    if (EventHandlerUtil.trigger(this.element, "alita.menu.dropdown.show") === false) {
      return;
    }

    // 隐藏除当前菜单项以外的所有下拉菜单
    MenuComponent.hideDropdowns(item);

    // 获取菜单项的子菜单元素
    const sub = this._getItemSubElement(item);
    
    // 获取菜单项的宽度和高度
    const width = this._getItemOption(item, "width");
    const height = this._getItemOption(item, "height");

    // 获取下拉菜单的 z-index 值，默认为组件选项中设置的值
    let zindex = this.options.dropdown.zindex;
    // 如果菜单项或其父元素的 z-index 值较大，则更新 z-index 值
    const parentZindex = getHighestZindex(item);
    if (parentZindex !== null && parentZindex >= zindex) {
      zindex = parentZindex + 1;
    }

    // 设置下拉菜单的 z-index、宽度和高度
    if (zindex && sub) {
      ElementStyleUtil.set(sub, "z-index", zindex);
    }
    if (width && sub) {
      ElementStyleUtil.set(sub, "width", width);
    }
    if (height && sub) {
      ElementStyleUtil.set(sub, "height", height);
    }

    // 初始化下拉菜单的 Popper 实例
    this.initDropdownPopper(item, sub as HTMLElement);

    // 添加显示样式类
    item.classList.add("show");
    item.classList.add("menu-dropdown");
    sub?.classList.add("show");

    // 将子菜单添加到文档的根元素中（如果设置了 overflow 选项）
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

    // 触发 alita.menu.dropdown.shown 事件
    EventHandlerUtil.trigger(this.element, "alita.menu.dropdown.shown");
  };


  /**
   * 初始化下拉菜单的 Popper 实例。
   * @param item 触发下拉菜单的菜单项元素
   * @param sub 下拉菜单元素
   */
  private initDropdownPopper = (item: HTMLElement, sub: HTMLElement) => {
    let reference; // Popper 的参考元素

    // 获取菜单项的 attach 属性值
    const attach = this._getItemOption(item, "attach") as string;

    // 根据 attach 属性值设置 Popper 的参考元素
    if (attach) {
      if (attach === "parent") {
        reference = item.parentNode;
      } else {
        reference = document.querySelector(attach);
      }
    } else {
      reference = item;
    }

    // 如果存在参考元素，则创建 Popper 实例
    if (reference) {
      // 创建 Popper 实例并设置到数据存储中
      const popper = createPopper(
        reference as Element | VirtualElement,
        sub,
        this._getDropdownPopperConfig(item)
      );
      DataUtil.set(item, "popper", popper);
    }
  };


  /**
   * 隐藏下拉菜单。
   * @param item 要隐藏下拉菜单的菜单项元素
   */
  private _hideDropdown = (item: HTMLElement) => {
    // 触发 alita.menu.dropdown.hide 事件，如果事件处理函数返回 false，则不进行下一步操作
    if (EventHandlerUtil.trigger(this.element, "alita.menu.dropdown.hide") === false) {
      return;
    }

    // 获取菜单项的子菜单元素
    const sub = this._getItemSubElement(item);

    // 清除子菜单的样式设置
    if (sub) {
      ElementStyleUtil.set(sub, "z-index", "");
      ElementStyleUtil.set(sub, "width", "");
      ElementStyleUtil.set(sub, "height", "");
    }

    // 移除显示样式类
    item.classList.remove("show");
    item.classList.remove("menu-dropdown");
    if (sub) {
      sub.classList.remove("show");
    }

    // 将子菜单元素移回到其父元素中
    if (this._getItemOption(item, "overflow") === true) {
      if (item.classList.contains("menu-item")) {
        if (sub) {
          item.appendChild(sub);
        }
      } else {
        insertAfterElement(this.element, item);
      }

      // 清除数据存储
      if (sub) {
        DataUtil.remove(item, "sub");
        DataUtil.remove(sub, "item");
        DataUtil.remove(sub, "menu");
      }
    }

    // 销毁 Popper 实例
    if (DataUtil.has(item, "popper") === true) {
      // @ts-ignore
      DataUtil.get(item, "popper").destroy();
      DataUtil.remove(item, "popper");
    }

    // 销毁 Popper 实例（新方法）
    this.destroyDropdownPopper(item);

    // 触发 alita.menu.dropdown.hidden 事件
    EventHandlerUtil.trigger(this.element, "alita.menu.dropdown.hidden");
  };

  /**
   * 销毁下拉菜单的 Popper 实例。
   * @param item 要销毁 Popper 实例的菜单项元素
   */
  private destroyDropdownPopper = (item: HTMLElement) => {
    // 如果存在 Popper 实例，则销毁之
    if (DataUtil.has(item, "popper") === true) {
      // @ts-ignore
      DataUtil.get(item, "popper").destroy();
      DataUtil.remove(item, "popper");
    }

    // 触发 alita.menu.dropdown.hidden 事件
    EventHandlerUtil.trigger(this.element, "alita.menu.dropdown.hidden");
  };


  /**
   * 显示手风琴菜单项。
   * @param item 要显示的手风琴菜单项元素
   */
  private _showAccordion = (item: HTMLElement) => {
    // 触发 alita.menu.accordion.show 事件，如果事件处理函数返回 false，则不进行下一步操作
    if (EventHandlerUtil.trigger(this.element, "alita.menu.accordion.show") === false) {
      return;
    }

    // 如果手风琴菜单选项中 expand 属性设置为 false，则隐藏所有其他手风琴菜单项
    if (this.options.accordion.expand === false) {
      this._hideAccordions(item);
    }

    // 如果当前菜单项有下拉菜单，则隐藏下拉菜单
    if (DataUtil.has(item, "popper") === true) {
      this._hideDropdown(item);
    }

    // 添加显示样式类
    item.classList.add("hover");
    item.classList.add("showing");

    // 获取菜单项的子菜单元素
    const subElement = this._getItemSubElement(item);
    if (subElement) {
      const sub = subElement as HTMLElement;
      // 执行下拉动画
      slideDown(sub, this.options.accordion.slideSpeed, () => {
        item.classList.remove("showing");
        item.classList.add("show");
        sub.classList.add("show");
        // 触发 alita.menu.accordion.shown 事件
        EventHandlerUtil.trigger(this.element, "alita.menu.accordion.shown");
      });
    }
  };


  /**
   * 隐藏手风琴菜单项。
   * @param item 要隐藏的手风琴菜单项元素
   */
  private _hideAccordion = (item: HTMLElement) => {
    // 触发 alita.menu.accordion.hide 事件，如果事件处理函数返回 false，则不进行下一步操作
    if (EventHandlerUtil.trigger(this.element, "alita.menu.accordion.hide") === false) {
      return;
    }

    // 获取菜单项的子菜单元素
    const sub = this._getItemSubElement(item);
    
    // 添加隐藏样式类
    item.classList.add("hiding");

    // 如果存在子菜单元素，则执行收起动画
    if (sub) {
      slideUp(sub, this.options.accordion.slideSpeed, () => {
        item.classList.remove("hiding");
        item.classList.remove("show");
        sub.classList.remove("show");
        item.classList.remove("hover"); // 更新
        // 触发 alita.menu.accordion.hidden 事件
        EventHandlerUtil.trigger(this.element, "alita.menu.accordion.hidden");
      });
    }
  };


  /**
   * 隐藏所有其他手风琴菜单项。
   * @param item 当前正在显示的手风琴菜单项元素
   */
  private _hideAccordions = (item: HTMLElement) => {
    // 获取所有当前显示的手风琴菜单项元素
    const itemsToHide = this.element.querySelectorAll(
      ".show[data-alita-menu-trigger]"
    );

    // 遍历每个手风琴菜单项，如果不是当前菜单项且不是当前菜单项的祖先或后代，则隐藏之
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


  /**
   * 重置菜单项状态。
   * @param item 要重置状态的菜单项元素
   */
  private _reset = (item: HTMLElement) => {
    // 如果菜单项没有子菜单，则无需重置状态
    if (this._hasItemSub(item) === false) {
      return;
    }

    // 获取菜单项的子菜单元素
    const sub = this._getItemSubElement(item);

    // 如果菜单项的子菜单类型在窗口调整大小期间发生了变化，则重置子菜单状态
    if (
      DataUtil.has(item, "type") &&
      DataUtil.get(item, "type") !== this._getItemSubType(item)
    ) {
      // 移除样式类以重置子菜单状态
      item.classList.remove("hover");
      item.classList.remove("show");
      if (sub) {
        sub.classList.remove("show");
      }
    }
  };



  // TODO: not done
  private _destroy = () => { };

  /**
   * 更新所有菜单项的状态类，如果菜单项的子菜单类型发生变化。
   */
  private _update = () => {
    // 获取所有菜单项元素
    const items = this.element.querySelectorAll(
      ".menu-item[data-alita-menu-trigger]"
    );

    // 对每个菜单项执行重置操作
    items.forEach((el) => this._reset(el as HTMLElement));
  };

  /**
   * 隐藏菜单项的子菜单。
   * @param item 要隐藏子菜单的菜单项元素
   */
  private _hide = (item: HTMLElement) => {
    // 如果菜单项为空或子菜单已隐藏，则无需执行隐藏操作
    if (!item || this._isItemSubShown(item) === false) {
      return;
    }

    // 根据子菜单类型执行对应的隐藏操作
    if (this._getItemSubType(item) === "dropdown") {
      this._hideDropdown(item);
    } else if (this._getItemSubType(item) === "accordion") {
      this._hideAccordion(item);
    }
  };



  /**
   * 显示菜单项的子菜单。
   * @param item 要显示子菜单的菜单项元素
   */
  private _show = (item: HTMLElement) => {
    // 如果菜单项为空，则无需执行显示操作
    if (!item) {
      return;
    }

    // 如果菜单项的子菜单已显示，则无需执行显示操作
    if (this._isItemSubShown(item) === true) {
      return;
    }

    // 根据子菜单类型执行对应的显示操作
    if (this._getItemSubType(item) === "dropdown") {
      this._showDropdown(item); // 显示当前下拉菜单
    } else if (this._getItemSubType(item) === "accordion") {
      this._showAccordion(item);
    }

    // 记录最后一个子菜单类型
    DataUtil.set(item, "type", this._getItemSubType(item)); // 更新
  };


  /**
   * 切换菜单项的子菜单显示状态。
   * @param item 要切换子菜单显示状态的菜单项元素
   */
  private _toggle = (item: HTMLElement) => {
    // 如果菜单项为空，则无需执行切换操作
    if (!item) {
      return;
    }

    // 如果菜单项的子菜单已显示，则隐藏之；否则显示之
    if (this._isItemSubShown(item) === true) {
      this._hide(item);
    } else {
      this._show(item);
    }
  };

  /**
   * 鼠标移出事件处理函数。
   * @param element 触发事件的元素
   * @param e 鼠标事件对象
   */
  private _mouseout = (element: HTMLElement, e: MouseEvent) => {
    // 获取菜单项元素
    const item = this._getItemElement(element);
    if (!item) {
      return;
    }

    // 如果菜单项的触发方式不是 hover，则不执行下一步操作
    if (this._getItemOption(item, "trigger") !== "hover") {
      return;
    }

    // 设置延迟执行隐藏子菜单的操作
    const timeout = setTimeout(() => {
      if (DataUtil.get(item, "hover") === "1") {
        this._hide(item);
      }
    }, this.options.dropdown.hoverTimeout);

    // 设置菜单项悬停状态和延迟执行的定时器
    DataUtil.set(item, "hover", "1");
    DataUtil.set(item, "timeout", timeout);
  };


  /**
   * 鼠标移入事件处理函数。
   * @param element 触发事件的元素
   * @param e 鼠标事件对象
   */
  private _mouseover = (element: HTMLElement, e: MouseEvent) => {
    // 获取菜单项元素
    const item = this._getItemElement(element);
    if (!item) {
      return;
    }

    // 如果菜单项的触发方式不是 hover，则不执行下一步操作
    if (this._getItemOption(item, "trigger") !== "hover") {
      return;
    }

    // 如果菜单项处于悬停状态，则取消悬停状态并清除延迟执行的定时器
    if (DataUtil.get(item, "hover") === "1") {
      const timeout = DataUtil.get(item, "timeout");
      if (timeout) {
        clearTimeout(timeout as number);
      }
      DataUtil.remove(item, "hover");
      DataUtil.remove(item, "timeout");
    }

    // 显示菜单项的子菜单
    this._show(item);
  };

  /**
   * 鼠标移出事件处理函数。
   * @param element 触发事件的元素
   * @param e 鼠标事件对象
   */
  private _dismiss = (element: HTMLElement, e: Event) => {
    // 获取菜单项元素
    const item = this._getItemElement(element);
    if (!item) {
      return;
    }

    // 获取菜单项的子菜单子元素
    const items = this._getItemChildElements(item);

    // 如果菜单项的触发方式是 click 且子菜单类型是 dropdown，则隐藏子菜单
    const itemSubType = this._getItemSubType(item);
    if (itemSubType === "dropdown") {
      this._hide(item); // 隐藏当前菜单项的下拉菜单

      // 隐藏所有子菜单项的下拉菜单
      if (items.length > 0) {
        for (let i = 0, len = items.length; i < len; i++) {
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


  /**
   * 处理链接点击事件。
   * @param element 触发事件的链接元素
   * @param e 事件对象
   */
  private _link = (element: HTMLElement, e: Event) => {
    // 触发 alita.menu.link.click 事件，如果返回值为 false，则不执行后续操作
    if (!EventHandlerUtil.trigger(this.element, "alita.menu.link.click")) {
      return;
    }

    // 隐藏所有已显示的下拉菜单
    MenuComponent.hideDropdowns(undefined);
    // 触发 alita.menu.link.clicked 事件
    EventHandlerUtil.trigger(this.element, "alita.menu.link.clicked");
  };

  /**
   * 处理菜单项点击事件。
   * @param element 触发事件的菜单项元素
   * @param e 事件对象
   */
  private _click = (element: HTMLElement, e: Event) => {
    // 阻止默认行为
    e.preventDefault();
    // 获取菜单项元素
    const item = this._getItemElement(element);
    if (item) {
      // 如果菜单项的触发方式不是 click，则不执行后续操作
      if (this._getItemOption(item, "trigger") !== "click") {
        return;
      }

      // 如果菜单项的 toggle 属性为 false，则显示子菜单；否则切换子菜单的显示状态
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


  /**
   * 获取 MenuComponent 实例。
   * @param element 目标元素
   * @returns 如果找到 MenuComponent 实例，则返回该实例；否则返回 null
   */
  public static getInstance = (element: HTMLElement): MenuComponent | null => {
    // 在目标元素的数据存储中查找菜单的引用
    const elementMenu = DataUtil.get(element, "menu");
    if (elementMenu) {
      return elementMenu as MenuComponent;
    }

    // 在目标元素的父级中查找 class 为 .menu 的菜单
    const menu = element.closest(".menu");
    if (menu) {
      const menuData = DataUtil.get(menu as HTMLElement, "menu");
      if (menuData) {
        return menuData as MenuComponent;
      }
    }

    // 如果目标元素是 .menu-link，尝试在其祖先元素中查找 class 为 .menu-sub 的子菜单
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


  /**
   * 隐藏所有下拉菜单。
   * @param skip 要跳过隐藏的下拉菜单项
   */
  public static hideDropdowns = (skip: HTMLElement | undefined) => {
    // 查找所有已显示的下拉菜单项
    const items = document.querySelectorAll<HTMLElement>(
      ".show.menu-dropdown[data-alita-menu-trigger]"
    );

    // 如果存在已显示的下拉菜单项，则逐个进行处理
    if (items && items.length > 0) {
      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        // 获取下拉菜单项的 MenuComponent 实例
        const menu = MenuComponent.getInstance(item as HTMLElement);

        // 如果存在 MenuComponent 实例，并且下拉菜单类型为 dropdown，则执行隐藏操作
        if (menu && menu.getItemSubType(item) === "dropdown") {
          if (skip) {
            // 如果存在要跳过隐藏的下拉菜单项，则检查是否需要跳过当前项
            if (
              // @ts-ignore
              menu.getItemSubElement(item).contains(skip) === false &&
              item.contains(skip) === false &&
              item !== skip
            ) {
              menu.hide(item);
            }
          } else {
            // 如果不存在要跳过隐藏的下拉菜单项，则直接隐藏当前项
            menu.hide(item);
          }
        }
      }
    }
  };

  /**
   * 更新所有下拉菜单。
   * 该方法主要用于在下拉菜单显示状态变化时更新 Popper 实例。
   */
  public static updateDropdowns = () => {
    // 查找所有已显示的下拉菜单项
    const items = document.querySelectorAll<HTMLElement>(
      ".show.menu-dropdown[data-alita-menu-trigger]"
    );

    // 如果存在已显示的下拉菜单项，则逐个进行处理
    if (items && items.length > 0) {
      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];

        // 如果下拉菜单项存在 Popper 实例，则强制更新 Popper 实例
        if (DataUtil.has(item, "popper")) {
          // @ts-ignore
          DataUtil.get(item, "popper").forceUpdate();
        }
      }
    }
  };


  /**
   * 创建菜单组件实例。
   * @param selector 要初始化为菜单组件实例的选择器。
   * 该方法遍历指定选择器下的所有元素，并将其初始化为菜单组件实例。
   */
  public static createInstances = (selector: string) => {
    // 初始化菜单组件
    document.querySelectorAll(selector).forEach((el) => {
      const menuItem = el as HTMLElement;
      let menuInstance = MenuComponent.getInstance(menuItem);
      if (!menuInstance) {
        menuInstance = new MenuComponent(el as HTMLElement, defaultMenuOptions);
      }
    });
  };


  /**
   * 初始化全局事件处理程序。
   * 该方法用于初始化全局事件处理程序，包括下拉菜单处理、子菜单切换处理、链接点击处理、
   * 消失事件处理、鼠标移入移出处理和窗口大小调整处理。
   */
  public static initGlobalHandlers = () => {
    // 下拉菜单处理
    document.addEventListener("click", (e) => {
      const menuItems = document.querySelectorAll(
        '.show.menu-dropdown[data-alita-menu-trigger]:not([data-alita-menu-static="true"])'
      );
      if (menuItems && menuItems.length > 0) {
        for (let i = 0; i < menuItems.length; i++) {
          const item = menuItems[i] as HTMLElement;
          const menuObj = MenuComponent.getInstance(item) as MenuComponent;
          if (menuObj && menuObj.getItemSubType(item) === "dropdown") {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const menu = menuObj.getElement();
            const sub = menuObj.getItemSubElement(item) as HTMLElement;
            if (item === e.target || item.contains(e.target as HTMLElement)) {
              continue;
            }

            if (
              sub &&
              (sub === e.target || sub.contains(e.target as HTMLElement))
            ) {
              continue;
            }
            menuObj.hide(item);
          }
        }
      }
    });

    // 子菜单切换处理
    DOMEventHandlerUtil.on(
      document.body,
      '.menu-item[data-alita-menu-trigger] > .menu-link, [data-alita-menu-trigger]:not(.menu-item):not([data-alita-menu-trigger="auto"])',
      "click",
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu) {
          return menu.click(this, e);
        }
      }
    );

    // 链接点击处理
    DOMEventHandlerUtil.on(
      document.body,
      ".menu-item:not([data-alita-menu-trigger]) > .menu-link",
      "click",
      function (this: HTMLElement, e: Event) {
        e.stopPropagation();
        const menu = MenuComponent.getInstance(this);
        if (menu && menu.link) {
          return menu.link(this, e);
        }
      }
    );

    // 消失事件处理
    DOMEventHandlerUtil.on(
      document.body,
      '[data-alita-menu-dismiss="true"]',
      "click",
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu) {
          return menu.dismiss(this, e);
        }
      }
    );

    // 鼠标移入处理
    DOMEventHandlerUtil.on(
      document.body,
      "[data-alita-menu-trigger], .menu-sub",
      "mouseover",
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu && menu.getItemSubType(this) === "dropdown") {
          return menu.mouseover(this, e);
        }
      }
    );

    // 鼠标移出处理
    DOMEventHandlerUtil.on(
      document.body,
      "[data-alita-menu-trigger], .menu-sub",
      "mouseout",
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent;
        if (menu && menu.getItemSubType(this) === "dropdown") {
          return menu.mouseout(this, e);
        }
      }
    );

    // 窗口大小调整处理
    window.addEventListener("resize", () => {
      let timer;
      throttle(
        timer,
        () => {
          // 查找并更新窗口调整时的菜单实例
          const elements = document.querySelectorAll('[data-alita-menu="true"]');
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

  /**
   * 初始化全局事件处理程序并创建菜单实例。
   * 该方法用于初始化全局事件处理程序，并根据指定选择器创建菜单实例。
   */
  public static bootstrap = () => {
    MenuComponent.initGlobalHandlers();
    MenuComponent.createInstances('[data-alita-menu="true"]');
  };

  /**
   * 重新初始化菜单实例。
   * 该方法用于重新创建所有菜单实例。
   */
  public static reinitialization = () => {
    MenuComponent.createInstances('[data-alita-menu="true"]');
  };

  /**
   * 创建单个菜单实例。
   * @param selector 选择器字符串，用于选择要创建菜单实例的元素。
   * @param options 菜单选项（可选）。
   * @returns 返回新创建的菜单实例。
   */
  public static createInsance = (selector: string, options: MenuOptions = defaultMenuOptions): MenuComponent | undefined => {
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
