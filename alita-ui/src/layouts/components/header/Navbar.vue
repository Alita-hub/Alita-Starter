<template>
  <!--begin::Navbar-->
  <div class="app-navbar flex-shrink-0">
    <!--begin::Search-->
    <div class="app-navbar-item align-items-stretch ms-1 ms-md-4">
      <Search />
    </div>
    <!--end::Search-->
    <!--begin::Activities-->
    <div class="app-navbar-item ms-1 ms-md-4">
      <!--begin::Drawer toggle-->
      <div
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
        id="activities_toggle"
      >
        <Icon icon-name="messages" icon-class="fs-2" />
      </div>
      <!--end::Drawer toggle-->
    </div>
    <!--end::Activities-->
    <!--begin::Notifications-->
    <div class="app-navbar-item ms-1 ms-md-4">
      <!--begin::Menu- wrapper-->
      <div
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
        data-menu-trigger="{default: 'click', lg: 'hover'}"
        data-menu-attach="parent"
        data-menu-placement="bottom-end"
        id="menu_item_wow"
      >
        <Icon icon-name="notification-status" icon-class="fs-2" />
      </div>
      <NotificationMenu />
      <!--end::Menu wrapper-->
    </div>
    <!--end::Notifications-->
    <!--begin::Chat-->
    <div class="app-navbar-item ms-1 ms-md-4">
      <!--begin::Menu wrapper-->
      <div
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative"
        id="drawer_chat_toggle"
      >
        <Icon icon-name="message-text-2" icon-class="fs-2" />
        <span
          class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
        ></span>
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->
    <!--begin::Theme mode-->
    <div class="app-navbar-item ms-1 ms-md-3">
      <!--begin::Menu toggle-->
      <a
        href="#"
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
        data-menu-trigger="{default:'click', lg: 'hover'}"
        data-menu-attach="parent"
        data-menu-placement="bottom-end"
      >
        <Icon
          v-if="themeMode === 'light'"
          icon-name="night-day"
          icon-class="fs-2"
        />
        <Icon v-else icon-name="moon" icon-class="fs-2" />
      </a>
      <!--begin::Menu toggle-->
      <ThemeModeSwitcher />
    </div>
    <!--end::Theme mode-->
    <!--begin::User menu-->
    <div class="app-navbar-item ms-1 ms-md-4" id="header_user_menu_toggle">
      <!--begin::Menu wrapper-->
      <div
        class="cursor-pointer symbol symbol-35px"
        data-menu-trigger="{default: 'click', lg: 'hover'}"
        data-menu-attach="parent"
        data-menu-placement="bottom-end"
      >
        <img
          :src="getAssetPath('media/avatars/300-3.jpg')"
          class="rounded-3"
          alt="user"
        />
      </div>
      <UserMenu />
      <!--end::Menu wrapper-->
    </div>
    <!--end::User menu-->
    <!--begin::Header menu toggle-->
    <div
      class="app-navbar-item d-lg-none ms-2 me-n2"
      v-tooltip
      title="Show header menu"
    >
      <div
        class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
        id="app_header_menu_toggle"
      >
        <Icon icon-name="element-4" icon-class="fs-2" />
      </div>
    </div>
    <!--end::Header menu toggle-->
  </div>
  <!--end::Navbar-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent } from "vue";
import Search from "@/layouts/components/search/Search.vue";
import NotificationMenu from "@/layouts/components/menus/NotificationsMenu.vue";
import UserMenu from "@/layouts/components/menus/UserAccountMenu.vue";
import ThemeModeSwitcher from "@/layouts/components/theme-mode/ThemeModeSwitcher.vue";
import { ThemeModeComponent } from "@/assets/ts/layout";
import { useThemeStore } from "@/stores/theme";

export default defineComponent({
  name: "header-navbar",
  components: {
    Search,
    NotificationMenu,
    UserMenu,
    ThemeModeSwitcher,
  },
  setup() {
    const store = useThemeStore();

    const themeMode = computed(() => {
      if (store.mode === "system") {
        return ThemeModeComponent.getSystemMode();
      }
      return store.mode;
    });

    return {
      themeMode,
      getAssetPath,
    };
  },
});
</script>
