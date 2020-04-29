import { KEY_LEFT, KEY_RIGHT } from 'keycode-js';

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

const nextFocus = (event, target) => {
  event.preventDefault();
  event.stopPropagation();

  const finalTarget = getNextTarget(event, target);
  finalTarget.focus();
};

const previousFocus = (event, target) => {
  event.preventDefault();
  event.stopPropagation();

  const finalTarget = getPreviousTarget(event, target);
  finalTarget.focus();
};

const handleArrows = (event) => {
  const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  const nextKey = !isRTL ? KEY_RIGHT : KEY_LEFT;
  const previousKey = !isRTL ? KEY_LEFT : KEY_RIGHT;
  if (event.nativeEvent.keyCode === nextKey) {
    nextFocus(event, event.currentTarget.nextSibling);
  } else if (event.nativeEvent.keyCode === previousKey) {
    previousFocus(event, event.currentTarget.previousSibling);
  }
};

export default {
  handleArrows,
};

export {
  handleArrows,
};
