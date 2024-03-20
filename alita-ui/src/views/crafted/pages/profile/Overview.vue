<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-6">
      <Widget1 widget-classes="mb-5 mb-xxl-8"></Widget1>
      <Widget2 widget-classes="mb-5 mb-xxl-8"></Widget2>
      <Widget3 widget-classes="mb-5 mb-xxl-8"></Widget3>
      <Widget4 widget-classes="mb-5 mb-xxl-8"></Widget4>
      <Widget5 widget-classes="mb-5 mb-xxl-8"></Widget5>
      <Widget6 widget-classes="mb-5 mb-xxl-8"></Widget6>
    </div>

    <div class="col-xl-6">
      <ChartWidget1 widget-classes="mb-5 mb-xxl-8"></ChartWidget1>

      <ListWidget5 widget-classes="mb-5 mb-xxl-8"></ListWidget5>

      <EngageWidget1 widget-classes="mb-5 mb-xxl-8"></EngageWidget1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Widget1 from "@/components/widgets/feeds/Widget1.vue";
import Widget2 from "@/components/widgets/feeds/Widget2.vue";
import Widget3 from "@/components/widgets/feeds/Widget3.vue";
import Widget4 from "@/components/widgets/feeds/Widget4.vue";
import Widget5 from "@/components/widgets/feeds/Widget5.vue";
import Widget6 from "@/components/widgets/feeds/Widget6.vue";
import ChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import EngageWidget1 from "@/components/widgets/engage/Widget1.vue";

export default defineComponent({
  name: "profile-overview",
  components: {
    Widget1,
    Widget2,
    Widget3,
    Widget4,
    Widget5,
    Widget6,
    ChartWidget1,
    ListWidget5,
    EngageWidget1,
  },
});
</script>
