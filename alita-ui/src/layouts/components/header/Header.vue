<template>
  <!--begin::Header-->
  <div v-if="headerDisplay" id="app_header" class="app-header">
    <!--begin::Header container-->
    <div
      class="app-container d-flex align-items-stretch justify-content-between"
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
    >
      <div
        v-if="layout === 'light-header' || layout === 'dark-header'"
        class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15"
      >
        <router-link to="/">
          <img
            v-if="themeMode === 'light' && layout === 'light-header'"
            alt="Logo"
            :src="getAssetPath('media/logos/default.svg')"
            class="h-20px h-lg-30px app-sidebar-logo-default theme-light-show"
          />
          <img
            v-if="
              layout === 'dark-header' ||
              (themeMode === 'dark' && layout === 'light-header')
            "
            alt="Logo"
            :src="getAssetPath('media/logos/default-dark.svg')"
            class="h-20px h-lg-30px app-sidebar-logo-default"
          />
        </router-link>
      </div>
      <template v-else>
        <!--begin::sidebar mobile toggle-->
        <div
          class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
          v-tooltip
          title="Show sidebar menu"
        >
          <div
            class="btn btn-icon btn-active-color-primary w-35px h-35px"
            id="app_sidebar_mobile_toggle"
          >
            <Icon icon-name="abstract-14" icon-class="fs-2 fs-md-1" />
          </div>
        </div>
        <!--end::sidebar mobile toggle-->
        <!--begin::Mobile logo-->
        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <router-link to="/" class="d-lg-none">
            <img
              alt="Logo"
              :src="getAssetPath('media/logos/default-small.svg')"
              class="h-30px"
            />
          </router-link>
        </div>
        <!--end::Mobile logo-->
      </template>
      <!--begin::Header wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        id="app_header_wrapper"
      >
        <HeaderMenu />
        <HeaderNavbar />
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import HeaderMenu from "@/layouts/components/header/menu/Menu.vue";
import HeaderNavbar from "@/layouts/components/header/Navbar.vue";
import {
  headerDisplay,
  headerWidthFluid,
  layout,
  themeMode,
  headerDesktopFixed,
  headerMobileFixed,
} from "@/layouts/config/helper";

export default defineComponent({
  name: "layout-header",
  components: {
    HeaderMenu,
    HeaderNavbar,
  },
  setup() {
    return {
      layout,
      headerWidthFluid,
      headerDisplay,
      themeMode,
      getAssetPath,
      headerDesktopFixed,
      headerMobileFixed,
    };
  },
});
</script>
