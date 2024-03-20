<template>
  <!--begin::sidebar-->
  <div
    v-if="displaySidebar"
    ref="sidebarRef"
    id="app_sidebar"
    class="app-sidebar flex-column"
    data-drawer="true"
    data-drawer-name="app-sidebar"
    data-drawer-activate="{default: true, lg: false}"
    data-drawer-overlay="true"
    data-drawer-width="225px"
    data-drawer-direction="start"
    data-drawer-toggle="#app_sidebar_mobile_toggle"
  >
    <SidebarLogo :sidebar-ref="sidebarRef"></SidebarLogo>
    <SidebarMenu></SidebarMenu>
    <SidebarFooter></SidebarFooter>
  </div>
  <!--end::sidebar-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { displaySidebar } from "@/layouts/config/helper";
import SidebarLogo from "@/layouts/components/sidebar/SidebarLogo.vue";
import SidebarMenu from "@/layouts/components/sidebar/SidebarMenu.vue";
import SidebarFooter from "@/layouts/components/sidebar/SidebarFooter.vue";

export default defineComponent({
  name: "theme-sidebar",
  components: {
    SidebarLogo,
    SidebarMenu,
    SidebarFooter,
  },
  setup() {
    const sidebarRef = ref<HTMLFormElement | null>(null);

    return {
      displaySidebar,
      sidebarRef,
    };
  },
});
</script>
