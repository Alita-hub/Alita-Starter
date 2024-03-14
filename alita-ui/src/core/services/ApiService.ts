import type { AxiosResponse, AxiosInstance } from "axios";
import axios, { HttpStatusCode } from "axios";
import { useAuthStore } from "@/stores/auth";
import JwtService from "@/core/services/JwtService";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {

  public static axiosInstance: AxiosInstance;

  /**
   * @description initialize axios
   */
  public static init() {
    // new instance of axios with a custom config.
    ApiService.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL
    });

    // 请求拦截器，在请求发送前，统一添加 Token 请求头
    ApiService.axiosInstance.interceptors.request.use(
      request => {
        const token = JwtService.getToken();
        if (token) {
          request.headers.Authorization = `${token}`;
        }
        return request;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器，统一拦截Unauthorized
    ApiService.axiosInstance.interceptors.response.use(
      response => {
        if (response.status === HttpStatusCode.Unauthorized) {
          useAuthStore().isAuthenticated = false;
        }
        return response;
      }
    )
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.axiosInstance.get(resource, params);
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(
    resource: string,
    slug = "" as string
  ): Promise<AxiosResponse> {
    return ApiService.axiosInstance.get(`${resource}/${slug}`);
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.axiosInstance.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    slug: string,
    params: any
  ): Promise<AxiosResponse> {
    return ApiService.axiosInstance.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.axiosInstance.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return ApiService.axiosInstance.delete(resource);
  }
}

export default ApiService;
