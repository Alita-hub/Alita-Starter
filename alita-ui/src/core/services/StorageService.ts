interface CookieOptions {
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
}

/**
 * @description 获取本地存储的值
 * @param key 存储键名
 * @returns 本地存储的值，如果不存在则返回 null
 */
export const getLocalStorage = (key: string): string | null => {
    return window.localStorage.getItem(key);
};

/**
 * @description 设置本地存储的值
 * @param key 存储键名
 * @param value 要存储的值
 */
export const setLocalStorage = (key: string, value: string): void => {
    window.localStorage.setItem(key, value);
};

/**
 * @description 移除本地存储的值
 * @param key 要移除的存储键名
 */
export const removeLocalStorage = (key: string): void => {
    window.localStorage.removeItem(key);
};

/**
 * @description 获取 Cookie 值
 * @param name 要获取的 Cookie 名称
 * @returns Cookie 值，如果 Cookie 不存在则返回 null
 */
export const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
};

/**
 * @description 设置 Cookie
 * @param name Cookie 名称
 * @param value Cookie 值
 * @param options Cookie 的其他选项 (可选)
 */
export const setCookie = (name: string, value: string, options: CookieOptions = {}): void => {
    let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (options.expires) {
        cookieString += '; expires=' + options.expires.toUTCString();
    }
    if (options.path) {
        cookieString += '; path=' + options.path;
    }
    if (options.domain) {
        cookieString += '; domain=' + options.domain;
    }
    if (options.secure) {
        cookieString += '; secure';
    }
    document.cookie = cookieString;
};

/**
 * @description 移除指定的 Cookie
 * @param name 要移除的 Cookie 名称
 * @param options Cookie 的其他选项 (可选)
 */
export const removeCookie = (name: string, options: CookieOptions = {}): void => {
    options.expires = new Date(0); // 设置过期时间为立即过期
    setCookie(name, '', options);
};

export default { getLocalStorage, setLocalStorage, removeLocalStorage, getCookie, setCookie, removeCookie }; 