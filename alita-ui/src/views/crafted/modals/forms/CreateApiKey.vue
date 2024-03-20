<template>
  <ModalCard
    title="Create API Key Modal Example"
    description="Click on the below buttons to launch <br/>a new API Key creation example."
    :image="getIllustrationsPath('16.png')"
    button-text="Create API Key"
    modal-id="modal_create_api_key"
  ></ModalCard>

  <CreateAPIKeyModal></CreateAPIKeyModal>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import CreateAPIKeyModal from "@/components/modals/forms/CreateAPIKeyModal.vue";

export default defineComponent({
  name: "create-api-key",
  components: {
    ModalCard,
    CreateAPIKeyModal,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
