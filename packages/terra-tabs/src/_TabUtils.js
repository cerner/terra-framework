import {
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  KEY_DOWN,
  KEY_HOME,
  KEY_END,
} from 'keycode-js';

const getNextTarget = (event, target) => {
  let nextTarget;
  if (target) {
    nextTarget = target;
  } else {
    nextTarget = event.currentTarget.parentNode.firstChild;
  }

  if (nextTarget.hasAttribute('aria-disabled')) {
    return getNextTarget(event, nextTarget.nextSibling);
  }

  return nextTarget;
};

const getPreviousTarget = (event, target) => {
  let previousTarget;
  if (target) {
    previousTarget = target;
  } else {
    previousTarget = event.currentTarget.parentNode.lastChild;
  }

  if (previousTarget.hasAttribute('aria-disabled')) {
    return getPreviousTarget(event, previousTarget.previousSibling);
  }

  return previousTarget;
};

const nextFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index < 0) {
    // assume menu for now
    const element = document.getElementById(ids[0]);
    if (element) {
      element.focus();
    }
    return;
  }

  // const finalTarget = getNextTarget(event, target);
  // finalTarget.focus();
  const newIndex = index + 1 >= ids.length ? 0 : index + 1;
  const element = document.getElementById(ids[newIndex]);
  if (element) {
    element.focus();
  }
};

const previousFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index < 0) {
    // assume menu for now
    const element = document.getElementById(ids[ids.length - 1]);
    if (element) {
      element.focus();
    }
    return;
  }

  // const finalTarget = getPreviousTarget(event, target);
  // finalTarget.focus();
  const newIndex = index - 1 < 0 ? ids.length - 1 : index - 1;
  const element = document.getElementById(ids[newIndex]);
  if (element) {
    element.focus();
  }
};

const firstFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index !== 0) {
    const element = document.getElementById(ids[0]);
    if (element) {
      element.focus();
    }
  }
};

const endFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index !== ids.length - 1) {
    const element = document.getElementById(ids[ids.length - 1]);
    if (element) {
      element.focus();
    }
  }
};

const handleArrows = (event, index, ids) => {
  const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  const nextKey = !isRTL ? KEY_RIGHT : KEY_LEFT;
  const previousKey = !isRTL ? KEY_LEFT : KEY_RIGHT;
  if (event.nativeEvent.keyCode === nextKey || event.nativeEvent.keyCode === KEY_DOWN) {
    nextFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === previousKey || event.nativeEvent.keyCode === KEY_UP) {
    previousFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === KEY_HOME) {
    firstFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === KEY_END) {
    endFocus(event, index, ids);
  }
};

export default {
  handleArrows,
};

export {
  handleArrows,
};
