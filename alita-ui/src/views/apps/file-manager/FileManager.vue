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
      <!--begin::Table-->
      <table
        id="alita_file_manager_list"
        data-filemanager-table="folders"
        class="table align-middle table-row-dashed fs-6 gy-5"
      >
        <thead>
          <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
            <th class="w-10px pe-2">
              <div
                class="form-check form-check-sm form-check-custom form-check-solid me-3"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  data-check="true"
                  data-check-target="#alita_file_manager_list .form-check-input"
                  value="1"
                />
              </div>
            </th>
            <th class="min-w-250px">Name</th>
            <th class="min-w-10px">Size</th>
            <th class="min-w-125px">Last Modified</th>
            <th class="w-125px"></th>
          </tr>
        </thead>
        <tbody class="fw-semibold text-gray-600">
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="account">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >account</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="apps">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >apps</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="widgets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >widgets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="assets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >assets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="documentation">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >documentation</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="layouts">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >layouts</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="modals">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >modals</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="authentication">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >authentication</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="dashboards">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >dashboards</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="media">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >media</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="customers">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >customers</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="user-management">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >user-management</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="subscriptions">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >subscriptions</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="forms">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >forms</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="buttons">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >buttons</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="datatables">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >datatables</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="account">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >account</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="apps">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >apps</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="widgets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >widgets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="assets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >assets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="documentation">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >documentation</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="layouts">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >layouts</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="modals">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >modals</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="authentication">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >authentication</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="dashboards">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >dashboards</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="media">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >media</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="customers">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >customers</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="user-management">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >user-management</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="subscriptions">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >subscriptions</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="forms">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >forms</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="buttons">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >buttons</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="datatables">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >datatables</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="account">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >account</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="apps">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >apps</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="widgets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >widgets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="assets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >assets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="documentation">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >documentation</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="layouts">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >layouts</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="modals">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >modals</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="authentication">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >authentication</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="dashboards">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >dashboards</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="media">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >media</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="customers">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >customers</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="user-management">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >user-management</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="subscriptions">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >subscriptions</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="forms">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >forms</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="buttons">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >buttons</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="datatables">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >datatables</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="account">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >account</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="apps">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >apps</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="widgets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >widgets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="assets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >assets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="documentation">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >documentation</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="layouts">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >layouts</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="modals">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >modals</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="authentication">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >authentication</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="dashboards">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >dashboards</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="media">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >media</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="customers">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >customers</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="user-management">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >user-management</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="subscriptions">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >subscriptions</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="forms">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >forms</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="buttons">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >buttons</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="datatables">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >datatables</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="account">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >account</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="apps">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >apps</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="widgets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >widgets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="assets">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >assets</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="documentation">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >documentation</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="layouts">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >layouts</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="modals">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >modals</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="authentication">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >authentication</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="dashboards">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >dashboards</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="media">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >media</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="customers">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >customers</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="user-management">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >user-management</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="subscriptions">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >subscriptions</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="forms">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >forms</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="buttons">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >buttons</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="datatables">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-folder fs-2x text-primary me-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >datatables</a
                >
              </div>
            </td>
            <td>-</td>
            <td>-</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="index.html">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-files fs-2x text-primary me-4"></i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >index.html</a
                >
              </div>
            </td>
            <td>583 KB</td>
            <td>05 May 2024, 11:30 am</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="form-check form-check-sm form-check-custom form-check-solid"
              >
                <input class="form-check-input" type="checkbox" value="1" />
              </div>
            </td>
            <td data-order="landing.html">
              <div class="d-flex align-items-center">
                <span class="icon-wrapper">
                  <i class="ki-duotone ki-files fs-2x text-primary me-4"></i>
                </span>
                <a
                  href="apps/file-manager/files/.html"
                  class="text-gray-800 text-hover-primary"
                  >landing.html</a
                >
              </div>
            </td>
            <td>87 KB</td>
            <td>20 Dec 2024, 9:23 pm</td>
            <td class="text-end" data-filemanager-table="action_dropdown">
              <div class="d-flex justify-content-end">
                <!--begin::Share link-->
                <div class="ms-2" data-filemanger-table="copy_link">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-fasten fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                    data-menu="true"
                  >
                    <!--begin::Card-->
                    <div class="card card-flush">
                      <div class="card-body p-5">
                        <!--begin::Loader-->
                        <div
                          class="d-flex"
                          data-filemanger-table="copy_link_generator"
                        >
                          <!--begin::Spinner-->
                          <div class="me-5" data-indicator="on">
                            <span class="indicator-progress">
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span>
                            </span>
                          </div>
                          <!--end::Spinner-->
                          <!--begin::Label-->
                          <div class="fs-6 text-gray-900">
                            Generating Share Link...
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Loader-->
                        <!--begin::Link-->
                        <div
                          class="d-flex flex-column text-start d-none"
                          data-filemanger-table="copy_link_result"
                        >
                          <div class="d-flex mb-3">
                            <i
                              class="ki-duotone ki-check fs-2 text-success me-3"
                            ></i>
                            <div class="fs-6 text-gray-900">
                              Share Link Generated
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            value="https://path/to/file/or/folder/"
                          />
                          <div class="text-muted fw-normal mt-2 fs-8 px-3">
                            Read only.
                            <a
                              href="apps/file-manager/settings/.html"
                              class="ms-2"
                              >Change permissions</a
                            >
                          </div>
                        </div>
                        <!--end::Link-->
                      </div>
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Menu-->
                  <!--end::Share link-->
                </div>
                <!--begin::More-->
                <div class="ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
                    data-menu-trigger="click"
                    data-menu-placement="bottom-end"
                  >
                    <i class="ki-duotone ki-dots-square fs-5 m-0">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </button>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                    data-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="apps/file-manager/files.html"
                        class="menu-link px-3"
                        >View</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table="rename"
                        >Rename</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Download Folder</a>
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link px-3"
                        data-filemanager-table-filter="move_row"
                        data-bs-toggle="modal"
                        data-bs-target="#alita_modal_move_to_folder"
                        >Move to folder</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        href="#"
                        class="menu-link text-danger px-3"
                        data-filemanager-table-filter="delete_row"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                  <!--end::More-->
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!--end::Table-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "file-manager",
  setup() {},
});
</script>
