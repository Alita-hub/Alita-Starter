/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataUtil } from "./_DataUtil";
import { getUniqueIdWithPrefix } from "./_TypesHelpers";

export interface EventMeta {
  name: string;
  callback: Function;
  one: boolean;
  fired: boolean;
}

export class EventHandlerUtil {
  static store: {
    [name: string]: {
      [handlerId: string]: EventMeta;
    };
  } = {};

  private static setEventMetasByName(
    name: string,
    handlers: {
      [handlerId: string]: EventMeta;
    }
  ): void {
    EventHandlerUtil.store[name] = handlers;
  }

  private static getEventMetaByName(name: string):
    | {
        [handlerId: string]: EventMeta;
      }
    | undefined {
    return EventHandlerUtil.store[name];
  }

  private static setEventMetaByNameAndHandlerId(
    name: string,
    handlerId: string,
    meta: EventMeta
  ): void {
    if (EventHandlerUtil.store[name]) {
      EventHandlerUtil.store[name][handlerId] = meta;
      return;
    }
    EventHandlerUtil.store[name] = {};
    EventHandlerUtil.store[name][handlerId] = meta;
  }

  private static getEventMetaByHandlerId(
    name: string,
    handlerId: string
  ): EventMeta | undefined {
    const handlersIds = EventHandlerUtil.store[name];
    if (!handlersIds) {
      return;
    }
    return handlersIds[handlerId];
  }

  private static setFiredByNameAndHandlerId(
    name: string,
    handerId: string,
    fired: boolean
  ): void {
    const meta = EventHandlerUtil.getEventMetaByHandlerId(name, handerId);
    if (!meta) {
      return;
    }

    meta.fired = fired;
    EventHandlerUtil.setEventMetaByNameAndHandlerId(name, handerId, meta);
  }

  private static addEvent(
    element: HTMLElement,
    name: string,
    callback: Function,
    one: boolean = false
  ): string {
    const handlerId = getUniqueIdWithPrefix("event");
    const data = DataUtil.get(element, name);
    const handlersIds = data ? (data as string[]) : [];
    handlersIds.push(handlerId);

    DataUtil.set(element, name, handlersIds);

    const meta: EventMeta = {
      name: name,
      callback: callback,
      one: one,
      fired: false,
    };

    EventHandlerUtil.setEventMetaByNameAndHandlerId(name, handlerId, meta);
    return handlerId;
  }

  private static removeEvent(
    element: HTMLElement,
    name: string,
    handerId: string
  ) {
    DataUtil.removeOne(element, name, handerId);
    const handlersIds = EventHandlerUtil.store[name];
    if (handlersIds) {
      return;
    }

    delete EventHandlerUtil.store[name][handerId];
  }


  /**
   * 触发指定元素上的自定义事件处理程序。
   * @param element 要触发事件的元素。
   * @param name 事件名称。
   * @param target 事件的目标对象（可选）。
   * @param e 事件对象（可选）。
   * @returns 如果事件处理程序执行成功，则返回 true；否则返回 false。
   */
  public static trigger(
    element: HTMLElement,
    name: string,
    target?: any,
    e?: Event
  ): boolean {
    let returnValue = true;

    // 检查元素是否具有指定名称的事件数据
    if (!DataUtil.has(element, name)) {
      return returnValue;
    }

    let eventValue;
    let handlerId;
    const data = DataUtil.get(element, name);
    const handlersIds = data ? (data as string[]) : [];

    // 遍历事件处理程序，并依次执行
    for (let i = 0; i < handlersIds.length; i++) {
      handlerId = handlersIds[i];
      if (
        EventHandlerUtil.store[name] &&
        EventHandlerUtil.store[name][handlerId]
      ) {
        const handler = EventHandlerUtil.store[name][handlerId];
        if (handler.name === name) {
          // 如果事件处理程序仅执行一次，则检查是否已执行过，如果已执行则跳过
          if (handler.one) {
            if (handler.fired) {
              EventHandlerUtil.store[name][handlerId].fired = true;
              eventValue = handler.callback.call(this, target);
            }
          } else {
            eventValue = handler.callback.call(this, target);
          }

          // 如果事件处理程序返回 false，则将返回值置为 false
          if (eventValue === false) {
            returnValue = false;
          }
        }
      }
    }
    return returnValue;
  }


  public static on = function (
    element: HTMLElement,
    name: string,
    callBack: Function
  ): void {
    EventHandlerUtil.addEvent(element, name, callBack, false);
  };

  public static one(
    element: HTMLElement,
    name: string,
    callBack: Function
  ): void {
    EventHandlerUtil.addEvent(element, name, callBack, true);
  }

  public static off(
    element: HTMLElement,
    name: string,
    handerId: string
  ): void {
    EventHandlerUtil.removeEvent(element, name, handerId);
  }
}
