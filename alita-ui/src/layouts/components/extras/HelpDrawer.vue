<template>
  <!--begin::Help drawer-->
  <div
    id="help"
    class="bg-body"
    data-drawer="true"
    data-drawer-name="help"
    data-drawer-activate="true"
    data-drawer-overlay="true"
    data-drawer-width="{default:'350px', 'md': '525px'}"
    data-drawer-direction="end"
    data-drawer-toggle="#help_toggle"
    data-drawer-close="#help_close"
  >
    <!--begin::Card-->
    <div class="card shadow-none rounded-0 w-100">
      <!--begin::Header-->
      <div class="card-header" id="help_header">
        <h5 class="card-title fw-semibold text-gray-600">
          Learn & Get Inspired
        </h5>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon explore-btn-dismiss me-n5"
            id="help_close"
          >
            <Icon icon-name="cross" icon-class="fs-2" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body" id="help_body">
        <!--begin::Content-->
        <div
          id="help_scroll"
          class="hover-scroll-overlay-y"
          data-scroll="true"
          data-scroll-height="auto"
          data-scroll-wrappers="#help_body"
          data-scroll-dependencies="#help_header"
          data-scroll-offset="5px"
        >
          <!--begin::Support-->
          <div
            class="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10"
          >
            <!--begin::Heading-->
            <h2 class="fw-bold mb-5">
              Support at
              <a href="https://devs.keenthemes.com" class=""
                >devs.keenthemes.com</a
              >
            </h2>
            <!--end::Heading-->
            <!--begin::Description-->
            <div class="fs-5 fw-semibold mb-5">
              <span class="text-gray-500"
                >Join our developers community to find answer to your question
                and help others.</span
              >
              <a
                class="explore-link d-none"
                href="https://keenthemes.com/licensing"
                >FAQs</a
              >
            </div>
            <!--end::Description-->
            <!--begin::Link-->
            <a
              href="https://devs.keenthemes.com"
              class="btn btn-lg explore-btn-primary w-100"
              >Get Support</a
            >
            <!--end::Link-->
          </div>
          <!--end::Support-->
          <!--begin::Link-->
          <div class="d-flex align-items-center mb-7">
            <!--begin::Icon-->
            <div
              class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning"
            >
              <Icon
                icon-name="abstract-26"
                icon-class="text-warning fs-2x fs-lg-3x"
              />
            </div>
            <!--end::Icon-->
            <!--begin::Info-->
            <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              <!--begin::Wrapper-->
              <div class="d-flex flex-column me-2 me-lg-5">
                <!--begin::Title-->
                <a
                  href="http://alita.com/metronic8/vue/docs/getting-started/build"
                  class="text-gray-900 text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                  >Documentation &amp; Videos</a
                >
                <!--end::Title-->
                <!--begin::Description-->
                <div class="text-muted fw-semibold fs-7 fs-lg-6">
                  From guides and video tutorials, to live demos and code
                  examples to get started.
                </div>
                <!--end::Description-->
              </div>
              <!--end::Wrapper-->
              <Icon icon-name="arrow-right" icon-class="text-gray-500 fs-2" />
            </div>
            <!--end::Info-->
          </div>
          <!--end::Link-->
          <!--begin::Link-->
          <div class="d-flex align-items-center mb-7">
            <!--begin::Icon-->
            <div
              class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary"
            >
              <Icon icon-name="gift" icon-class="text-primary fs-2x fs-lg-3x" />
            </div>
            <!--end::Icon-->
            <!--begin::Info-->
            <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              <!--begin::Wrapper-->
              <div class="d-flex flex-column me-2 me-lg-5">
                <!--begin::Title-->
                <a
                  href="http://alita.com/metronic8/vue/docs/base/utilities"
                  class="text-gray-900 text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                  >Plugins &amp; Components</a
                >
                <!--end::Title-->
                <!--begin::Description-->
                <div class="text-muted fw-semibold fs-7 fs-lg-6">
                  Check out our 300+ in-house components and customized
                  3rd-party plugins.
                </div>
                <!--end::Description-->
              </div>
              <!--end::Wrapper-->
              <Icon icon-name="arrow-right" icon-class="text-gray-500 fs-2" />
            </div>
            <!--end::Info-->
          </div>
          <!--end::Link-->
          <!--begin::Link-->
          <div class="d-flex align-items-center mb-7">
            <!--begin::Icon-->
            <div
              class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info"
            >
              <Icon
                icon-name="design-frame"
                icon-class="text-info fs-2x fs-lg-3x"
              />
            </div>
            <!--end::Icon-->
            <!--begin::Info-->
            <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              <!--begin::Wrapper-->
              <div class="d-flex flex-column me-2 me-lg-5">
                <!--begin::Title-->
                <router-link
                  to="/builder"
                  class="text-gray-900 text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                  >Layout Builder</router-link
                >
                <!--end::Title-->
                <!--begin::Description-->
                <div class="text-muted fw-semibold fs-7 fs-lg-6">
                  Dynamically modify and preview layout
                </div>
                <!--end::Description-->
              </div>
              <!--end::Wrapper-->
              <Icon icon-name="phone" icon-class="text-gray-500 fs-2" />
            </div>
            <!--end::Info-->
          </div>
          <!--end::Link-->
          <!--begin::Link-->
          <div class="d-flex align-items-center mb-7">
            <!--begin::Icon-->
            <div
              class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger"
            >
              <Icon icon-name="wifi" icon-class="text-danger fs-2x fs-lg-3x" />
            </div>
            <!--end::Icon-->
            <!--begin::Info-->
            <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              <!--begin::Wrapper-->
              <div class="d-flex flex-column me-2 me-lg-5">
                <!--begin::Title-->
                <a
                  href="http://alita.com/metronic8/vue/docs/getting-started/changelog"
                  class="text-gray-900 text-hover-primary fw-bold fs-6 fs-lg-4 mb-1"
                  >What's New</a
                >
                <!--end::Title-->
                <!--begin::Description-->
                <div class="text-muted fw-semibold fs-7 fs-lg-6">
                  Latest features and improvements added with our users feedback
                  in mind.
                </div>
                <!--end::Description-->
              </div>
              <!--end::Wrapper-->
              <Icon icon-name="arrow-right" icon-class="text-gray-500 fs-2" />
            </div>
            <!--end::Info-->
          </div>
          <!--end::Link-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Help drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "help-drawer",
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
