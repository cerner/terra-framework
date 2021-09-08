import React, {
  useCallback, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import {
  KEY_BACK_SPACE, KEY_DELETE, KEY_END, KEY_HOME, KEY_LEFT, KEY_RIGHT,
} from 'keycode-js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import ResizeObserver from 'resize-observer-polyfill';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import Pill from './private/_Pill';
import styles from './private/Pill.module.scss';
import RollUpPill from './private/_RollupPill';
import PillsUtils from './private/PillsUtils';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The string that labels the collection of pills, used in cased where the text label is not visible on
   * the screen and required for minimum accessibility standards. Providing this prop adds the `aria-label`
   * attribute to the Pill List container element. (Required)
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * If a visible text label is used with the collection of pills, provide a string of the ID for the html
   * element containing the visible text label. Supplying the 'ariaLabelledBy' prop will override the 'ariaLabel'
   * prop and adds the `aria-labelledby` attribute instead to the Pill List container element.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) For best practices, ensure the visible text
   * in the html element `id` provided to the Pill List `ariaLabelledby` prop matches the text provided to the
   * `ariaLabel` prop, for consistency in the case of fallback or errors.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * If additional visible information text is used, provide a string containing the IDs for html elements that
   * help describe the intent of the group of pills.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * The content to be shown in the pills container. Should only contain the sub-component `<Pills.Pill>`.
   */
  children: PropTypes.node,
  /**
   * Determines if the Pills group should be shown as rolled up or not, limited to a single line of display.
   */
  isSingleLine: PropTypes.bool,
  /**
   * Callback function triggered on click/keypress of any included removable pill. Returns (pillKey, metaData)
   */
  onRemove: PropTypes.func,
  /**
   * Callback function triggered on click/keypress of the roll-up pill when group of pills is collapsed.
   */
  onSelectRollUp: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  ariaLabelledBy: undefined,
  ariaDescribedBy: undefined,
  children: undefined,
  isSingleLine: false,
  onSelectRollUp: undefined,
};

