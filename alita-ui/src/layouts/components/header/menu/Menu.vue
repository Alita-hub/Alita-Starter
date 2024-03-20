<template>
  <!--begin::Menu wrapper-->
  <div
    v-if="headerMenuDisplay"
    class="app-header-menu app-header-mobile-drawer align-items-stretch"
    data-drawer="true"
    data-drawer-name="app-header-menu"
    data-drawer-activate="{default: true, lg: false}"
    data-drawer-overlay="true"
    data-drawer-width="225px"
    data-drawer-direction="end"
    data-drawer-toggle="#app_header_menu_toggle"
    data-swapper="true"
    data-swapper-mode="{default: 'append', lg: 'prepend'}"
    data-swapper-parent="{default: '#app_body', lg: '#app_header_wrapper'}"
  >
    <!--begin::Menu-->
    <div
      class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
      id="app_header_menu"
      data-menu="true"
    >
      <MenuPages></MenuPages>

      <div
        data-menu-trigger="{default: 'click', lg: 'hover'}"
        data-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
      >
        <!--begin:Menu link-->
        <span class="menu-link">
          <span class="menu-title">Help</span>
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <!--end:Menu link-->
        <!--begin:Menu sub-->
        <div
          class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px"
        >
          <!--begin:Menu item-->
          <div class="menu-item">
            <!--begin:Menu link-->
            <a
              class="menu-link"
              href="http://alita.com/metronic8/vue/docs/base/utilities"
              title="Check out over 200 in-house components, plugins and ready for use solutions"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span class="menu-icon">
                <Icon icon-name="rocket" icon-class="fs-3" />
              </span>
              <span class="menu-title">Components</span>
            </a>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->
          <!--begin:Menu item-->
          <div class="menu-item">
            <!--begin:Menu link-->
            <a
              class="menu-link"
              href="http://alita.com/metronic8/vue/docs/index"
              title="Check out the complete documentation"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span class="menu-icon">
                <Icon icon-name="abstract-26" icon-class="fs-3" />
              </span>
              <span class="menu-title">Documentation</span>
            </a>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->
          <!--begin:Menu item-->
          <div class="menu-item">
            <!--begin:Menu link-->
            <a
              class="menu-link"
              href="http://alita.com/metronic8/vue/docs/getting-started/changelog"
            >
              <span class="menu-icon">
                <Icon icon-name="code" icon-class="fs-3" />
              </span>
              <span class="menu-title">Changelog v{{ version }}</span>
            </a>
            <!--end:Menu link-->
          </div>
          <!--end:Menu item-->
        </div>
        <!--end:Menu sub-->
      </div>
      <!--end:Menu item-->
    </div>
    <!--end::Menu-->
  </div>
  <div v-else class="align-items-stretch"></div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import MenuPages from "@/layouts/components/header/menu/MenuPages.vue";
import { version } from "@/core/helpers/system";
import { headerMenuDisplay } from "@/layouts/config/helper";

export default defineComponent({
  name: "header-menu",
  components: {
    MenuPages,
  },
  setup() {
    return {
      version,
      headerMenuDisplay,
      getAssetPath,
    };
  },
});
</script>
