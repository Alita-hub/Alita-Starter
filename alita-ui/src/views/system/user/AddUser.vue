<template>
    <div class="modal fade" id="modal_add_user" tabindex="-1" aria-hidden="true">
			<!--begin::Modal dialog-->
			<div class="modal-dialog modal-dialog-centered mw-650px">
				<!--begin::Modal content-->
				<div class="modal-content">
					<!--begin::Modal header-->
					<div class="modal-header" id="modal_add_user_header">
						<!--begin::Modal title-->
						<h2 class="fw-bold">Add User</h2>
						<!--end::Modal title-->
						<!--begin::Close-->
						<div class="btn btn-icon btn-sm btn-active-icon-primary" data-users-modal-action="close">
							<i class="ki-duotone ki-cross fs-1">
								<span class="path1"></span>
								<span class="path2"></span>
							</i>
						</div>
						<!--end::Close-->
					</div>
					<!--end::Modal header-->
					<!--begin::Modal body-->
					<div class="modal-body px-5 my-7">

						<form id="modal_add_user_form" class="form" action="#">

							<div class="d-flex flex-column scroll-y px-5 px-lg-10" id="modal_add_user_scroll" data-scroll="true" data-scroll-activate="true" data-scroll-max-height="auto" data-scroll-dependencies="#modal_add_user_header" data-scroll-wrappers="#modal_add_user_scroll" data-scroll-offset="300px">
								<div class="row g-9 ">

									<div class="fv-row mb-7 col-md-4">
										<label class="d-block fw-semibold fs-6 mb-5">头像</label>

										<div class="image-input image-input-outline" data-image-input="true">
											<div class="image-input-wrapper w-125px h-125px"></div>
											<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
												<i class="ki-duotone ki-pencil fs-7">
													<span class="path1"></span>
													<span class="path2"></span>
												</i>
												<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
												<input type="hidden" name="avatar_remove" />
											</label>

											<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
												<i class="ki-duotone ki-cross fs-2">
													<span class="path1"></span>
													<span class="path2"></span>
												</i>
											</span>
										</div>

										<div class="form-text">允许上传格式: png, jpg, jpeg.</div>
									</div>
									
                  <div class="fv-row mb-7 col-md-8">
                    <div class="fv-row mb-8">
                      <label class="required fw-semibold fs-6 mb-2">姓名</label>
                      <input type="text" name="user_name" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="输入姓名" value="" />
                    </div>

                    <div class="fv-row mb-7">
                      <label class="required fw-semibold fs-6 mb-2">性别</label>

                      <div class="row ms-sm-0">
                        <div class="form-check form-check-custom form-check-solid col-md-3">
                          <input class="form-check-input" name="gender" type="radio" value="1" id="male"/>
                          <label class="form-check-label" for="male">
                              男
                          </label>
                        </div>

                        <div class="form-check form-check-custom form-check-solid col-md-3">
                          <input class="form-check-input" name="gender" type="radio" value="0" id="female" />
                          <label class="form-check-label" for="female">
                              女
                          </label>
                        </div>
                      </div>           
                    </div>
                    
                  </div>
                  
								</div>
								
                <div class='separator separator-dashed my-5'></div>

                <div class="fv-row mb-7">
									<label class="fw-semibold fs-6 mb-2 required">账号</label>
									<input type="text" name="principal" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="" value="" />
								</div>

                <!--begin::Input group-->
                <div class="mb-10 fv-row" data-password-meter="true">
                  <!--begin::Wrapper-->
                  <div class="mb-1">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold fs-6 mb-2 required">
                          密码
                      </label>
                      <!--end::Label-->

                      <!--begin::Input wrapper-->
                      <div class="position-relative mb-3">
                          <input class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="new_password" autocomplete="off" />

                          <span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-password-meter-control="visibility">
                              <i class="ki-duotone ki-eye-slash fs-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>
                              <i class="ki-duotone ki-eye d-none fs-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>
                          </span>
                      </div>
                      <!--end::Input wrapper-->

                      <!--begin::Meter-->
                      <div class="d-flex align-items-center mb-3" data-password-meter-control="highlight">
                          <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                          <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                          <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                          <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                      </div>
                      <!--end::Meter-->
                  </div>
                  <!--end::Wrapper-->

                  <!--begin::Hint-->
                  <div class="text-muted">
                      Use 8 or more characters with a mix of letters, numbers & symbols.
                  </div>
                  <!--end::Hint-->
                </div>
                <!--end::Input group--->

                <div class='separator separator-dashed my-5'></div>

								<div class="fv-row mb-7">
									<label class="fw-semibold fs-6 mb-2">邮箱</label>
									<input type="email" name="email" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="" value="" />
								</div>

                <div class="fv-row mb-7">
									<label class="fw-semibold fs-6 mb-2">手机号</label>
									<input type="phone" name="phone" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="" value="" />
								</div>

								<div class="mb-5">
									<!--begin::Label-->
									<label class="required fw-semibold fs-6 mb-5">Role</label>
									<!--end::Label-->
									<!--begin::Roles-->
									<!--begin::Input row-->
									<div class="d-flex fv-row">
										<!--begin::Radio-->
										<div class="form-check form-check-custom form-check-solid">
											<!--begin::Input-->
											<input class="form-check-input me-3" name="user_role" type="radio" value="0" id="modal_update_role_option_0" checked='checked' />
											<!--end::Input-->
											<!--begin::Label-->
											<label class="form-check-label" for="modal_update_role_option_0">
												<div class="fw-bold text-gray-800">Administrator</div>
												<div class="text-gray-600">Best for business owners and company administrators</div>
											</label>
											<!--end::Label-->
										</div>
										<!--end::Radio-->
									</div>
									<!--end::Input row-->
									<div class='separator separator-dashed my-5'></div>
									<!--begin::Input row-->
									<div class="d-flex fv-row">
										<!--begin::Radio-->
										<div class="form-check form-check-custom form-check-solid">
											<!--begin::Input-->
											<input class="form-check-input me-3" name="user_role" type="radio" value="1" id="modal_update_role_option_1" />
											<!--end::Input-->
											<!--begin::Label-->
											<label class="form-check-label" for="modal_update_role_option_1">
												<div class="fw-bold text-gray-800">Developer</div>
												<div class="text-gray-600">Best for developers or people primarily using the API</div>
											</label>
											<!--end::Label-->
										</div>
										<!--end::Radio-->
									</div>
									<!--end::Input row-->
									<div class='separator separator-dashed my-5'></div>
									<!--begin::Input row-->
									<div class="d-flex fv-row">
										<!--begin::Radio-->
										<div class="form-check form-check-custom form-check-solid">
											<!--begin::Input-->
											<input class="form-check-input me-3" name="user_role" type="radio" value="2" id="modal_update_role_option_2" />
											<!--end::Input-->
											<!--begin::Label-->
											<label class="form-check-label" for="modal_update_role_option_2">
												<div class="fw-bold text-gray-800">Analyst</div>
												<div class="text-gray-600">Best for people who need full access to analytics data, but don't need to update business settings</div>
											</label>
											<!--end::Label-->
										</div>
										<!--end::Radio-->
									</div>
									<!--end::Input row-->
									<div class='separator separator-dashed my-5'></div>
									<!--begin::Input row-->
									<div class="d-flex fv-row">
										<!--begin::Radio-->
										<div class="form-check form-check-custom form-check-solid">
											<!--begin::Input-->
											<input class="form-check-input me-3" name="user_role" type="radio" value="3" id="modal_update_role_option_3" />
											<!--end::Input-->
											<!--begin::Label-->
											<label class="form-check-label" for="modal_update_role_option_3">
												<div class="fw-bold text-gray-800">Support</div>
												<div class="text-gray-600">Best for employees who regularly refund payments and respond to disputes</div>
											</label>
											<!--end::Label-->
										</div>
										<!--end::Radio-->
									</div>
									<!--end::Input row-->
									<div class='separator separator-dashed my-5'></div>
									<!--begin::Input row-->
									<div class="d-flex fv-row">
										<!--begin::Radio-->
										<div class="form-check form-check-custom form-check-solid">
											<!--begin::Input-->
											<input class="form-check-input me-3" name="user_role" type="radio" value="4" id="modal_update_role_option_4" />
											<!--end::Input-->
											<!--begin::Label-->
											<label class="form-check-label" for="modal_update_role_option_4">
												<div class="fw-bold text-gray-800">Trial</div>
												<div class="text-gray-600">Best for people who need to preview content data, but don't need to make any updates</div>
											</label>
											<!--end::Label-->
										</div>
										<!--end::Radio-->
									</div>
									<!--end::Input row-->
									<!--end::Roles-->
								</div>
								<!--end::Input group-->
							</div>
							<!--end::Scroll-->
							<!--begin::Actions-->
							<div class="text-center pt-10">
								<button type="reset" class="btn btn-light me-3" data-users-modal-action="cancel">Discard</button>
								<button type="submit" class="btn btn-primary" data-users-modal-action="submit">
									<span class="indicator-label">Submit</span>
									<span class="indicator-progress">Please wait... 
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
							</div>
							<!--end::Actions-->
						</form>
						<!--end::Form-->
					</div>
					<!--end::Modal body-->
				</div>
				<!--end::Modal content-->
			</div>
		<!--end::Modal dialog-->
	</div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from 'vue';


export default defineComponent({
	name: "add-user",
	components: {},
	setup() {

		return {
			getAssetPath
		}
	}
})
</script>