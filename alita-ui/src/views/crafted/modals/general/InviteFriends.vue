<template>
  <ModalCard
    title="Invite Friends Modal Example"
    description="Click on the below buttons
  to launch <br />
  a friend invitation example."
    :image="getIllustrationsPath('1.png')"
    button-text="Invite Friends"
    modal-id="modal_invite_friends"
  ></ModalCard>

  <InviteFriendsModal></InviteFriendsModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import InviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "invite-friends",
  components: {
    ModalCard,
    InviteFriendsModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
