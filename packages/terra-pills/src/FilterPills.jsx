import React, {
  useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import {
  KEY_BACK_SPACE,
  KEY_DELETE,
  KEY_END,
  KEY_HOME,
  KEY_LEFT,
  KEY_RIGHT,
} from 'keycode-js';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import PillsUtils from './PillsUtils';
import RollUpPill from './subcomponents/_RollupPill';
import styles from './subcomponents/Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The string that labels the collection of pills, used in cases where the text label is not visible on
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
   * @private
   * The content to be shown in the pills container. Should only contain the sub-component `<Pills.Pill>`.
   */
  children: PropTypes.node,
  /**
   * Indicates if the Pills container is rolled up or not.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Callback function to remove a pill, returns 'id' and 'metadata'.
   */
  onRemove: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isCollapsible: false,
};

const FilterPills = (props) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    intl,
    isCollapsible,
    onRemove,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const [containerTabindex, setContainerTabindex] = useState('-1');
  const [updatedCount, setUpdatedCount] = useState(React.Children.count(children));
  const [rollUpCount, setRollUpCount] = useState(React.Children.count(children));
  const [isCollapsed, setIsCollapsed] = useState(isCollapsible);
  const [pillRemoved, setIsPillRemoved] = useState(false);
  const [showRollupPillInteraction, setShowRollupPillInteraction] = useState(false);
  const currentPill = useRef(); // ID of the pill that will receive focus
  const filterPillsRef = useRef();
  const focusNode = useRef(0); // index of the pill that will receive focus
  const isPillDeleted = useRef(false);
  const isRollUpRemoved = useRef(false);
  const removedLabel = useRef();
  const resizingDelayTimer = useRef(null);
  const resizeTimer = 100;

  // Identifies the number of pills that needs to be hidden/rolled up
  const generateRollUp = useCallback(() => {
    const startIndex = PillsUtils.getRollUpIndex(filterPillsRef);
    if (isCollapsed) {
      setUpdatedCount(startIndex);
      setRollUpCount(React.Children.count(children) - startIndex);
    } else if (startIndex === React.Children.count(children)) {
      setRollUpCount(0);
    }
  }, [children, isCollapsed]);

  // Modifies the tabindex of the pill/rollup pill node
  const setTabIndex = (val) => {
    const currentNode = currentPill.current ? filterPillsRef.current.querySelector(`[id='${currentPill.current}']`) : null;
    if (currentNode) {
      currentNode.setAttribute('tabIndex', val);
    }
  };

  // Sets focus to the current pill/rollup pill with tabindex 0
  const focusCurrentNode = () => {
    const currentNode = currentPill.current ? filterPillsRef.current.querySelector(`[id='${currentPill.current}']`) : null;
    if (currentNode) {
      currentNode.focus();
    }
  };

  // sets focus to the pill container if there are Zero pills/all pill are deleted.
  const focusPillsContainer = () => {
    setContainerTabindex('0');
    filterPillsRef.current.focus();
  };

  // resets all pill nodes tabindex to -1, except for the one pill that receives focus.
  const resetTabIndex = useCallback(() => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');

    // if there is a roll Up pill, set tabindex to -1
    if (rollUpPill) {
      PillsUtils.setRollUpPillTabIndex(rollUpPill, '-1');
    }

    if (pills.length > 0 && focusNode.current < pills.length) {
      PillsUtils.setPillsTabIndex(pills, '-1');
      currentPill.current = pills[focusNode.current].id;
      setTabIndex('0');
    } else if (isCollapsible && isCollapsed && rollUpPill) { // if the first pill is rollUp pill, set rollUp pill tabindex 0
      currentPill.current = rollUpPill.getAttribute('id');
      setTabIndex('0');
    }
  }, [isCollapsed, isCollapsible]);

  const handleFocusOnRollUpTrigger = useCallback(() => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    // To focus the immediate focusable pill after the rollUp pill is selected
    if (isCollapsible && !isCollapsed && pills.length > 0) {
      if (pills.length === React.Children.count(children)) {
        setTabIndex('-1');
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        if (isRollUpRemoved.current) { // if the rollup pill was triggered with keyboard focus the node
          focusCurrentNode();
          isRollUpRemoved.current = false;
        }
      }
    }
  }, [children, isCollapsed, isCollapsible]);

  const handlePillDeletion = useCallback(() => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');
    const startIndex = PillsUtils.getRollUpIndex(filterPillsRef);

    if (isPillDeleted.current) {
      if (React.Children.count(children) <= 0) {
        focusPillsContainer();
        return;
      }
      // if there is a roll Up pill, set tabindex to -1
      if (rollUpPill) {
        PillsUtils.setRollUpPillTabIndex(rollUpPill, '-1');
      }

      if (pills.length > 0) {
        PillsUtils.setPillsTabIndex(pills, '-1');
      }

      if (pills.length === startIndex) {
        currentPill.current = pills[focusNode.current].id;
      } else if (rollUpPill && startIndex >= 1) {
        currentPill.current = pills[focusNode.current].id;
      } else if (rollUpPill) {
        currentPill.current = rollUpPill.getAttribute('id');
      }
      setTabIndex('0');
      focusCurrentNode();
      isPillDeleted.current = false;
    }
  }, [children]);

  const handleResize = useCallback((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }

    setUpdatedCount(React.Children.count(children));
    setRollUpCount(React.Children.count(children));

    if (isCollapsible) {
      generateRollUp();
    }

    resetTabIndex();
    handleFocusOnRollUpTrigger();
    handlePillDeletion();
  }, [children, isCollapsible, resetTabIndex, handleFocusOnRollUpTrigger, handlePillDeletion, generateRollUp]);

  useLayoutEffect(() => {
    const debounceResize = (entries) => {
      clearTimeout(resizingDelayTimer.current);
      resizingDelayTimer.current = setTimeout(() => {
        if (resizingDelayTimer.current) handleResize(entries);
      }, resizeTimer);
    };
    const observer = new ResizeObserver(debounceResize);
    observer.observe(filterPillsRef.current.parentNode);
    return () => {
      observer.disconnect();
    };
  }, [children, filterPillsRef, handleResize]);

  const focusNextNode = (pills, rollUpPill) => {
    const rollUpPillId = rollUpPill ? rollUpPill.getAttribute('id') : null;
    if (focusNode.current + 1 <= pills.length) {
      setTabIndex('-1');
      // if the next pill is roll up pill, focus the roll up pill
      if (rollUpPill && focusNode.current + 1 === pills.length) {
        currentPill.current = rollUpPillId;
      } else if (focusNode.current + 1 < pills.length) { // focus the next available pill
        focusNode.current += 1;
        currentPill.current = children[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusPreviousNode = (pills, rollUpPill) => {
    const rollUpPillId = rollUpPill ? rollUpPill.getAttribute('id') : null;
    if (currentPill.current === rollUpPillId || focusNode.current >= 1) {
      setTabIndex('-1');
      if (rollUpPill && currentPill.current === rollUpPillId) { // If rollup pill, then focus the roll up pill
        focusNode.current = pills.length - 1;
        currentPill.current = children[focusNode.current].props.id;
      } else {
        focusNode.current -= 1;
        currentPill.current = children[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusNodeAfterDelete = (pills) => {
    if (React.Children.count(children) > 0 && pills.length - 1 < React.Children.count(children)) {
      setIsPillRemoved(true);
      removedLabel.current = pills[focusNode.current].children[0].innerText;
      setTabIndex('-1');
      if (focusNode.current > 0) {
        focusNode.current -= 1;
      }
      setUpdatedCount(React.Children.count(children));
      isPillDeleted.current = true;
    }
  };

  const handlePillListKeyDown = (event) => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');
    setIsPillRemoved(false);
    setShowRollupPillInteraction(false);

    switch (event.keyCode) {
      case KEY_RIGHT:
        event.preventDefault();
        focusNextNode(pills, rollUpPill);
        break;
      case KEY_LEFT:
        event.preventDefault();
        focusPreviousNode(pills, rollUpPill);
        break;
      case KEY_BACK_SPACE:
      case KEY_DELETE:
        event.preventDefault();
        focusNodeAfterDelete(pills);
        break;
      case KEY_HOME:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = 0;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
        break;
      case KEY_END:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = pills.length - 1;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
        break;
      default:
        break;
    }
  };

  const handleOnRemove = (id, metaData, event) => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    const targetId = event.target.parentElement.getAttribute('id');
    const currentIndex = pills.findIndex((element) => element.id === targetId);
    if (event.type === 'click') {
      if (pills.length > 1) {
        setTabIndex('-1');
        if (currentIndex === 0) {
          focusNode.current = 0;
        } else {
          focusNode.current = currentIndex - 1;
        }
        setTabIndex('0');
      }
      setIsPillRemoved(true);
    }
    focusPillsContainer();

    if (onRemove) {
      onRemove(id, metaData);
    }
  };

  // set the focus to current pill if the pill is clicked with mouse
  const handleOnPillSelect = (pillRef) => {
    if (pillRef.current && pillRef.current.children.length > 0) {
      removedLabel.current = pillRef.current.children[0].innerText;
    }
  };

  const handleOnSelectRollUp = (event) => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    if (isCollapsible && isCollapsed) {
      if (event.type === 'keydown') {
        isRollUpRemoved.current = true;
        focusNode.current = pills.length;
      } else {
        setTabIndex('-1');
        focusNode.current = pills.length;
      }
    } else {
      setShowRollupPillInteraction(false);
    }
    setIsCollapsed(!isCollapsed);
  };

  const handlePillListOnblur = () => setContainerTabindex('-1');

  const filterPillsProps = {};
  filterPillsProps.onKeyDown = handlePillListKeyDown;
  filterPillsProps.onBlur = handlePillListOnblur;

  const pillListClassNames = classNames(
    cx([
      'pills-group',
      theme.className,
    ]),
    customProps.className,
  );

  const pillGroupInteractionHintID = `terra-pills-group-interaction-hint-${uuidv4()}`;
  let removedPillInteractionHint = '';
  const pillGroupAriaDescribedBy = ariaDescribedBy ? `${ariaDescribedBy} ${pillGroupInteractionHintID}` : pillGroupInteractionHintID;
  let pillGroupInteractionHint = intl.formatMessage({ id: 'Terra.pills.hint.pillList' }, { numberOfPills: React.Children.count(children) });
  if (isCollapsible && (rollUpCount > 0) && isCollapsed) {
    pillGroupInteractionHint += `, ${intl.formatMessage({ id: 'Terra.pills.hint.rollupNotVisible' }, { pillsNotVisibleCount: rollUpCount })}`;
  } else if (isCollapsible && !isCollapsed && showRollupPillInteraction) {
    pillGroupInteractionHint = intl.formatMessage({ id: 'Terra.pills.hint.rollupVisible' });
  }
  if (pillRemoved) {
    removedPillInteractionHint = intl.formatMessage({ id: 'Terra.pills.hint.wasRemoved' }, { pillLabelName: removedLabel.current });
  }
  const renderChildren = (items) => {
    const pills = React.Children.map(items, (pill) => {
      if (React.isValidElement(pill)) {
        return React.cloneElement(pill, {
          onRemove: handleOnRemove, onSelect: handleOnPillSelect,
        });
      }
      return undefined;
    });

    const reducedArray = pills.splice(0, updatedCount);
    return reducedArray;
  };

  const ariaLabelHint = (!ariaLabelledBy) ? `${removedPillInteractionHint}, ${ariaLabel}` : undefined;
  const ariaAttrs = (React.Children.count(children)) ? {
    'aria-live': 'assertive',
    'aria-label': ariaLabelHint,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': pillGroupAriaDescribedBy,
    role: 'list',
  } : { role: 'group' };

  if (!React.Children.count(children)) {
    pillGroupInteractionHint = `${pillGroupInteractionHint}, ${ariaLabelHint}`;
  }

  return (
    <>
      <div
        {...customProps}
        {...filterPillsProps}
        {...ariaAttrs}
        tabIndex={containerTabindex}
        className={pillListClassNames}
        ref={filterPillsRef}
      >
        {children ? renderChildren(children) : []}
        {(isCollapsible && rollUpCount > 0) && (
        <RollUpPill
          isCollapsed={isCollapsed}
          onSelectRollUp={handleOnSelectRollUp}
          rollupCount={rollUpCount}
        />
        )}
      </div>
      <VisuallyHiddenText
        aria-live="polite"
        id={pillGroupInteractionHintID}
        text={pillGroupInteractionHint}
      />
    </>
  );
};

FilterPills.defaultProps = defaultProps;
FilterPills.propTypes = propTypes;

export default injectIntl(FilterPills);
