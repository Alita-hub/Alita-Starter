<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <Icon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Customers"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-customer-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#customers_export_modal"
          >
            <Icon icon-name="exit-up" icon-class="fs-2" />
            Export
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modal_add_customer"
          >
            <Icon icon-name="plus" icon-class="fs-2" />
            Add Customer
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
        <template v-slot:id="{ row: user }">
          {{ user.id }}
        </template>
        <template v-slot:nickname="{ row: user }">
          {{ user.nickname }}
        </template>
        <template v-slot:gender="{ row: user }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ user.gender }}
          </a>
        </template>
        <template v-slot:email="{ row: user }">
          {{ user.email }}
        </template>
        <template v-slot:phone="{ row: user }">
          {{ user.phone }}
        </template>
        <template v-slot:status="{ row: user }">
          {{ user.status }}
        </template>
        <template v-slot:actions="{ row: user }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-menu-trigger="click"
            data-menu-placement="bottom-end"
            data-menu-flip="top-end"
            >Actions
            <Icon icon-name="down" icon-class="fs-5 m-0" />
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
            data-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >View</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteCustomer(user.id)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import Datatable from "@/components/datatable/DataTable.vue";
import { MenuComponent } from "@/assets/ts/components";
import type { IUser, IPageRequest } from "@/core/model/system";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "user-list",
  components: {
    Datatable,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "ID",
        columnLabel: "id",
        sortEnabled: true,
        columnWidth: 80,
      },
      {
        columnName: "用户",
        columnLabel: "nickname",
        sortEnabled: true,
        columnWidth: 120,
      },
      {
        columnName: "性别",
        columnLabel: "gender",
        sortEnabled: true,
        columnWidth: 90,
      },
      {
        columnName: "状态",
        columnLabel: "status",
        sortEnabled: true,
        columnWidth: 90,
      },
      {
        columnName: "邮箱",
        columnLabel: "email",
        sortEnabled: false,
        columnWidth: 150,
      },
      {
        columnName: "手机号",
        columnLabel: "phone",
        sortEnabled: false,
        columnWidth: 150,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);

    const search = ref<string>("");
    const selectedIds = ref<Array<number>>([]);
    const tableData = ref<Array<IUser>>([]);

    // 默认请求参数
    const defaultParams: IPageRequest = {
      pageSize: 10,
      pageNum: 1,
    };

    // 动态请求参数
    const params = ref<IPageRequest>(defaultParams);

    onMounted(() => {
      ApiService.post("/user/list", params.value).then((response) => {
        tableData.value = response.data.data;
      });
    });

    const getData = async () => {
      try {
        const response = await ApiService.post("/user/list", params.value);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    const searchItems = () => {};

    const sort = () => {};

    const onItemSelect = () => {};

    // 删除单个
    const deleteCustomer = (id: number) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };

    // 批量删除
    const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        deleteCustomer(item);
      });
      selectedIds.value.length = 0;
    };

    return {
      search,
      selectedIds,
      tableData,
      tableHeader,
      searchItems,
      sort,
      onItemSelect,
      deleteCustomer,
      deleteFewCustomers,
    };
  },
});
</script>
