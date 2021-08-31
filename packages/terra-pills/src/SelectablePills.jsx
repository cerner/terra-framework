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
  * The string that labels the collection of pills, used in cased where the text label is not visible on the screen and required for minimum accessibility standards. Providing this prop adds the aria-label attribute to the Pills container element. (Required)
  */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * If additional visible information text is used, provide a string containing the IDs for html elements that help describe the intent of the group of pills.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * If a visible text label is used with the collection of pills, provide a string of the ID for the html element containing the visible text label. Supplying the 'ariaLabelledBy' prop will override the 'ariaLabel' prop and adds the aria-labelledby attribute instead to the Pills container element. For best practices, ensure the visible text in the html element id provided to the Pills ariaLabelledbyprop matches the text provided to the ariaLabel prop, for consistency in the case of fallback or errors.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * The content to be shown in the pills container. Should only contain the sub-component <Pills.Pill>.
   */
  children: PropTypes.node,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Indicates if the Selectable Pills container is rolled up or not.
   */
  isSingleLine: PropTypes.bool,
  /**
   * Callback function to remove a pill, returns pillKey, metadata
   */
  onRemove: PropTypes.func,
  /**
   * Callback function triggered on click/keypress of each selectable pill label. Intended to only be used to disclose a popup. Returns pillKey, metaData
   */
  onSelect: PropTypes.func,
  /**
   * Callback function triggered on click/keypress of the roll-up pill when group of pills is collapsed.
   */
  onSelectRollUp: PropTypes.func,
};

const defaultProps = {
  ariaLabelledBy: undefined,
  ariaDescribedBy: undefined,
  children: undefined,
  isSingleLine: false,
  onSelect: undefined,
  onSelectRollUp: undefined,
};

