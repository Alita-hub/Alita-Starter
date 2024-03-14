import StorageService from "./StorageService";

const JWT_TOKEN_KEY = "jwt_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return StorageService.getCookie(JWT_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string, options: any): void => {
  StorageService.setCookie(JWT_TOKEN_KEY, token, options);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  StorageService.removeCookie(JWT_TOKEN_KEY);
};


export default { getToken, saveToken, destroyToken };
