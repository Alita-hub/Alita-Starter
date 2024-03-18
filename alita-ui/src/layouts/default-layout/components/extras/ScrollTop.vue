<template>
  <!-- begin::Scrolltop -->
  <div
    v-if="scrolltopDispaly"
    id="alita_scrolltop"
    ref="alita_scrolltop"
    class="scrolltop"
    data-alita-scrolltop="true"
  >
    <AlitaIcon icon-name="arrow-up" icon-class="fs-2x" />
  </div>
  <!-- end::Scrolltop -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import { ScrollTopComponent } from "@/assets/ts/components/_ScrollTopComponent";
import { scrolltopDispaly } from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "KTScrollTop",
  components: {},
  setup() {
    onMounted(() => {
      ScrollTopComponent.reinitialization();
    });

    return {
      scrolltopDispaly,
      getAssetPath,
    };
  },
});
</script>
