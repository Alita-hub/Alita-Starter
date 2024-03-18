import StorageService, { type CookieOptions } from "./StorageService";

const JWT_TOKEN_KEY = "jwt_token" as string;

/**
 * @description 获取token
 */
export const getToken = (): string | null => {
  return StorageService.getLocalStorage(JWT_TOKEN_KEY);
};

/**
 * @description 保存token
 * @param token: string
 */
export const saveToken = (token: string): void => {
  StorageService.setLocalStorage(JWT_TOKEN_KEY, token);
};

/**
 * @description 删除token
 */
export const destroyToken = (): void => {
  StorageService.removeLocalStorage(JWT_TOKEN_KEY);
};


export default { getToken, saveToken, destroyToken };
