<template>
  <MessengerDrawer />
  <ActivityDrawer />
  <ToolButtons />
  <HelpDrawer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessengerDrawer from "@/layouts/components/extras/MessengerDrawer.vue";
import ActivityDrawer from "@/layouts/components/drawers/ActivityDrawer.vue";
import HelpDrawer from "@/layouts/components/extras/HelpDrawer.vue";
import ToolButtons from "@/layouts/components/extras/ToolButtons.vue";

export default defineComponent({
  name: "global-drawers",
  components: {
    MessengerDrawer,
    ActivityDrawer,
    HelpDrawer,
    ToolButtons,
  },
});
</script>
