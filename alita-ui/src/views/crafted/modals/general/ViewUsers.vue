<template>
  <ModalCard
    title="View Users Modal Example"
    description="Click on the below buttons to launch <br/>user lists example."
    :image="getIllustrationsPath('10.png')"
    button-text="View Users"
    modal-id="modal_view_users"
  ></ModalCard>

  <ViewUsersModal></ViewUsersModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import ViewUsersModal from "@/components/modals/general/ViewUsersModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "view-users",
  components: {
    ModalCard,
    ViewUsersModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
