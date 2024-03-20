import { Modal } from "bootstrap";

/**
 * 隐藏指定的模态框元素。
 * @param modalEl 要隐藏的模态框元素。
 */
const hideModal = (modalEl: HTMLElement | null): void => {
  if (!modalEl) {
    return;
  }

  const myModal = Modal.getInstance(modalEl);
  myModal?.hide();
};

/**
 * 从文档中移除所有模态框的背景。
 */
const removeModalBackdrop = (): void => {
  if (document.querySelectorAll(".modal-backdrop.fade.show").length) {
    document.querySelectorAll(".modal-backdrop.fade.show").forEach((item) => {
      item.remove();
    });
  }
};


export { removeModalBackdrop, hideModal };
