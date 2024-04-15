
import Swal from "sweetalert2/dist/sweetalert2.js";

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


export interface IFileManagerQueries {
  fileListQuery: string;
  uploadQuery: string;
  renameQuery: string;
  actionQuery: string;
  checkboxQuery: string;
}

const defaultFileManagerQueires: IFileManagerQueries = {
  fileListQuery: '#alita_file_manager_list',
  uploadQuery: '[data-filemanager-template="upload"]',
  renameQuery: '[data-filemanager-template="rename"]',
  actionQuery: '[data-filemanager-template="action"]',
  checkboxQuery: '[data-filemanager-template="checkbox"]'
};

export interface IFolderTableOptions {
  info: boolean,
  order: Array<any>,
  scrollY: string,
  scrollCollapse: boolean,
  paging: boolean,
  ordering: boolean,
  columns: Array<Object>,
  language: Object
}

export interface IFileTableOptions {
  info: boolean,
  order: Array<any>,
  pageLength: number,
  lengthChange: boolean,
  ordering: boolean,
  columns: Array<Object>,
  language: Object,
  conditionalPaging: boolean
}


// 配置参数用于文件夹视图的表格
const folderTableOptions: IFolderTableOptions = {
  info: false,
  order: [],
  scrollY: "700px",
  scrollCollapse: true,
  paging: false,
  ordering: false,
  columns: [
    { data: "checkbox" },
    { data: "name" },
    { data: "size" },
    { data: "date" },
    { data: "action" },
  ],
  language: {
    emptyTable: `<div class="d-flex flex-column flex-center">
                        <img src="${hostUrl}media/illustrations/sketchy-1/5.png" class="mw-400px" />
                        <div class="fs-1 fw-bolder text-dark">未找到项目。</div>
                        <div class="fs-6">开始创建新文件夹或上传文件！</div>
                    </div>`,
  },
};

// 配置参数用于文件视图的表格
const fileTableOptions: IFileTableOptions = {
  info: false,
  order: [],
  pageLength: 10,
  lengthChange: false,
  ordering: false,
  columns: [
    { data: "checkbox" },
    { data: "name" },
    { data: "size" },
    { data: "date" },
    { data: "action" },
  ],
  language: {
    emptyTable: `<div class="d-flex flex-column flex-center">
                        <img src="${hostUrl}media/illustrations/sketchy-1/5.png" class="mw-400px" />
                        <div class="fs-1 fw-bolder text-dark mb-4">未找到项目。</div>
                        <div class="fs-6">开始创建新文件夹或上传文件！</div>
                    </div>`,
  },
  conditionalPaging: true,
};


class FileManagerComponent {
  fileListElement: HTMLElement | null;
  uploadElement: HTMLElement | null;
  renameElement: HTMLElement | null;
  actionElement: HTMLElement | null;
  checkboxElement: HTMLElement | null;

  queries: IFileManagerQueries;
  selectedOptions: IFileTableOptions | IFolderTableOptions;

  constructor(_element: HTMLElement, _queries: IFileManagerQueries) {
    this.element = _element;
    this.queries = _queries;

    this.fileListElement = document.querySelector("#alita_file_manager_list");
    this.uploadElement = document.querySelector('[data-filemanager-template="upload"]');
    this.renameElement = document.querySelector('[data-filemanager-template="rename"]');
    this.actionElement = document.querySelector('[data-filemanager-template="action"]');
    this.checkboxElement = document.querySelector('[data-filemanager-template="checkbox"]');

    this.selectedOptions = this.fileListElement.getAttribute("data-filemanager-table") === "folders" ? folderTableOptions : fileTableOptions;

    // 初始化DataTable并设置绘制完成后的回调函数
    var dataTable = this.fileListElement.DataTable(this.selectedOptions);
    dataTable.on("draw", function () {
      // 这里的i, l, s, c, AlitaMenu.createInstances(), m, f, d 应为具体的函数，需替换为真实函数名
      // 例如：refreshControls(), updateLayout(), checkSecurity(), clearCaches(), 等
    });
  };


