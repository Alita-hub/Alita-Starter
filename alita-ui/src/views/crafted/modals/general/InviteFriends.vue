<template>
  <KTModalCard
    title="Invite Friends Modal Example"
    description="Click on the below buttons
  to launch <br />
  a friend invitation example."
    :image="getIllustrationsPath('1.png')"
    button-text="Invite Friends"
    modal-id="alita_modal_invite_friends"
  ></KTModalCard>

  <InviteFriendsModal></InviteFriendsModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import InviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "invite-friends",
  components: {
    KTModalCard,
    InviteFriendsModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
