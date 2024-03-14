<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside"
    data-alita-drawer="true"
    data-alita-drawer-name="aside"
    data-alita-drawer-activate="{default: true, lg: false}"
    data-alita-drawer-overlay="true"
    data-alita-drawer-width="{default:'200px', '300px': '250px'}"
    data-alita-drawer-direction="start"
    data-alita-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <!--begin::Aside Toolbarl-->
    <div class="aside-toolbar flex-column-auto" id="kt_aside_toolbar">
      <!--begin::Aside user-->
      <AsideToolbar />
      <!--end::Aside user-->
    </div>
    <!--end::Aside Toolbarl-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto py-5" id="kt_aside_footer">
      <a
        href="https://preview.keenthemes.com/metronic8/vue/docs/index"
        class="btn btn-custom btn-primary w-100"
      >
        <span class="btn-label">{{ t("docsAndComponents") }}</span>
        <AlitaIcon icon-name="document" icon-class="btn-icon fs-2" />
      </a>
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layouts/default-layout/components/aside/Menu.vue";
import AsideToolbar from "@/layouts/default-layout/components/aside/AsideToolbar.vue";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
    AsideToolbar,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      getAssetPath,
    };
  },
});
</script>
