<template>
  <ModalCard
    title="Create App Modal Example"
    description="Click on the below buttons to launch <br/>create app modal example."
    :image="getIllustrationsPath('15.png')"
    button-text="Create App"
    modal-id="modal_create_app"
  ></ModalCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "create-app",
  components: {
    ModalCard,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
