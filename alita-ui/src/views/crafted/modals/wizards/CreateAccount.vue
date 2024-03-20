<template>
  <ModalCard
    title="Create Account Modal Example"
    description="Click on the below buttons to launch <br/>create account modal example."
    :image="getIllustrationsPath('3.png')"
    button-text="Create Account"
    modal-id="modal_create_account"
  ></ModalCard>

  <CreateAccountModal></CreateAccountModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import CreateAccountModal from "@/components/modals/wizards/CreateAccountModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "create-account",
  components: {
    ModalCard,
    CreateAccountModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
