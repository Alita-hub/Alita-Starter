<template>
  <!--begin::Activities drawer-->
  <div
    id="activities"
    class="bg-body"
    data-drawer="true"
    data-drawer-name="activities"
    data-drawer-activate="true"
    data-drawer-overlay="true"
    data-drawer-width="{default:'300px', 'lg': '900px'}"
    data-drawer-direction="end"
    data-drawer-toggle="#activities_toggle"
    data-drawer-close="#activities_close"
  >
    <CalendarApp1 />
  </div>
  <!--end::Activities drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import CalendarApp1 from "@/components/calendar/CalendarApp1.vue";

export default defineComponent({
  name: "activity-drawer",
  components: {
    CalendarApp1,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
