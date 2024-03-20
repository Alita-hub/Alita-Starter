<template>
  <!--begin::Menu 3-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
    data-menu="true"
  >
    <!--begin::Heading-->
    <div class="menu-item px-3">
      <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
        Contacts
      </div>
    </div>
    <!--end::Heading-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a
        href="#"
        class="menu-link px-3"
        data-bs-toggle="modal"
        data-bs-target="#modal_users_search"
      >
        Add Contact
      </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a
        href="#"
        class="menu-link flex-stack px-3"
        data-bs-toggle="modal"
        data-bs-target="#modal_invite_friends"
      >
        Invite Contacts

        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Specify a contact email to send an invitation"
        ></i>
      </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-3"
      data-menu-trigger="hover"
      data-menu-placement="right-start"
      data-menu-flip="left, center, top"
    >
      <a href="#" class="menu-link px-3">
        <span class="menu-title">Groups</span>
        <span class="menu-arrow"></span>
      </a>

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            href="#"
            class="menu-link px-3"
            data-bs-toggle="tooltip"
            title="Coming soon"
          >
            Create Group
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            href="#"
            class="menu-link px-3"
            data-bs-toggle="tooltip"
            title="Coming soon"
          >
            Invite Members
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            href="#"
            class="menu-link px-3"
            data-bs-toggle="tooltip"
            title="Coming soon"
          >
            Settings
          </a>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3 my-1">
      <a
        href="#"
        class="menu-link px-3"
        data-bs-toggle="tooltip"
        title="Coming soon"
      >
        Settings
      </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu 3-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "dropdown-5",
  components: {},
});
</script>
