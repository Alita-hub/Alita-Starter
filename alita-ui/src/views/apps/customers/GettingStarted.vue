<template>
  <ModalCard
    title="Welcome!"
    description="There are no customers added yet. <br/>Kickstart your CRM by adding a your first customer"
    :image="getIllustrationsPath('2.png')"
    button-text="Add Customer"
    modal-id="modal_add_customer"
  ></ModalCard>

  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCard from "@/components/cards/Card.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "getting-started",
  components: {
    ModalCard,
    AddCustomerModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
