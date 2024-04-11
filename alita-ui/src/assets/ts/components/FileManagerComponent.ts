

import {
    DataUtil,
    DOMEventHandlerUtil,
    ElementStyleUtil,
    EventHandlerUtil,
    getAttributeValueByBreakpoint,
    getElementChild,
    getElementParents,
    getHighestZindex,
    getUniqueIdWithPrefix,
    insertAfterElement,
    slideDown,
    slideUp,
    throttle,
} from "../_utils/index";


class FileManagerComponent {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    };

    private setupDeleteRowHandler = () => {
        // 获取所有删除行按钮
        document.querySelectorAll('[data-alita-filemanager-table-filter="delete_row"]').forEach((button) => {
            // 添加点击事件监听器
            button.addEventListener('click', (event) => {
                // 阻止默认行为
                event.preventDefault();

                // 获取要删除的行
                const row = event.target.closest('tr');

                // 获取行中的第二个单元格的文本内容（假设这是文件名）
                const fileName = row.querySelectorAll('td')[1].innerText;

                // 弹出确认删除的对话框
                Swal.fire({
                    text: `确定要删除 ${fileName} 吗？`, // 使用模板字符串插入文件名
                    icon: 'warning',
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: '是的，删除！',
                    cancelButtonText: '取消',
                    customClass: {
                        confirmButton: 'btn fw-bold btn-danger',
                        cancelButton: 'btn fw-bold btn-active-light-primary',
                    },
                }).then((result) => {
                    if (result.value) {
                        // 如果确认删除，则再次弹出对话框确认
                        Swal.fire({
                            text: `已成功删除 ${fileName}！`,
                            icon: 'success',
                            buttonsStyling: false,
                            confirmButtonText: '好的，知道了！',
                            customClass: {
                                confirmButton: 'btn fw-bold btn-primary',
                            },
                        }).then(() => {
                            // 删除行并重新渲染表格
                            table.row($(row)).remove().draw();
                        });
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        // 如果取消删除，则显示消息提示
                        Swal.fire({
                            text: `${fileName} 未被删除。`,
                            icon: 'error',
                            buttonsStyling: false,
                            confirmButtonText: '好的，知道了！',
                            customClass: {
                                confirmButton: 'btn fw-bold btn-primary',
                            },
                        });
                    }
                });
            });
        });
    };

    private init = () => {
      const table = document.querySelector('#alita_file_manager_list');
  
      if (table) {
          let uploadTemplate = document.querySelector('[data-alita-filemanager-template="upload"]');
          let renameTemplate = document.querySelector('[data-alita-filemanager-template="rename"]');
          let actionTemplate = document.querySelector('[data-alita-filemanager-template="action"]');
          let checkboxTemplate = document.querySelector('[data-alita-filemanager-template="checkbox"]');
  
          // 设置日期列的排序数据
          table.querySelectorAll('tbody tr').forEach((row) => {
              const dateCell = row.querySelectorAll('td')[3];
              const formattedDate = moment(dateCell.innerHTML, 'DD MMM YYYY, LT').format();
              dateCell.setAttribute('data-order', formattedDate);
          });
  
          // 配置 DataTables
          let dataTableConfig = {
              info: false,
              order: [],
              scrollY: '700px',
              scrollCollapse: true,
              paging: false,
              ordering: false,
              columns: [
                  { data: 'checkbox' },
                  { data: 'name' },
                  { data: 'size' },
                  { data: 'date' },
                  { data: 'action' }
              ],
              language: {
                  emptyTable: `<div class="d-flex flex-column flex-center">
                      <img src="${hostUrl}media/illustrations/sketchy-1/5.png" class="mw-400px" />
                      <div class="fs-1 fw-bolder text-dark">没有找到项目。</div>
                      <div class="fs-6">开始创建新文件夹或上传新文件吧！</div>
                  </div>`
              },
          };
  
          // 检查是文件夹列表还是其他列表
          let tableType = table.getAttribute('data-alita-filemanager-table');
          let dataTable = null;
  
          if (tableType === 'folders') {
              dataTableConfig.conditionalPaging = true;
          } else {
              dataTableConfig.pageLength = 10;
              dataTableConfig.lengthChange = false;
          }
  
          dataTable = $(table).DataTable(dataTableConfig);
  
          dataTable.on('draw', function() {
              setupSearch();
              setupDeleteRowHandler();
              setupSelection();
              AlitaMenu.createInstances();
              setupCopyLink();
              updateItemsCounter();
              setupRename();
          });
  
          // 设置搜索功能
          function setupSearch() {
              let searchInput = document.querySelector('[data-alita-filemanager-table-filter="search"]');
              searchInput.addEventListener('keyup', function(event) {
                  dataTable.search(event.target.value).draw();
              });
          }
  
          // 设置新建文件夹按钮
          document.getElementById('alita_file_manager_new_folder').addEventListener('click', function(event) {
              event.preventDefault();
  
              if (!table.querySelector('#alita_file_manager_new_folder_row')) {
                  let tableBody = table.querySelector('tbody');
                  let newRow = uploadTemplate.cloneNode(true);
                  tableBody.prepend(newRow);
  
                  let form = newRow.querySelector('#alita_file_manager_add_folder_form');
                  let addButton = newRow.querySelector('#alita_file_manager_add_folder');
                  let cancelButton = newRow.querySelector('#alita_file_manager_cancel_folder');
                  let folderIcon = newRow.querySelector('#alita_file_manager_folder_icon');
                  let folderNameInput = newRow.querySelector('[name="new_folder_name"]');
  
                  let formValidator = FormValidation.formValidation(form, {
                      fields: {
                          new_folder_name: {
                              validators: {
                                  notEmpty: {
                                      message: '文件夹名称不能为空'
                                  }
                              }
                          }
                      },
                      plugins: {
                          trigger: new FormValidation.plugins.Trigger(),
                          bootstrap: new FormValidation.plugins.Bootstrap5({
                              rowSelector: '.fv-row',
                              eleInvalidClass: '',
                              eleValidClass: '',
                          }),
                      },
                  });
  
                  addButton.addEventListener('click', function(event) {
                      event.preventDefault();
                      addButton.setAttribute('data-alita-indicator', 'on');
  
                      formValidator.validate().then(function(status) {
                          if (status === 'Valid') {
                              setTimeout(function() {
                                  // 执行创建文件夹的操作
                              }, 2000);
                          } else {
                              addButton.removeAttribute('data-alita-indicator');
                          }
                      });
                  });
  
                  cancelButton.addEventListener('click', function(event) {
                      event.preventDefault();
                      cancelButton.setAttribute('data-alita-indicator', 'on');
  
                      setTimeout(function() {
                          // 取消创建文件夹
                          cancelButton.removeAttribute('data-alita-indicator');
                      }, 1000);
                  });
              }
          });
  
          // 设置上传功能
          setupUpload();
  
          // 设置移动到文件夹功能
          setupMoveToFolder();
  
          // 更新项目计数器
          function updateItemsCounter() {
              document.getElementById('alita_file_manager_items_counter').innerText = dataTable.rows().count() + ' 个项目';
          }
      }
  }
  

    public static bootstrap = () => {
      MenuComponent.initGlobalHandlers();
      MenuComponent.createInstances('[data-menu="true"]');
    };
  
    public static reinitialization = () => {
      MenuComponent.createInstances('[data-menu="true"]');
    };
  
}