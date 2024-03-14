import { createPopper, VirtualElement } from "@popperjs/core";
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
        this.options = { ...defaultMenuOptions, ...options };
        this.instanceUid = getUniqueIdWithPrefix("menu");
        this._setTriggerElement();
        this._update();
        DataUtil.set(this.element, "menu", this);
        return this;
    }

    private _setTriggerElement = () => {
        const target = document.querySelector<HTMLElement>(`[data-alita-menu-target="#${this.element.id}"]`);

        if (target) {
            this.triggerElement = target;
        } else if (this.element.closest("[data-alita-menu-trigger]")) {
            this.triggerElement = this.element.closest("[data-alita-menu-trigger]") as HTMLElement;
        } else if (this.element.parentNode && getElementChild(this.element.parentNode as HTMLElement, "[data-alita-menu-trigger]")) {
            const child = getElementChild(this.element.parentNode as HTMLElement, "[data-alita-menu-trigger]");
            if (child) {
                this.triggerElement = child;
            }
        }

        if (this.triggerElement) {
            DataUtil.set(this.triggerElement, "menu", this);
        }
    };

    private _isTriggerElement = (item: HTMLElement) => {
        return this.triggerElement === item;
    };

    private _getItemOption = (item: HTMLElement, name: string) => {
        let value: string | JSON | null | boolean = null;
        if (item && item.hasAttribute(`data-alita-menu-${name}`)) {
            const attr = item.getAttribute(`data-alita-menu-${name}`) || "";
            value = getAttributeValueByBreakpoint(attr);
            if (value !== null && String(value) === "true") {
                value = true;
            } else if (value !== null && String(value) === "false") {
                value = false;
            }
        }
        return value;
    };

    private _getItemElement = (_element: HTMLElement): HTMLElement | undefined => {
        if (this._isTriggerElement(_element)) {
            return _element;
        }

        if (_element.hasAttribute("data-alita-menu-trigger")) {
            return _element;
        }

        const itemElement = DataUtil.get(_element, "item");
        if (itemElement) {
            return itemElement as HTMLElement;
        }

        const item = _element.closest<HTMLElement>(".menu-item[data-alita-menu-trigger]");
        if (item) {
            return item;
        }

        const sub = _element.closest(".menu-sub");
        if (sub) {
            const subItem = DataUtil.get(sub as HTMLElement, "item");
            if (subItem) {
                return subItem as HTMLElement;
            }
        }
    };

    private _getItemParentElement = (item: HTMLElement) => {
        const sub = item.closest<HTMLElement>(".menu-sub");
        if (!sub) {
            return null;
        }

        const subItem = DataUtil.get(sub, "item");
        if (subItem) {
            return subItem as HTMLElement;
        }

        const parentItem = sub.closest<HTMLElement>(".menu-item[data-alita-menu-trigger]");
        if (sub && parentItem) {
            return parentItem;
        }

        return null;
    };

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
        } while (parent && i < 100);

        return parents;
    };

    private _getParentSub = (item: HTMLElement) => {
        const sub = item.querySelector<HTMLElement>(".menu-sub");
        if (sub) {
            return sub;
        }

        const id = item.getAttribute("id");
        if (id) {
            const parent = this.element.querySelector<HTMLElement>(`#${id}-menu-sub`);
            if (parent) {
                return parent;
            }
        }

        return null;
    };

    private _getSubElements = (item: HTMLElement) => {
        const sub = this._getParentSub(item);
        if (!sub) {
            return [];
        }

        const subs = Array.from(sub.querySelectorAll(".menu-item"));
        if (subs.length === 0) {
            return [];
        }

        return subs;
    };

    private _getSubElement = (item: HTMLElement, subItem: HTMLElement) => {
        const subs = this._getSubElements(item);
        return subs.find((x) => x === subItem);
    };

    private _getMenuPosition = (item: HTMLElement) => {
        const offset = getElementParents(item, ".menu-item").length * 40;
        const itemOffset = item.getBoundingClientRect();
        const bodyOffset = document.body.getBoundingClientRect();
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = document.documentElement.clientHeight;

        let position: PopperPlacement = "auto";
        let top = itemOffset.top - bodyOffset.top;
        let bottom = itemOffset.bottom - bodyOffset.bottom;
        let left = itemOffset.left - bodyOffset.left;
        let right = itemOffset.right - bodyOffset.right;

        const menuOffset = this._getItemOption(item, "offset");
        if (menuOffset) {
            top += menuOffset.y || 0;
            bottom -= menuOffset.y || 0;
            left += menuOffset.x || 0;
            right -= menuOffset.x || 0;
        }

        if (top + offset < 0) {
            position = "bottom-start";
        } else if (bottom + offset > scrollHeight - windowHeight) {
            position = "top-start";
        }

        if (left < 0) {
            position = "right-start";
        } else if (right > document.documentElement.clientWidth) {
            position = "left-start";
        }

        return position;
    };

    private _hideSub = (item: HTMLElement) => {
        const sub = this._getParentSub(item);
        if (!sub) {
            return;
        }

        slideUp(sub, {
            duration: this.options.accordion.slideSpeed,
            complete: () => {
                this._updatePlacement(item);
            },
        });
    };

    private _showSub = (item: HTMLElement, subItem: HTMLElement) => {
        const sub = this._getParentSub(item);
        if (!sub) {
            return;
        }

        const subs = this._getSubElements(item);
        if (subs.length === 0) {
            return;
        }

        const currentSub = this._getSubElement(item, subItem);
        if (!currentSub) {
            return;
        }

        subs.forEach((x) => {
            if (x !== currentSub) {
                this._hideSub(x);
            }
        });

        slideDown(currentSub, {
            duration: this.options.accordion.slideSpeed,
            complete: () => {
                this._updatePlacement(item);
            },
        });
    };

    private _updatePlacement = (item: HTMLElement) => {
        const sub = this._getParentSub(item);
        if (!sub) {
            return;
        }

        const popperInstance = DataUtil.get(sub, "popper");
        if (popperInstance) {
            popperInstance.update();
        } else {
            this._createSubPlacement(item);
        }
    };

    private _createSubPlacement = (item: HTMLElement) => {
        const sub = this._getParentSub(item);
        if (!sub) {
            return;
        }

        const placement = this._getMenuPosition(item);
        const popper = createPopper(item, sub, {
            placement: placement,
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 8],
                    },
                },
                {
                    name: "preventOverflow",
                    options: {
                        boundary: document.documentElement,
                        rootBoundary: "document",
                    },
                },
            ],
        });
        DataUtil.set(sub, "popper", popper);
    };

    private _update = () => {
        const items = this.element.querySelectorAll<HTMLElement>(".menu-item");
        items.forEach((item) => {
            this._updateItem(item);
        });
    };

    private _updateItem = (item: HTMLElement) => {
        const sub = this._getParentSub(item);
        if (sub) {
            this._createSubPlacement(item);
        }

        if (this._getItemOption(item, "hover")) {
            DOMEventHandlerUtil.on(item, "mouseenter", () => {
                this._showSub(item, item);
            });
            DOMEventHandlerUtil.on(item, "mouseleave", () => {
                this._hideSub(item);
            });
        } else {
            EventHandlerUtil.on(item, "click", () => {
                if (this._isTriggerElement(item)) {
                    if (item.classList.contains("show")) {
                        this.hide(item);
                    } else {
                        this.show(item);
                    }
                } else {
                    const subItem = DataUtil.get(item, "item");
                    if (subItem) {
                        this.hide(subItem);
                    } else {
                        this.show(item);
                    }
                }
            });
        }

        if (this._getItemOption(item, "accordion")) {
            DOMEventHandlerUtil.on(item, "click", () => {
                const subItem = DataUtil.get(item, "item");
                if (subItem) {
                    this._showSub(item, subItem);
                }
            });
        }
    };

    show = (item: HTMLElement) => {
        const subItem = DataUtil.get(item, "item");
        if (subItem) {
            this._showSub(item, subItem);
        }

        EventHandlerUtil.trigger(this.element, "show", item);
    };

    hide = (item: HTMLElement) => {
        const subItem = DataUtil.get(item, "item");
        if (subItem) {
            this._hideSub(subItem);
        }

        EventHandlerUtil.trigger(this.element, "hide", item);
    };

    static jQueryInterface(options: MenuOptions) {
        return this.each(function () {
            let $this = DataUtil.get(this, "menu");
            if (!$this) {
                $this = new MenuComponent(this, options);
            }
        });
    }
}

export default MenuComponent;
