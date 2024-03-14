import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { HttpStatusCode } from "axios";

export interface User {
  username: string;
  email: string;
  password: string;
  loginType: string;
  token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const msg = ref('');
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    msg.value = '';
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    return ApiService.post("/authentication/login", credentials)
      .then(({ data }) => {
        if(data.code == HttpStatusCode.Ok) {
          isAuthenticated.value = true;
          JwtService.saveToken(data.data);
        } else {
          msg.value = data.msg;
        }
      })
      .catch(({ response }) => {
        msg.value = response.msg;
      });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {

      })
      .catch(({ response }) => {
        msg.value = response.msg;
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        msg.value = '';
      })
      .catch(({ response }) => {
        msg.value = response.msg;
      });
  }


  return {
    msg,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword  
  };
});
