<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <Aside
      v-if="asideEnabled"
      :lightLogo="themeLightLogo"
      :darkLogo="themeDarkLogo"
    />
    <!-- end:: Aside Left -->

    <div id="alita_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
      <Header />

      <!-- begin:: Content -->
      <div
        id="alita_content"
        class="content d-flex flex-column flex-column-fluid"
      >
        <!-- begin:: Content Body -->
        <div class="post d-flex flex-column-fluid">
          <div
            id="alita_content_container"
            :class="{
              'container-fluid': contentWidthFluid,
              'container-xxl': !contentWidthFluid,
            }"
          >
            <router-view />
          </div>
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <Footer />
    </div>
  </div>
  <!-- end:: Body -->
  <ScrollTop />
  <DrawerMessenger />
  <ActivivityDrawer />
  <CreateApp />
  <InviteFriendsModal />

  <ToolButtons />
  <HelpDrawer />
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import Aside from "@/layouts/components/aside/Aside.vue";
import Header from "@/layouts/components/header/Header.vue";
import Footer from "@/layouts/components/footer/Footer.vue";
import ScrollTop from "@/layouts/components/extras/ScrollTop.vue";
import ActivivityDrawer from "@/layouts/components/drawers/ActivityDrawer.vue";
import CreateApp from "@/components/modals/wizards/CreateAppModal.vue";
import InviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import HelpDrawer from "@/layouts/components/extras/HelpDrawer.vue";
import ToolButtons from "@/layouts/components/extras/ToolButtons.vue";
import DrawerMessenger from "@/layouts/components/extras/MessengerDrawer.vue";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import {
  asideEnabled,
  contentWidthFluid,
  loaderEnabled,
  loaderLogo,
  subheaderDisplay,
  themeDarkLogo,
  themeLightLogo,
  toolbarDisplay,
} from "@/layouts/config/helper";
import LayoutService from "@/core/services/LayoutService";

export default defineComponent({
  name: "default-layout",
  components: {
    Aside,
    Header,
    Footer,
    ScrollTop,
    CreateApp,
    InviteFriendsModal,
    ActivivityDrawer,
    HelpDrawer,
    ToolButtons,
    DrawerMessenger,
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

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>
@/layouts/config/helper