  // 格式化表格内的日期并设置排序属性
  private formatTableDates() {
    // 遍历文件列表中的每一行
    this.fileListElement.querySelectorAll("tbody tr").forEach((tableRow) => {
      // 定位到每行中的第四列，通常包含日期
      const dateCell = tableRow.querySelectorAll("td")[3];
      // 使用moment.js格式化日期时间
      const formattedDate = moment(dateCell.innerHTML, "DD MMM YYYY, LT").format();
      // 设置data-order属性为格式化后的日期，便于后续操作或排序
      dateCell.setAttribute("data-order", formattedDate);
    });
  }

  private initializeDeleteRowFunctionality() {
    // 选取所有带有删除行标记的元素
    document.querySelectorAll('[data-alita-filemanager-table-filter="delete_row"]').forEach((deleteButton) => {
      // 为每个删除按钮添加点击事件监听器
      deleteButton.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止按钮默认的表单提交行为

        // 找到按钮所在的行
        const rowElement = event.target.closest("tr"),
          // 获取行中的第二列的文本，通常是标识符或名称
          itemName = rowElement.querySelectorAll("td")[1].innerText;

        // 弹出确认删除的对话框
        Swal.fire({
          text: "确定要删除 " + itemName + " 吗？",
          icon: "warning",
          showCancelButton: true,
          buttonsStyling: false,
          confirmButtonText: "是的，删除！",
          cancelButtonText: "不，取消",
          customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-active-light-primary",
          },
        }).then(function (result) {
          if (result.value) {
            // 如果确认删除，则弹出已删除的提示
            Swal.fire({
              text: "您已删除 " + itemName + "！",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "好的，我知道了！",
              customClass: { confirmButton: "btn fw-bold btn-primary" },
            }).then(function () {
              // 在表格中删除相应的行
              unusedVariableE.row($(rowElement)).remove().draw();
            })
          } else if (result.dismiss === "cancel") {
            // 如果取消删除，则弹出未删除的提示
            Swal.fire({
              text: itemName + " 没有被删除。",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "好的，我知道了！",
              customClass: { confirmButton: "btn fw-bold btn-primary" },
            });
          }
        });
      });
    });
  };

  private initializeCheckboxAndDeleteHandlers() {
    // 根据当前表格类型，选择合适的复选框元素
    let checkboxes = document.querySelectorAll('[type="checkbox"]');
    if (document.querySelector('[data-alita-filemanager-table]').getAttribute('data-alita-filemanager-table') === 'folders') {
      checkboxes = document.querySelectorAll('#alita_file_manager_list_wrapper [type="checkbox"]');
    }

    // 获取“删除所选项”按钮的DOM元素
    const deleteButton = document.querySelector('[data-alita-filemanager-table-select="delete_selected"]');

    // 为每个复选框添加点击事件处理器
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', function () {
        console.log(checkbox);
        // 延迟50毫秒后调用s()函数，可以假设s()是用来更新界面的函数
        setTimeout(function () {
          updateUI(); // 假设s()函数现在命名为updateUI()
        }, 50);
      });
    });

    // 为“删除所选项”按钮添加点击事件处理器
    deleteButton.addEventListener('click', function () {
      // 弹出确认删除对话框
      Swal.fire({
        text: '您确定要删除选中的文件或文件夹吗？',
        icon: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: '是的，删除！',
        cancelButtonText: '不，取消',
        customClass: {
          confirmButton: 'btn fw-bold btn-danger',
          cancelButton: 'btn fw-bold btn-active-light-primary',
        },
      }).then(function (result) {
        if (result.value) {
          // 用户确认删除
          Swal.fire({
            text: '您已成功删除所有选中的文件或文件夹！',
            icon: 'success',
            buttonsStyling: false,
            confirmButtonText: '好的，知道了！',
            customClass: {
              confirmButton: 'btn fw-bold btn-primary',
            },
          }).then(function () {
            // 删除表格中所有选中的行
            checkboxes.forEach((checkbox) => {
              if (checkbox.checked) {
                dataTable.row($(checkbox.closest('tbody tr'))).remove().draw();
              }
            });
            // 重置最上方的主复选框
            document.querySelectorAll('[type="checkbox"]')[0].checked = false;
          });
        } else if (result.dismiss === 'cancel') {
          // 用户取消删除
          Swal.fire({
            text: '选中的文件或文件夹未被删除。',
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
  };

  private updateToolbarVisibility() {
    // 获取工具栏元素
    let baseToolbar = document.querySelector('[data-alita-filemanager-table-toolbar="base"]');
    let selectedToolbar = document.querySelector('[data-alita-filemanager-table-toolbar="selected"]');
    let selectedCountElement = document.querySelector('[data-alita-filemanager-table-select="selected_count"]');

    // 获取所有复选框
    let checkboxes = document.querySelectorAll('tbody [type="checkbox"]');

    let anyChecked = false; // 标记是否有复选框被选中
    let countChecked = 0;   // 计数被选中的复选框数量

    // 遍历复选框，更新选中状态和计数
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        anyChecked = true;
        countChecked++;
      }
    });

    // 根据是否有复选框被选中，更新界面显示
    if (anyChecked) {
      // 更新选中项计数显示
      selectedCountElement.innerHTML = countChecked;
      // 隐藏基本工具栏，显示选中项工具栏
      baseToolbar.classList.add('d-none');
      selectedToolbar.classList.remove('d-none');
    } else {
      // 显示基本工具栏，隐藏选中项工具栏
      baseToolbar.classList.remove('d-none');
      selectedToolbar.classList.add('d-none');
    }
  };

  private removeNewFolderRow() {
    // 查询新建文件夹的行元素
    const newFolderRow = document.querySelector('#alita_file_manager_new_folder_row');

    // 如果找到该行，则从其父节点中移除该行
    if (newFolderRow) {
      newFolderRow.parentNode.removeChild(newFolderRow);
    }
  };

  private addRenameEventHandlers() {
    // 选取所有用于重命名的按钮
    const renameButtons = document.querySelectorAll('[data-alita-filemanager-table="rename"]');
    
    // 为每个重命名按钮添加点击事件监听器，绑定到函数u
    renameButtons.forEach((button) => {
        button.addEventListener('click', handleRenameClick);
    });
  };


  private handleRenameClick(event) {
    // 阻止事件的默认行为
    event.preventDefault();

    // 检查是否存在未保存的输入
    const existingInputs = document.querySelectorAll('#alita_file_manager_rename_input');
    if (existingInputs.length > 0) {
        return Swal.fire({
            text: '检测到未保存的输入，请保存或取消当前项',
            icon: 'warning',
            buttonsStyling: false,
            confirmButtonText: '好的，明白！',
            customClass: { confirmButton: 'btn fw-bold btn-danger' },
        });
    }

    // 获取触发事件的表格行
    const tableRow = event.target.closest('tr');
    const targetCell = tableRow.querySelectorAll('td')[1];
    const iconWrapper = targetCell.querySelector('.icon-wrapper');
    const originalText = targetCell.innerText;

    // 克隆并准备输入元素
    const clonedNode = n.cloneNode(true);  // 假定n是已经存在的模板节点
    clonedNode.querySelector('#alita_file_manager_rename_folder_icon').innerHTML = iconWrapper.outerHTML;
    targetCell.innerHTML = clonedNode.innerHTML;
    tableRow.querySelector('#alita_file_manager_rename_input').value = originalText;

    // 初始化表单验证
    var formValidator = FormValidation.formValidation(targetCell, {
        fields: {
            rename_folder_name: {
                validators: {
                    notEmpty: { message: '名称不能为空' },
                },
            },
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

    // 绑定重命名确认按钮的事件处理器
    document.querySelector('#alita_file_manager_rename_folder').addEventListener('click', (evt) => {
        evt.preventDefault();
        formValidator && formValidator.validate().then(function (validationResult) {
            console.log('验证完成!');
            if (validationResult == 'Valid') {
                Swal.fire({
                    text: `确定要将 ${originalText} 重命名吗?`,
                    icon: 'warning',
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: '是的，重命名！',
                    cancelButtonText: '不，取消',
                    customClass: {
                        confirmButton: 'btn fw-bold btn-danger',
                        cancelButton: 'btn fw-bold btn-active-light-primary',
                    },
                }).then(function (result) {
                    if (result.value) {
                        // 成功重命名后的操作
                        const newName = document.querySelector('#alita_file_manager_rename_input').value;
                        const newHTML = `<div class="d-flex align-items-center">
                                            ${iconWrapper.outerHTML}
                                            <a href="?page=apps/file-manager/files/" class="text-gray-800 text-hover-primary">${newName}</a>
                                        </div>`;
                        e.cell($(targetCell)).data(newHTML).draw(); // 假设e是DataTable实例
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: `${originalText} 没有被重命名。`,
                            icon: 'error',
                            buttonsStyling: false,
                            confirmButtonText: '好的，知道了！',
                            customClass: {
                                confirmButton: 'btn fw-bold btn-primary',
                            },
                        });
                    }
                });
            }
        });
    });

    // 绑定取消重命名按钮的事件处理器
    const cancelButton = document.querySelector('#alita_file_manager_rename_folder_cancel');
    cancelButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        cancelButton.setAttribute('data-alita-indicator', 'on');
        setTimeout(() => {
            const restoredHTML = `<div class="d-flex align-items-center">
                                    ${iconWrapper.outerHTML}
                                    <a href="?page=apps/file-manager/files/" class="text-gray-800 text-hover-primary">${originalText}</a>
                                </div>`;
            cancelButton.removeAttribute('data-alita-indicator');
            e.cell($(targetCell)).data(restoredHTML).draw();
            toastr.error('重命名操作已取消');
        }, 1000);
    });
  };


  private setupCopyLinkFeature() {
    // 选取所有复制链接相关的元素
    document.querySelectorAll('[data-alita-filemanger-table="copy_link"]').forEach((element) => {
        const copyButton = element.querySelector("button"),
            copyIndicator = element.querySelector('[data-alita-filemanger-table="copy_link_generator"]'),
            copyResultDisplay = element.querySelector('[data-alita-filemanger-table="copy_link_result"]'),
            inputField = element.querySelector("input");

        // 为每个复制按钮添加点击事件处理器
        copyButton.addEventListener("click", (event) => {
            event.preventDefault(); // 阻止默认点击行为
            copyIndicator.classList.remove("d-none"); // 显示复制中的指示器
            copyResultDisplay.classList.add("d-none"); // 隐藏复制结果显示

            // 使用setTimeout来模拟复制操作，这里假设复制操作耗时2秒
            let timerId;
            clearTimeout(timerId); // 清除之前的定时器（如果有）
            timerId = setTimeout(() => {
                copyIndicator.classList.add("d-none"); // 隐藏复制中的指示器
                copyResultDisplay.classList.remove("d-none"); // 显示复制结果
                inputField.select(); // 选择输入字段中的文本，便于复制
            }, 2000); // 设置定时器，2秒后执行
        });
    });
  };


  private updateItemsCounter() {
    // 获取文件管理器中项目总数的显示元素
    const itemsCounterElement = document.getElementById("alita_file_manager_items_counter");
    
    // 假设e是DataTable的实例，使用其rows().count()方法获取当前所有行（项目）的数量
    const itemCount = dataTableInstance.rows().count(); // dataTableInstance是DataTable实例的变量名

    // 更新显示元素的文本，以反映项目总数
    itemsCounterElement.innerText = itemCount + " items";
  };




  public static initGlobalHandlers = () => {

    // 初始化删除行功能
    FileManagerComponent.initializeDeleteRowFunctionality();

    FileManagerComponent.initializeCheckboxAndDeleteHandlers();

    FileManagerComponent.updateToolbarVisibility();

    FileManagerComponent.removeNewFolderRow();

  }


  public static bootstrap = () => {
    FileManagerComponent.initGlobalHandlers();
    FileManagerComponent.createInstances('[data-menu="true"]');
  };

  public static reinitialization = () => {
    FileManagerComponent.createInstances('[data-menu="true"]');
  };

}

export { FileManagerComponent };