const Pills = (props) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    onRemove,
    isSingleLine,
    intl,
    onSelectRollUp,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillsRef = useRef();
  const focusNode = useRef(0);
  const currentPill = useRef();
  const [containerTabindex, setContainerTabindex] = useState('-1');
  const isRollUpRemoved = useRef(false);
  const [updatedCount, setUpdatedCount] = useState(React.Children.count(children));
  const [rollUpCount, setRollUpCount] = useState(React.Children.count(children));
  const isPillDeleted = useRef(false);

  const generateRollUp = useCallback(() => {
    const startIndex = PillsUtils.handleRollUp(pillsRef);
    setUpdatedCount(startIndex);
    setRollUpCount(React.Children.count(children) - startIndex);
  }, [children]);

  const handleResize = useCallback((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }

    setUpdatedCount(React.Children.count(children));
    setRollUpCount(React.Children.count(children));
    if (isSingleLine) {
      generateRollUp();
    }
  }, [generateRollUp, isSingleLine, children]);

  useLayoutEffect(() => {
    let observer = new ResizeObserver((entries) => {
      handleResize(entries);
    });
    observer.observe(pillsRef.current.parentNode);

    return () => {
      observer.disconnect();
      observer = null;
    };
  }, [children, handleResize, isSingleLine]);

  const setTabIndex = (val) => {
    const currentNode = currentPill.current ? pillsRef.current.querySelector(`[id=${currentPill.current}]`) : null;
    if (currentNode) {
      currentNode.setAttribute('tabIndex', val);
    }
  };

  const focusCurrentNode = () => {
    const currentNode = currentPill.current ? pillsRef.current.querySelector(`[id=${currentPill.current}]`) : null;
    if (currentNode) {
      currentNode.focus();
    }
  };

  const focusPillsContainer = () => {
    setContainerTabindex('0');
    pillsRef.current.focus();
  };

  useEffect(() => {
    const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = pillsRef.current.querySelector('[data-terra-rollup-pill]');
    const firstFocusableNode = PillsUtils.getNextFocusableNode(pills, 0);

    // if there is a roll Up pill, set tabindex to -1
    if (rollUpPill) {
      PillsUtils.setRollUpPillTabIndex(rollUpPill, '-1');
    }

    if (pills.length > 0) {
      PillsUtils.setPillsTabIndex(pills, '-1');

      // Determine the first focusable pill
      if (firstFocusableNode !== -1) {
        if (currentPill.current === undefined) {
          focusNode.current = firstFocusableNode;
          currentPill.current = pills[focusNode.current].id;
        } else {
          currentPill.current = pills[focusNode.current].id;
        }
        setTabIndex('0');
      } else if (isSingleLine && rollUpPill) {
        currentPill.current = rollUpPill.getAttribute('id');
        setTabIndex('0');
      }
    } else if (isSingleLine && rollUpPill && firstFocusableNode === -1) { // if the first pill is rollUp pill, set rollUp pill tabindex 0
      currentPill.current = rollUpPill.getAttribute('id');
      setTabIndex('0');
      focusNode.current = 0;
    }
  }, [isSingleLine, children]);

  useEffect(() => {
    const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = pillsRef.current.querySelector('[data-terra-rollup-pill]');
    const nextFocusableNode = PillsUtils.getNextFocusableNode(pills, focusNode.current);
    const prevFocusableNode = PillsUtils.getPreviousFocusableNode(pills, focusNode.current);
    const startIndex = PillsUtils.handleRollUp(pillsRef);

    if (isPillDeleted.current) {
      if (nextFocusableNode === -1 && prevFocusableNode === -1) {
        focusPillsContainer();
        return;
      }
      // if there is a roll Up pill, set tabindex to 0
      if (rollUpPill) {
        PillsUtils.setRollUpPillTabIndex(rollUpPill, '-1');
      }

      if (pills.length > 0) {
        PillsUtils.setPillsTabIndex(pills, '-1');
      }

      if (startIndex === pills.length) {
        if (prevFocusableNode >= 0) {
          focusNode.current = prevFocusableNode;
          currentPill.current = pills[focusNode.current].id;
        } else {
          focusNode.current = nextFocusableNode;
          currentPill.current = pills[focusNode.current].id;
        }
      } else if (rollUpPill && startIndex >= 0) {
        if (prevFocusableNode >= 0) {
          focusNode.current = prevFocusableNode;
          currentPill.current = pills[focusNode.current].id;
        } else if (nextFocusableNode >= 0) {
          focusNode.current = nextFocusableNode;
          currentPill.current = pills[focusNode.current].id;
        } else if (rollUpPill) {
          currentPill.current = rollUpPill.getAttribute('id');
        }
      }
      setTabIndex('0');
      focusCurrentNode();
      isPillDeleted.current = false;
    }
  }, [children, isPillDeleted]);

  useEffect(() => {
    const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];

    // To focus the immediate focusable pill after the rollUp pill is selected/removed
    if (isRollUpRemoved.current) {
      if (pills.length === React.Children.count(children)) {
        setTabIndex('-1');
        focusNode.current += 1;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
        isRollUpRemoved.current = false;
      }
    }
  }, [children, updatedCount]);

  const focusNextNode = (pills, rollUpPill) => {
    const allPills = React.Children.toArray(children);
    const nextFocusableNode = PillsUtils.getNextFocusableNode(pills, focusNode.current + 1);

    if (focusNode.current + 1 < pills.length || focusNode.current + 1 === pills.length) {
      setTabIndex('-1');
      // if there no focusable pills or the next pill is rollUpPill, focus the rollUpPill
      if ((nextFocusableNode === focusNode.current || focusNode.current + 1 === pills.length) && rollUpPill) {
        currentPill.current = rollUpPill.getAttribute('id');
      } else if (nextFocusableNode !== -1) {
        focusNode.current = nextFocusableNode;
        currentPill.current = allPills[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusPreviousNode = (pills, rollUpPill) => {
    const allPills = React.Children.toArray(children);
    const prevFocusableNode = PillsUtils.getPreviousFocusableNode(pills, focusNode.current - 1);

    if (focusNode.current >= 1 && prevFocusableNode !== -1) {
      setTabIndex('-1');
      if (rollUpPill && currentPill.current === 'rollup-pill') {
        currentPill.current = allPills[focusNode.current].props.id;
      } else {
        focusNode.current = prevFocusableNode;
        currentPill.current = allPills[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusNodeAfterDelete = (pills, rollUpPill, isRemovable) => {
    if (isRemovable) {
      // If there is only one pill and is removable
      // if (pills.length === 1 && rollUpPill === null) {
      //   focusPillsContainer();
      //   return;
      // }
      if (pills.length - 1 < React.Children.count(children)) {
        setTabIndex('-1');
        if (focusNode.current > 0) {
          focusNode.current -= 1;
        }
        isPillDeleted.current = true;
        setUpdatedCount(React.Children.count(children));
        if (isSingleLine) {
          setRollUpCount(React.Children.count(children));
        }
      }
    }
  };

  const handlePillListKeyDown = (event) => {
    const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = pillsRef.current.querySelector('[data-terra-rollup-pill]');
    const isPillRemovable = event.target.hasAttribute('data-terra-pill-removable');
    const firstFocusableNode = PillsUtils.getNextFocusableNode(pills, 0);
    const lastFocusableNode = PillsUtils.getPreviousFocusableNode(pills, pills.length - 1);

    switch (event.keyCode) {
      case KEY_RIGHT:
        event.preventDefault();
        focusNextNode(pills, rollUpPill);
        break;
      case KEY_LEFT:
        event.preventDefault();
        focusPreviousNode(pills, rollUpPill);
        break;
      case KEY_BACK_SPACE || KEY_DELETE:
        event.preventDefault();
        focusNodeAfterDelete(pills, rollUpPill, isPillRemovable);
        break;
      case KEY_HOME:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = firstFocusableNode;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
        break;
      case KEY_END:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = lastFocusableNode;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
        break;
      default:
        break;
    }
  };

  const handlePillListOnblur = () => setContainerTabindex(-1);

  const handleOnRemove = (pillKey, metaData, event) => {
    if (event.type === 'click') {
      const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];
      const targetId = event.target.previousSibling.getAttribute('id');
      const currentIndex = pills.findIndex((element) => element.id === targetId);
      const nextFocusableNode = PillsUtils.getNextFocusableNode(pills, currentIndex + 1) - 1;
      const prevFocusableNode = PillsUtils.getPreviousFocusableNode(pills, currentIndex - 1);

      if ((nextFocusableNode >= 0 || prevFocusableNode >= 0)) {
        setTabIndex('-1');
        if (prevFocusableNode !== -1 && currentIndex > prevFocusableNode) {
          focusNode.current = prevFocusableNode;
        } else {
          focusNode.current = nextFocusableNode;
        }
        setTabIndex('0');
      }
    }

    if (onRemove) {
      onRemove(pillKey, metaData);
    }
  };

  const handleOnSelectRollUp = (event) => {
    if (onSelectRollUp) {
      onSelectRollUp();
    }

    if (event.type === 'keydown') {
      isRollUpRemoved.current = true;
      setUpdatedCount(React.Children.count(children));
    }
  };

  const handleOnPillSelect = (pillRef, pillKey, metaData, event) => {
    const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];
    const targetId = event.target.getAttribute('id');

    if (targetId && event.target.hasAttribute('data-terra-pill')) {
      setTabIndex('-1');
      currentPill.current = targetId;
      focusNode.current = pills.findIndex((element) => element.id === targetId);
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const pillsProps = {};
  pillsProps.onKeyDown = handlePillListKeyDown;
  pillsProps.onBlur = handlePillListOnblur;

  const pillListClassNames = classNames(
    cx([
      'pills-group',
      theme.className,
    ]),
    customProps.className,
  );

  const renderChildren = (items) => {
    const pills = React.Children.map(items, (pill) => {
      if (React.isValidElement(pill)) {
        return React.cloneElement(pill, { onRemove: handleOnRemove, isBasicPill: true, onSelect: handleOnPillSelect });
      }
      return undefined;
    });

    const reducedArray = pills.splice(0, updatedCount);

    return reducedArray;
  };

  const pillGroupInteractionHintID = 'terra-pills-group-interaction-hint';
  const pillGroupAriaDescribedBy = ariaDescribedBy ? `${ariaDescribedBy} ${pillGroupInteractionHintID}` : pillGroupInteractionHintID;
  let pillGroupInteractionHint = intl.formatMessage({ id: 'Terra.pills.hint.pillList' }, { numberOfPills: React.Children.count(children) });
  if (isSingleLine && (rollUpCount > 0)) {
    pillGroupInteractionHint += `, ${intl.formatMessage({ id: 'Terra.pills.hint.rollupNotVisible' }, { pillsNotVisibleCount: rollUpCount })}`;
  }

  return (
    <div
      {...customProps}
      {...pillsProps}
      aria-label={!ariaLabelledBy ? ariaLabel : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={pillGroupAriaDescribedBy}
      aria-live="polite"
      aria-relevant="removals"
      className={pillListClassNames}
      ref={pillsRef}
      role="list"
      tabIndex={containerTabindex}
    >
      <VisuallyHiddenText
        id={pillGroupInteractionHintID}
        text={pillGroupInteractionHint}
        aria-hidden="true"
      />
      {children ? renderChildren(children) : []}
      {isSingleLine && (
        <RollUpPill
          isSingleLine={isSingleLine}
          onSelectRollUp={handleOnSelectRollUp}
          rollupCount={rollUpCount}
        />
      )}
    </div>
  );
};

Pills.Pill = Pill;
Pills.defaultProps = defaultProps;
Pills.propTypes = propTypes;

export default injectIntl(Pills);
