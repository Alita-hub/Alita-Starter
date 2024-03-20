<template>
  <ModalCard
    title="New Address Modal Example"
    description="Click on the below buttons to launch <br/>a new address example."
    :image="getIllustrationsPath('19.png')"
    button-text="Add New Address"
    modal-id="modal_new_address"
  ></ModalCard>

  <NewAddressModal></NewAddressModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import NewAddressModal from "@/components/modals/forms/NewAddressModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "new-address",
  components: {
    ModalCard,
    NewAddressModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
