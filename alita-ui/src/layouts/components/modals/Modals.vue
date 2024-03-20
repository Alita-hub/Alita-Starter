<template>
  <UpgradePlanModal />
  <CreateAppModal />
  <NewTargetModal />
  <ViewUsersModal />
  <InviteFriendsModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";
import CreateAppModal from "@/components/modals/wizards/CreateAppModal.vue";
import NewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import ViewUsersModal from "@/components/modals/general/ViewUsersModal.vue";
import InviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";

export default defineComponent({
  name: "global-modals",
  components: {
    UpgradePlanModal,
    CreateAppModal,
    NewTargetModal,
    ViewUsersModal,
    InviteFriendsModal,
  },
});
</script>
