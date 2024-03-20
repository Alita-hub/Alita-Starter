<template>
  <ModalCard
    title="New Target Modal Example"
    description="Click on the below buttons to launch <br/>a new target example."
    :image="getIllustrationsPath('17.png')"
    button-text="Add New Target"
    modal-id="modal_new_target"
  ></ModalCard>

  <NewTargetModal></NewTargetModal>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import NewTargetModal from "@/components/modals/forms/NewTargetModal.vue";

export default defineComponent({
  name: "new-target",
  components: {
    ModalCard,
    NewTargetModal,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
