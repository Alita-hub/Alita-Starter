import StorageService, { type CookieOptions } from "./StorageService";

const JWT_TOKEN_KEY = "jwt_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return StorageService.getLocalStorage(JWT_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  StorageService.setLocalStorage(JWT_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  StorageService.removeLocalStorage(JWT_TOKEN_KEY);
};


export default { getToken, saveToken, destroyToken };
