
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
    uploadQuery: '[data-alita-filemanager-template="upload"]',
    renameQuery: '[data-alita-filemanager-template="rename"]',
    actionQuery: '[data-alita-filemanager-template="action"]',
    checkboxQuery: '[data-alita-filemanager-template="checkbox"]'
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
const folderTableOptions : IFolderTableOptions = {
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
const fileTableOptions : IFileTableOptions = {
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
    fileListElement: HTMLElement;
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
        this.uploadElement = document.querySelector('[data-alita-filemanager-template="upload"]');
        this.renameElement = document.querySelector('[data-alita-filemanager-template="rename"]');
        this.actionElement = document.querySelector('[data-alita-filemanager-template="action"]');
        this.checkboxElement = document.querySelector('[data-alita-filemanager-template="checkbox"]');

        this.selectedOptions = this.fileListElement.getAttribute("data-alita-filemanager-table") === "folders" ? folderTableOptions : fileTableOptions;

         // 初始化DataTable并设置绘制完成后的回调函数
        var dataTable = $(document.querySelector('[data-alita-filemanager-table]')).DataTable(this.selectedOptions);
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



// 初始化删除行功能
private initializeDeleteRow () {
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


  

    public static bootstrap = () => {
      MenuComponent.initGlobalHandlers();
      MenuComponent.createInstances('[data-menu="true"]');
    };
  
    public static reinitialization = () => {
      MenuComponent.createInstances('[data-menu="true"]');
    };
  
}