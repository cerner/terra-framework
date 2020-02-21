/**
 * This helper updates the root dom element to update the overlay count used to manage  multiple layers
 * of inert requesting components. If the inert count is zero, it adds the inert attribute to the root dom
 * element. Additionally, it shifts the focus to the disclosing content for screen readers and keyboard navigation.
 *
 * @param {*} modalElement - the reference to the modal that is being opened.
 * @param {*} rootSelector - the root-level attribute to apply inert to.
 */
function showModalDomUpdates(modalElement, rootSelector) {
  const mainDocumentElement = document.querySelector(rootSelector);
  if (mainDocumentElement) {
    const dataOverlayCount = +mainDocumentElement.getAttribute('data-abstract-modal-overlay-count');

    if (dataOverlayCount < 1) {
      mainDocumentElement.setAttribute('inert', 'true');
    }

    mainDocumentElement.setAttribute('data-abstract-modal-overlay-count', `${dataOverlayCount + 1}`);

    // Handle focus shift for VoiceOver on iOS
    if ('ontouchstart' in window) {
      modalElement.querySelector('[data-terra-abstract-modal-begin]').focus();
    } else {
      // Shift focus to modal dialog
      modalElement.focus();
    }
  }
}

/**
 * This helper updates the root dom element to reduce a overlay count used to manage multiple layers of inert
 * requesting components. If the inert count is one, it removes inert from the root dom element. Additionally, it
 * shifts the focus back to the previously focused element for screen readers and keyboard navigation.
 *
 * @param {*} modalTriggerElement - reference to the element that requested that the abstract modal open.
 * @param {*} rootSelector - the root-level attribute to remove inert from.
 */
function hideModalDomUpdates(modalTriggerElement, rootSelector) {
  const mainDocumentElement = document.querySelector(rootSelector);

  if (mainDocumentElement) {
    const dataOverlayCount = +mainDocumentElement.getAttribute('data-abstract-modal-overlay-count');

    if (dataOverlayCount === 1) {
      mainDocumentElement.removeAttribute('data-abstract-modal-overlay-count');
      mainDocumentElement.removeAttribute('inert');
    } else if (dataOverlayCount > 1) {
      mainDocumentElement.setAttribute('data-abstract-modal-overlay-count', `${dataOverlayCount - 1}`);
    }
  }

  // Allows inert processing to finish or focus will not shift back
  setTimeout(() => {
    if (modalTriggerElement && modalTriggerElement.focus) {
      // Shift focus back to element that was last focused prior to opening the modal
      modalTriggerElement.focus();
    } else {
      // In some cases on IE, when the focus cannot be restored on the element (SVG element, for instance)
      // that was last focused prior to opening the modal, place the focus on the HTML body element to repro
      // the behavior noticed on other major browsers.
      document.querySelector('body').focus();
    }
  }, 0);
}

export { showModalDomUpdates, hideModalDomUpdates };
