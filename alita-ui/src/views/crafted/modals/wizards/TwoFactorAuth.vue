<template>
  <ModalCard
    title="Two-factor Authentication"
    description="Click on the below buttons to launch <br/>two-factor authentication setup example."
    :image="getIllustrationsPath('4.png')"
    button-text="Enable Two-factor Authentication"
    modal-id="modal_two_factor_authentication"
  ></ModalCard>

  <TwoFactorAuthModal></TwoFactorAuthModal>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import TwoFactorAuthModal from "@/components/modals/wizards/TwoFactorAuthModal.vue";

export default defineComponent({
  name: "two-factor-auth",
  components: {
    ModalCard,
    TwoFactorAuthModal,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
