<template>
  <!-- begin::Scrolltop -->
  <div
    v-if="scrolltopDispaly"
    id="scrolltop"
    ref="scrolltop"
    class="scrolltop"
    data-scrolltop="true"
  >
    <Icon icon-name="arrow-up" icon-class="fs-2x" />
  </div>
  <!-- end::Scrolltop -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import { ScrollTopComponent } from "@/assets/ts/components/_ScrollTopComponent";
import { scrolltopDispaly } from "@/layouts/config/helper";

export default defineComponent({
  name: "ScrollTop",
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
