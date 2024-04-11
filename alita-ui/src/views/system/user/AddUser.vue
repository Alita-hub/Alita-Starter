<template>
  <div class="modal fade" id="modal_add_user" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="modal_add_user_header">
          <h2 class="fw-bold">添加用户</h2>
          <div
            class="btn btn-icon btn-sm btn-active-icon-primary"
            data-bs-dismiss="modal"
          >
            <i class="ki-duotone ki-cross fs-1">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
          </div>
        </div>

        <div class="modal-body px-5 my-7">
          <Form
            class="form"
            id="modal_add_user_form"
            @submit="onSubmitAddUser"
            :validation-schema="addUser"
          >
            <div
              class="d-flex flex-column scroll-y px-5 px-lg-10"
              id="modal_add_user_scroll"
              data-scroll="true"
              data-scroll-activate="true"
              data-scroll-max-height="auto"
              data-scroll-dependencies="#modal_add_user_header"
              data-scroll-wrappers="#modal_add_user_scroll"
              data-scroll-offset="300px"
            >
              <div class="row g-9">
                <div class="fv-row mb-5 col-md-4">
                  <label class="d-block fw-semibold fs-6 mb-5">头像</label>

                  <div
                    class="image-input image-input-outline"
                    data-image-input="true"
                  >
                    <div class="image-input-wrapper w-125px h-125px"></div>
                    <label
                      class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-image-input-action="change"
                      data-bs-toggle="tooltip"
                      title="Change avatar"
                    >
                      <i class="ki-duotone ki-pencil fs-7">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                      <Field
                        tabindex="1"
                        type="file"
                        name="avatar"
                        accept=".png, .jpg, .jpeg"
                      />
                    </label>

                    <span
                      class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      title="Remove avatar"
                    >
                      <i class="ki-duotone ki-cross fs-2">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                    </span>
                  </div>

                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="avatar" v-slot="{ message }">
                        <p>{{ message }}</p>
                      </ErrorMessage>
                    </div>
                  </div>

                  <div class="form-text">允许上传格式: png, jpg, jpeg.</div>
                </div>

                <div class="fv-row mb-7 col-md-8">
                  <div class="fv-row mb-8">
                    <label class="required fw-semibold fs-6 mb-2">姓名</label>
                    <Field
                      tabindex="1"
                      class="form-control form-control-solid mb-3 mb-lg-0"
                      type="text"
                      name="name"
                      placeholder="输入姓名"
                      autocomplete="off"
                    />

                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="name" v-slot="{ message }">
                          <p>{{ message }}</p>
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>

                  <div class="fv-row mb-7">
                    <label class="required fw-semibold fs-6 mb-2">性别</label>

                    <div class="row ms-sm-0">
                      <div
                        class="form-check form-check-custom form-check-solid col-md-3"
                      >
                        <Field
                          tabindex="1"
                          class="form-check-input"
                          type="radio"
                          value="1"
                          id="male"
                          name="gender"
                        />
                        <label class="form-check-label" for="male"> 男 </label>
                      </div>

                      <div
                        class="form-check form-check-custom form-check-solid col-md-3"
                      >
                        <Field
                          tabindex="1"
                          class="form-check-input"
                          type="radio"
                          value="0"
                          id="female"
                          name="gender"
                        />
                        <label class="form-check-label" for="female">
                          女
                        </label>
                      </div>
                    </div>

                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="gender" v-slot="{ message }">
                          <p>{{ message }}</p>
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="separator separator-dashed my-5"></div>

              <div class="fv-row mb-5">
                <label class="fw-semibold fs-6 mb-2 required">账号</label>
                <Field
                  tabindex="1"
                  class="form-control form-control-lg form-control-solid"
                  type="text"
                  name="principal"
                  autocomplete="off"
                />

                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="principal" v-slot="{ message }">
                      <p>{{ message }}</p>
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              <div class="mb-5 fv-row" data-password-meter="true">
                <div class="mb-1">
                  <label class="form-label fw-semibold fs-6 mb-2 required">
                    密码
                  </label>

                  <div class="position-relative mb-3">
                    <Field
                      tabindex="1"
                      class="form-control form-control-lg form-control-solid"
                      type="password"
                      name="password"
                      autocomplete="off"
                    />

                    <span
                      class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                      data-password-meter-control="visibility"
                    >
                      <i class="ki-duotone ki-eye-slash fs-1"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span><span class="path4"></span
                      ></i>
                      <i class="ki-duotone ki-eye d-none fs-1"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                      ></i>
                    </span>
                  </div>

                  <div
                    class="d-flex align-items-center mb-3"
                    data-password-meter-control="highlight"
                  >
                    <div
                      class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                    ></div>
                    <div
                      class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                    ></div>
                    <div
                      class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                    ></div>
                    <div
                      class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
                    ></div>
                  </div>
                </div>

                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="password" v-slot="{ message }">
                      <p>{{ message }}</p>
                    </ErrorMessage>
                  </div>
                </div>

                <div class="text-muted">至少8个字符，混合字母，数字，符号</div>
              </div>

              <div class="separator separator-dashed my-5"></div>

              <div class="form-check form-switch">
                <label class="fw-semibold fs-6 mb-2" for="flexSwitchChecked"
                  >是否启用</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  true-value="1"
                  false-value="0"
                  id="flexSwitchChecked"
                  v-model="toggle"
                />
              </div>

              <div class="separator separator-dashed my-5"></div>

              <div class="fv-row mb-7">
                <label class="fw-semibold fs-6 mb-2">邮箱</label>
                <input
                  type="email"
                  name="email"
                  class="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder=""
                  value=""
                />
              </div>

              <div class="fv-row mb-7">
                <label class="fw-semibold fs-6 mb-2">手机号</label>
                <input
                  type="phone"
                  name="phone"
                  class="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder=""
                  value=""
                />
              </div>
            </div>

            <div class="text-center pt-10">
              <button type="reset" class="btn btn-light me-3">重置</button>
              <button type="submit" class="btn btn-primary">
                <span class="indicator-label">提交</span>
                <span class="indicator-progress"
                  >请稍等...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span
                ></span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ErrorMessage, Field, Form } from "vee-validate";
import { defineComponent } from "vue";
import * as Yup from "yup";


export default defineComponent({
  name: "add-user",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    // 表单验证
    const addUser = Yup.object().shape({
      avatar: Yup.mixed().test(
        "fileFormat",
        "不支持的图片格式",
        (value: any) => {
          const supportedFormats = ["image/jpeg", "image/png", "image/jpg"];
          if (!value) return true;
          return supportedFormats.includes(value.type);
        }
      ),
      name: Yup.string().required("姓名为必填项"),
      gender: Yup.string().required("性别为必填项"),
      principal: Yup.string().required("账号为必填项"),
      password: Yup.string()
        .required("密码为必填项")
        .min(4, "密码长度不得小于4位"),
    });

    const onSubmitAddUser = async (params: any) => {};

    return {
      addUser,
      getAssetPath,
      onSubmitAddUser,
    };
  },
});
</script>
