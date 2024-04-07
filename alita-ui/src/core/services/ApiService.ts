import type { AxiosResponse, AxiosInstance } from "axios";
import axios, { HttpStatusCode } from "axios";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";
import JwtService from "@/core/services/JwtService";
import Swal from "sweetalert2/dist/sweetalert2.js";

/**
 * @description strategy to call HTTP request via Axios
 */
class ApiService {

  public static axiosInstance: AxiosInstance;

  /**
   * @description 初始化Axios，配置拦截器
   */
  public static init() {

    // 创建axios自定义实例
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
        if (!error) {
          // network error
          this.alertNetError();
        } 
        return Promise.reject(error);
      }
    );

    // 响应拦截器，统一拦截Unauthorized
    ApiService.axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          this.alertNetError();
          return Promise.reject(error);
        }

        // 任何超出 2xx 范围的状态代码都会触发该功能
        if (error.response.status === HttpStatusCode.Unauthorized) {
          useAuthStore().isAuthenticated = false;

          Swal.fire({
            text: error.response.data.message,
            icon: "error",
            showConfirmButton: true,
            showCancelButton: false,
            buttonsStyling: false,
            //timer: 1000,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semibold btn-light-primary",
            },
          }).then(() => {
            router.push({ name: "sign-in" });
          });
        }
        
        return Promise.reject(error);
      }
    );

  }

  public static alertNetError() {
    Swal.fire({
      text: '网络连接异常',
      icon: "error",
      showConfirmButton: true,
      showCancelButton: false,
      buttonsStyling: false,
      //timer: 1000,
      confirmButtonText: "Ok, got it!",
      heightAuto: false,
      customClass: {
        confirmButton: "btn fw-semibold btn-light-primary",
      },
    })
  }

  /**
   * @description 发送Get请求
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.axiosInstance.get(resource, params);
  }

  /**
   * @description 发送Get请求，使用占位符传参
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
   * @description 发送Post请求
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.axiosInstance.post(`${resource}`, params);
  }

  /**
   * @description 发送Update请求
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
   * @description 发送Put请求
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.axiosInstance.put(`${resource}`, params);
  }

  /**
   * @description 发送Delete请求
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return ApiService.axiosInstance.delete(resource);
  }
}

export default ApiService;
