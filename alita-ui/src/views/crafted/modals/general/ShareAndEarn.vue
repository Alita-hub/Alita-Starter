<template>
  <ModalsCard
    title="Share & Earn Modal Example"
    description="Click on the below buttons to launch <br/>a share & earn example."
    :image="getIllustrationsPath('9.png')"
    button-text="Share & Earn"
    modal-id="modal_share_earn"
  ></ModalsCard>

  <ShareAndEarnModal></ShareAndEarnModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalsCard from "@/components/cards/Card.vue";
import ShareAndEarnModal from "@/components/modals/general/ShareAndEarnModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "share-and-earn",
  components: {
    ModalsCard,
    ShareAndEarnModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
