<template>
  <div
    class="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10"
    style="
      background-size: auto calc(100% + 10rem);
      background-position-x: 100%;
      background-image: url('assets/media/illustrations/sketchy-1/4.png');
    "
  >
    <!--begin::Card header-->
    <div class="card-header pt-10">
      <div class="d-flex align-items-center">
        <!--begin::Icon-->
        <div class="symbol symbol-circle me-5">
          <div
            class="symbol-label bg-transparent text-primary border border-secondary border-dashed"
          >
            <i class="ki-duotone ki-abstract-47 fs-2x text-primary">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
          </div>
        </div>
        <!--end::Icon-->
        <!--begin::Title-->
        <div class="d-flex flex-column">
          <h2 class="mb-1">File Manager</h2>
          <div class="text-muted fw-bold">
            <a href="#">Keenthemes</a>
            <span class="mx-3">|</span>
            <a href="#">File Manager</a>
            <span class="mx-3">|</span>2.6 GB <span class="mx-3">|</span>758
            items
          </div>
        </div>
        <!--end::Title-->
      </div>
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pb-0">
      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-semibold flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <a
              class="nav-link text-active-primary me-6 active"
              href="apps/file-manager/folders.html"
              >Files</a
            >
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <a
              class="nav-link text-active-primary me-6"
              href="apps/file-manager/settings.html"
              >Settings</a
            >
          </li>
          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
    <!--end::Card body-->
  </div>

  <div class="card card-flush">
    <!--begin::Card header-->
    <div class="card-header pt-8">
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <i class="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <input
            type="text"
            data-filemanager-table-filter="search"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Files & Folders"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-filemanager-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-flex btn-light-primary me-3"
            id="alita_file_manager_new_folder"
          >
            <i class="ki-duotone ki-add-folder fs-2">
              <span class="path1"></span>
              <span class="path2"></span> </i
            >New Folder
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-flex btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#alita_modal_upload"
          >
            <i class="ki-duotone ki-folder-up fs-2">
              <span class="path1"></span>
              <span class="path2"></span> </i
            >Upload Files
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-filemanager-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-filemanager-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-filemanager-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Table header-->
      <div class="d-flex flex-stack">
        <!--begin::Folder path-->
        <div class="badge badge-lg badge-light-primary">
          <div class="d-flex align-items-center flex-wrap">
            <i class="ki-duotone ki-abstract-32 fs-2 text-primary me-3">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
            <a href="#">Keenthemes</a>
            <i class="ki-duotone ki-right fs-2 text-primary mx-1"></i>
            <a href="#">themes</a>
            <i class="ki-duotone ki-right fs-2 text-primary mx-1"></i>
            <a href="#">html</a>
            <i class="ki-duotone ki-right fs-2 text-primary mx-1"></i>demo1
          </div>
        </div>
        <!--end::Folder path-->
        <!--begin::Folder Stats-->
        <div class="badge badge-lg badge-primary">
          <span id="alita_file_manager_items_counter">82 items</span>
        </div>
        <!--end::Folder Stats-->
      </div>
      <!--end::Table header-->
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >

      </Datatable>
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Datatable from "@/components/datatable/DataTable.vue";

export default defineComponent({
  name: "file-manager",
  components: {
    Datatable,
  },
  setup() {
    const tableData = ref([]);
    const tableHeader = ref([
      {
        columnName: "名称",
        columnLabel: "name",
        sortEnabled: true,
        columnWidth: 260,
      },
      {
        columnName: "大小",
        columnLabel: "size",
        sortEnabled: true,
        columnWidth: 120,
      },
      {
        columnName: "上次修改时间",
        columnLabel: "lastModified",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "操作",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);

    const sort = () => {};

    const onItemSelect = () => {};

    return {
      tableData,
      tableHeader,
      sort,
      onItemSelect
    }
  }
});
</script>
