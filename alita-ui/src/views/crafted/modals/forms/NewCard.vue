<template>
  <ModalCard
    title="New Card Modal Example"
    description="Click on the below buttons to launch <br/>a new card example."
    :image="getIllustrationsPath('6.png')"
    button-text="Add New Card"
    modal-id="modal_new_card"
  ></ModalCard>

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "new-card",
  components: {
    ModalCard,
    NewCardModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