const SelectablePills = (props) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    intl,
    isSingleLine,
    onRemove,
    onSelect,
    onSelectRollUp,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const selectablePillsRef = useRef();
  const focusNode = useRef(0);
  const currentPill = useRef();
  const [containerTabindex, setContainerTabindex] = useState('-1');
  const isRollUpRemoved = useRef(false);
  const [updatedCount, setUpdatedCount] = useState(React.Children.count(children));
  const [rollUpCount, setRollUpCount] = useState(React.Children.count(children));
  const isPillDeleted = useRef(false);

  const generateRollUp = useCallback(() => {
    const startIndex = PillsUtils.handleRollUp(selectablePillsRef);
    setUpdatedCount(startIndex);
    setRollUpCount(React.Children.count(children) - startIndex);
  }, [children]);

  const setTabIndex = (val) => {
    const currentNode = currentPill.current ? selectablePillsRef.current.querySelector(`[id=${currentPill.current}]`) : null;
    if (currentNode) {
      currentNode.setAttribute('tabIndex', val);
    }
  };

  const focusCurrentNode = () => {
    const currentNode = currentPill.current ? selectablePillsRef.current.querySelector(`[id=${currentPill.current}]`) : null;
    if (currentNode) {
      currentNode.focus();
    }
  };

  const handleResize = useCallback((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }

    setUpdatedCount(React.Children.count(children));
    if (isSingleLine) {
      generateRollUp();
    }
  }, [generateRollUp, isSingleLine, children]);

  useLayoutEffect(() => {
    let observer = new ResizeObserver((entries) => {
      handleResize(entries);
    });
    observer.observe(selectablePillsRef.current.parentNode);

    return () => {
      observer.disconnect();
      observer = null;
    };
  }, [children, handleResize, isSingleLine]);

  useEffect(() => {
    const pills = [...selectablePillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = selectablePillsRef.current.querySelector('[data-terra-rollup-pill]');

    // if there is a roll Up pill, set tabindex to -1
    if (rollUpPill) {
      PillsUtils.setRollUpPillTabIndex(rollUpPill, '-1');
    }

    if (pills.length > 0) {
      PillsUtils.setPillsTabIndex(pills, '-1');
      currentPill.current = pills[focusNode.current].id;
      setTabIndex('0');
    } else if (isSingleLine && rollUpPill && pills.length === 0) { // if the first pill is rollUp pill, set rollUp pill tabindex 0
      currentPill.current = rollUpPill.getAttribute('id');
      setTabIndex('0');
    }
  }, [isSingleLine]);

  // When a pill is deleted, focuses the new pill.
  useEffect(() => {
    const pills = [...selectablePillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = selectablePillsRef.current.querySelector('[data-terra-rollup-pill]');
    const startIndex = PillsUtils.handleRollUp(selectablePillsRef);

    if (isPillDeleted.current && React.Children.count(children) > 0) {
      // if there is a roll Up pill, set tabindex to 0
      if (rollUpPill) {
        PillsUtils.setRollUpPillTabIndex(rollUpPill, '-1');
      }

      if (pills.length > 0) {
        PillsUtils.setPillsTabIndex(pills, '-1');
      }

      if (rollUpPill && startIndex >= 1) { // if there is rollup pill and collapsible pills, then focus the collapsible pill.
        currentPill.current = pills[focusNode.current].id;
      } else if (rollUpPill) { // if the new pill cannot fit within the the container, then focuus the roll up pill
        currentPill.current = rollUpPill.getAttribute('id');
      } else {
        currentPill.current = pills[focusNode.current].id;
      }
      setTabIndex('0');
      focusCurrentNode();
      isPillDeleted.current = false;
    }
  }, [isPillDeleted, children]);

  useEffect(() => {
    const pills = [...selectablePillsRef.current.querySelectorAll('[data-terra-pill]')];

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
    // if the next pill is roll up pill, focus the roll up pill
    if (focusNode.current + 1 === pills.length && rollUpPill) {
      setTabIndex('-1');
      currentPill.current = rollUpPill.getAttribute('id');
      setTabIndex('0');
      focusCurrentNode();
    }

    // focus the next pill
    if (focusNode.current + 1 < pills.length) {
      setTabIndex('-1');
      focusNode.current += 1;
      currentPill.current = children[focusNode.current].props.id;
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusPreviousNode = (pills, rollUpPill) => {
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

  const focusNodeAfterDelete = (pills, rollUpPill, isRemovable) => {
    if (isRemovable) {
      // If there is only one pill
      if (pills.length === 1 && rollUpPill === null) {
        setContainerTabindex('0');
        selectablePillsRef.current.focus();
        return;
      }
      if (pills.length - 1 < React.Children.count(children)) {
        setTabIndex('-1');
        if (focusNode.current === 0) { // If the first pill is deleted
          focusNode.current = 0;
        } else {
          focusNode.current -= 1;
        }
        setRollUpCount(React.Children.count(children));
        setUpdatedCount(React.Children.count(children));
        isPillDeleted.current = true;
      }
    }
  };

  const handlePillListKeyDown = (event) => {
    const pills = [...selectablePillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = selectablePillsRef.current.querySelector('[data-terra-rollup-pill]');
    const isPillRemovable = event.target.hasAttribute('data-terra-pill-removable');

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
        focusNodeAfterDelete(pills, rollUpPill, isPillRemovable);
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

  const handleOnRemove = (pillKey, metaData) => {
    if (onRemove) {
      onRemove(pillKey, metaData);
    }
  };

  // set the focus to current pill if the pill is clicked with mouse
  const handleOnPillSelect = (pillRef, pillKey, metaData, event) => {
    const pills = [...selectablePillsRef.current.querySelectorAll('[data-terra-pill]')];
    const targetId = event.target.parentElement.getAttribute('id');

    if (targetId && event.target.parentElement.hasAttribute('data-terra-pill')) {
      setTabIndex('-1');
      currentPill.current = targetId;
      focusNode.current = pills.findIndex((element) => element.id === targetId);
      setTabIndex('0');
      focusCurrentNode();
    }
    if (onSelect) {
      onSelect(pillRef, pillKey, metaData);
    }
  };

  const handleOnSelectRollUp = (event) => {
    if (onSelectRollUp) {
      onSelectRollUp();
    }

    if (event.type === 'keydown') {
      isRollUpRemoved.current = true;
    }
  };

  const handlePillListOnblur = () => setContainerTabindex(-1);

  const selectablePillsProps = {};
  selectablePillsProps.onKeyDown = handlePillListKeyDown;
  selectablePillsProps.onBlur = handlePillListOnblur;

  const pillListClassNames = classNames(
    cx([
      'pill-list',
      theme.className,
    ]),
    customProps.className,
  );

  const renderChildren = (items) => {
    const pills = React.Children.map(items, (pill) => {
      if (React.isValidElement(pill)) {
        return React.cloneElement(pill, {
          onRemove: handleOnRemove, onSelect: handleOnPillSelect, isBasicPill: false,
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
      {...selectablePillsProps}
      aria-label={!ariaLabelledBy ? ariaLabel : undefined}
      aria-describedby={ariaDescribedBy}
      className={pillListClassNames}
      ref={selectablePillsRef}
      tabIndex={containerTabindex}
    >
      <VisuallyHiddenText id="terra-pill-visual-hidden-text" text={intl.formatMessage({ id: 'Terra.pills.pillListHint' }, { numberOfPills: React.Children.count(children) })} />
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

SelectablePills.Pill = Pill;
SelectablePills.defaultProps = defaultProps;
SelectablePills.propTypes = propTypes;

export default injectIntl(SelectablePills);
