import React, {
  useCallback, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import {
  KEY_BACK_SPACE,
  KEY_DELETE,
  KEY_END,
  KEY_HOME,
  KEY_LEFT,
  KEY_RIGHT,
} from 'keycode-js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ResizeObserver from 'resize-observer-polyfill';
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
   * Indicates if the Pills container is rolled up or not.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Callback function to remove a pill, returns 'pillKey' and 'metadata' props from the removed `<Pills.Pill>` sub-component.
   */
  onRemove: PropTypes.func,
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
  const filterPillsRef = useRef();
  const focusNode = useRef(0);
  const currentPill = useRef();
  const [containerTabindex, setContainerTabindex] = useState('-1');
  const isRollUpRemoved = useRef(false);
  const [updatedCount, setUpdatedCount] = useState(React.Children.count(children));
  const [rollUpCount, setRollUpCount] = useState(React.Children.count(children));
  const isPillDeleted = useRef(false);
  const [isCollapsed, setIsCollapsed] = useState(isCollapsible);
  const [pillRemoved, setIsPillRemoved] = useState(false);
  const removedLabel = useRef();
  const [showRollupPillInteraction, setShowRollupPillInteraction] = useState(false);

  const generateRollUp = useCallback(() => {
    const startIndex = PillsUtils.handleRollUp(filterPillsRef);
    if (isCollapsed) {
      setUpdatedCount(startIndex);
      setRollUpCount(React.Children.count(children) - startIndex);
    } else if (startIndex === React.Children.count(children)) {
      setRollUpCount(0);
    }
  }, [children, isCollapsed]);

  const setTabIndex = (val) => {
    const currentNode = currentPill.current ? filterPillsRef.current.querySelector(`[id=${currentPill.current}]`) : null;
    if (currentNode) {
      currentNode.setAttribute('tabIndex', val);
    }
  };

  const focusCurrentNode = () => {
    const currentNode = currentPill.current ? filterPillsRef.current.querySelector(`[id=${currentPill.current}]`) : null;
    if (currentNode) {
      currentNode.focus();
    }
  };

  const handleTabIndex = useCallback(() => {
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
    } else if (isCollapsible && rollUpPill) { // if the first pill is rollUp pill, set rollUp pill tabindex 0
      currentPill.current = rollUpPill.getAttribute('id');
      setTabIndex('0');
    }
  }, [isCollapsible]);

  const handleResize = useCallback((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }

    setUpdatedCount(React.Children.count(children));
    setRollUpCount(React.Children.count(children));

    if (isCollapsible) {
      generateRollUp();
    }

    handleTabIndex();
  }, [children, isCollapsible, handleTabIndex, generateRollUp]);

  useLayoutEffect(() => {
    let observer = new ResizeObserver((entries) => {
      handleResize(entries);
    });
    observer.observe(filterPillsRef.current.parentNode);

    return () => {
      observer.disconnect();
      observer = null;
    };
  }, [children, handleResize, isCollapsed]);

  // useEffect(() => {
  //   const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
  //   const rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');
  //   // if there is a roll Up pill, set tabindex to -1
  //   if (rollUpPill) {
  //     PillsUtils.setRollUpPillTabIndex(rollUpPill, '-1');
  //   }

  //   if (pills.length > 0) {
  //     PillsUtils.setPillsTabIndex(pills, '-1');
  //     currentPill.current = pills[focusNode.current].id;
  //     setTabIndex('0');
  //   } else if (isCollapsible && rollUpPill && pills.length === 0) { // if the first pill is rollUp pill, set rollUp pill tabindex 0
  //     currentPill.current = rollUpPill.getAttribute('id');
  //     setTabIndex('0');
  //   }
  // }, [children, isCollapsible, updatedCount]);

  const focusPillsContainer = () => {
    setContainerTabindex('0');
    filterPillsRef.current.focus();
  };

  // When a pill is deleted, focuses the new pill.
  useEffect(() => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');
    const startIndex = PillsUtils.handleRollUp(filterPillsRef);

    if (isPillDeleted.current) {
      if (React.Children.count(children) <= 0) {
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
  }, [isPillDeleted, children]);

  useEffect(() => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    // To focus the immediate focusable pill after the rollUp pill is selected/removed
    if (isCollapsible && !isCollapsed) {
      if (pills.length === React.Children.count(children)) {
        setTabIndex('-1');
        focusNode.current += 1;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        if (isRollUpRemoved.current) {
          focusCurrentNode();
          isRollUpRemoved.current = false;
        }
      }
    }
  }, [children, isCollapsed, isCollapsible, updatedCount]);

  const focusNextNode = (pills, rollUpPill) => {
    // if the next pill is roll up pill, focus the roll up pill

    if (focusNode.current + 1 === pills.length || focusNode.current + 1 < pills.length) {
      setTabIndex('-1');
      if (rollUpPill && focusNode.current + 1 === pills.length) {
        currentPill.current = rollUpPill.getAttribute('id');
      } else if (focusNode.current + 1 < pills.length) {
        focusNode.current += 1;
        currentPill.current = children[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusPreviousNode = (pills, rollUpPill) => { // lp052179
    // if the focused pill is roll up pill, then focus the immediate previous pill
    if (rollUpPill && currentPill.current === 'rollup-pill') {
      setTabIndex('-1');
      focusNode.current = pills.length - 1;
      currentPill.current = children[focusNode.current].props.id;
      setTabIndex('0');
      focusCurrentNode();
    } else if (focusNode.current >= 1) { // focus the previous pill
      setTabIndex('-1');
      focusNode.current -= 1;
      currentPill.current = children[focusNode.current].props.id;
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusNodeAfterDelete = (pills) => {
    if (pills.length - 1 < React.Children.count(children)) {
      setIsPillRemoved(true);
      removedLabel.current = pills[focusNode.current].innerText;
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
        focusNextNode(pills, rollUpPill, false);
        break;
      case KEY_LEFT:
        event.preventDefault();
        focusPreviousNode(pills, rollUpPill);
        break;
      case KEY_BACK_SPACE || KEY_DELETE:
        event.preventDefault();
        focusNodeAfterDelete(pills, rollUpPill);
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

  const handleOnRemove = (pillKey, metaData, event) => {
    if (event.type === 'click') {
      const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
      const targetId = event.target.previousSibling.getAttribute('id');
      const currentIndex = pills.findIndex((element) => element.id === targetId);

      if (pills.length > 1) {
        setTabIndex('-1');
        if (currentIndex === 0) {
          focusNode.current = 0;
        } else {
          focusNode.current = currentIndex - 1;
        }
        setTabIndex('0');
      }
    }

    if (onRemove) {
      onRemove(pillKey, metaData);
    }
  };

  // set the focus to current pill if the pill is clicked with mouse
  const handleOnPillSelect = (pillRef, pillKey, metaData, event) => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    const targetId = event.target.getAttribute('id');

    if (targetId && event.target.hasAttribute('data-terra-pill')) {
      setTabIndex('-1');
      currentPill.current = targetId;
      focusNode.current = pills.findIndex((element) => element.id === targetId);
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const handleOnSelectRollUp = (event) => {
    const pills = [...filterPillsRef.current.querySelectorAll('[data-terra-pill]')];
    if (isCollapsible && isCollapsed) {
      if (event.type === 'keydown') {
        isRollUpRemoved.current = true;
      } else {
        setTabIndex('-1');
        focusNode.current = pills.length - 1;
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

  const pillInteractionHintID = 'terra-pills-interaction-hint';
  const pillGroupInteractionHintID = 'terra-pills-group-interaction-hint';
  let removedPillInteractionHint = '';
  const pillGroupAriaDescribedBy = ariaDescribedBy ? `${ariaDescribedBy} ${pillGroupInteractionHintID}` : pillGroupInteractionHintID;
  let pillGroupInteractionHint = intl.formatMessage({ id: 'Terra.pills.hint.pillList' }, { numberOfPills: React.Children.count(children) });
  if (isCollapsible && (rollUpCount > 0) && isCollapsed) {
    pillGroupInteractionHint += `, ${intl.formatMessage({ id: 'Terra.pills.hint.rollupNotVisible' }, { pillsNotVisibleCount: rollUpCount })}`;
  } else if (isCollapsible && !isCollapsed && showRollupPillInteraction) {
    removedPillInteractionHint = 'hidden items are displayed now...';
  }
  if (pillRemoved) {
    removedPillInteractionHint = `${removedLabel.current} was removed...`;
  }

  const renderChildren = (items) => {
    const pills = React.Children.map(items, (pill) => {
      if (React.isValidElement(pill)) {
        return React.cloneElement(pill, {
          onRemove: handleOnRemove, onSelect: handleOnPillSelect, pillInteractionHintID,
        });
      }
      return undefined;
    });

    const reducedArray = pills.splice(0, updatedCount);

    return reducedArray;
  };

  return (
    <div
      {...customProps}
      {...filterPillsProps}
      aria-label={!ariaLabelledBy ? ariaLabel : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={pillGroupAriaDescribedBy}
      className={pillListClassNames}
      ref={filterPillsRef}
      role="list"
      tabIndex={containerTabindex}
    >
      <VisuallyHiddenText
        aria-live="assertive"
        id={pillInteractionHintID}
        text={removedPillInteractionHint}
        aria-hidden="true"
      />
      <VisuallyHiddenText
        aria-live="assertive"
        id={pillGroupInteractionHintID}
        text={pillGroupInteractionHint}
        aria-hidden="true"
      />
      {children ? renderChildren(children) : []}
      {(isCollapsible && rollUpCount > 0) && (
        <RollUpPill
          isCollapsed={isCollapsed}
          onSelectRollUp={handleOnSelectRollUp}
          rollupCount={rollUpCount}
        />
      )}
    </div>
  );
};

FilterPills.Pill = Pill;
FilterPills.defaultProps = defaultProps;
FilterPills.propTypes = propTypes;

export default injectIntl(FilterPills);
