<template>
  <!--begin::App-->
  <div class="d-flex flex-column flex-root app-root" id="app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="app_page">
      <Header />
      <!--begin::Wrapper-->
      <div class="app-wrapper flex-column flex-row-fluid" id="app_wrapper">
        <Sidebar />
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <Toolbar />
            <div id="app_content" class="app-content flex-column-fluid">
              <Content></Content>
            </div>
          </div>
          <!--end::Content wrapper-->
          <Footer />
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
  <!--end::App-->

  <Drawers />
  <ScrollTop />
  <Modals />
  <Customize />
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import Header from "@/layouts/components/header/Header.vue";
import Sidebar from "@/layouts/components/sidebar/Sidebar.vue";
import Content from "@/layouts/components/content/Content.vue";
import Toolbar from "@/layouts/components/toolbar/Toolbar.vue";
import Footer from "@/layouts/components/footer/Footer.vue";
import Drawers from "@/layouts/components/drawers/Drawers.vue";
import Modals from "@/layouts/components/modals/Modals.vue";
import ScrollTop from "@/layouts/components/extras/ScrollTop.vue";
import Customize from "@/layouts/components/extras/Customize.vue";
import { useRoute } from "vue-router";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import LayoutService from "@/core/services/LayoutService";

export default defineComponent({
  name: "default-layout",
  components: {
    Header,
    Sidebar,
    Content,
    Toolbar,
    Footer,
    Drawers,
    ScrollTop,
    Modals,
    Customize,
  },
  setup() {
    const route = useRoute();

    onBeforeMount(() => {
      LayoutService.init();
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );
  },
});
</script>
