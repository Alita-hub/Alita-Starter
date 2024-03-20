<template>
  <ModalCard
    title="Upgrade Plan Modal Example"
    description="Click on the below buttons to launch <br/>a upgrade plan example."
    :image="getIllustrationsPath('8.png')"
    button-text="Upgrade Plan"
    modal-id="modal_upgrade_plan"
  ></ModalCard>
  <UpgradePlanModal></UpgradePlanModal>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import UpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";

export default defineComponent({
  name: "upgrade-plan",
  components: {
    ModalCard,
    UpgradePlanModal,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
