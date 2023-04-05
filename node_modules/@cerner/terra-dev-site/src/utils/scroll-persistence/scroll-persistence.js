import uuidv4 from 'uuid/v4';

function getOverflowDataForElement(overflowElement) {
  let overflowId = overflowElement.getAttribute('data-persistent-overflow-id');
  if (!overflowId) {
    overflowId = uuidv4();
    overflowElement.setAttribute('data-persistent-overflow-id', overflowId);
  }

  return {
    [`${overflowId}`]: {
      scrollTop: overflowElement.scrollTop,
      scrollLeft: overflowElement.scrollLeft,
    },
  };
}

function getPersistentScrollMap(container) {
  const scrollElements = container.querySelectorAll('[data-application-overflow-container]');

  return Array.prototype.slice.call(scrollElements).reduce((accumulator, element) => ({ ...accumulator, ...getOverflowDataForElement(element) }), {});
}

function applyScrollData(scrollData = {}, container) {
  Object.entries(scrollData).forEach(([overflowId, data]) => {
    const overflowElement = container.querySelector(`[data-persistent-overflow-id="${overflowId}"]`);
    if (overflowElement) {
      overflowElement.scrollTop = data.scrollTop;
      overflowElement.scrollLeft = data.scrollLeft;
    }
  });
}

export { getPersistentScrollMap, getOverflowDataForElement, applyScrollData };
