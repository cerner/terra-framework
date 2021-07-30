import React, {
  useCallback, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import {
  KEY_BACK_SPACE, KEY_DELETE, KEY_LEFT, KEY_RIGHT,
} from 'keycode-js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import Pill from './Private/_Pill';
import styles from './Private/Pill.module.scss';
import RollUpPill from './Private/_RollupPill';
import RollUpUtils from './Private/RollUpUtils';

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
   * Determines if the Pills group should be shown as rolled up or not, limited to a single line of display.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Callback function triggered on click/keypress of any included removable pill. Returns (pillKey, metaData)
   */
  onRemove: PropTypes.func,
  /**
   * Callback function triggered on click/keypress of the roll-up pill when group of pills is collapsed.
   */
  onSelectRollUp: PropTypes.func,
};

const defaultProps = {
  ariaLabelledBy: undefined,
  ariaDescribedBy: undefined,
  children: undefined,
  isCollapsed: false,
  onSelectRollUp: undefined,
};

const Pills = (props) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    onRemove,
    isCollapsed,
    intl,
    onSelectRollUp,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillsRef = useRef();
  const rollupCount = useRef(children.length);
  const [updatedChildren, setUpdatedChildren] = useState(children);
  const focusNode = useRef(0);
  const currentPill = useRef();
  const [containerTabindex, setContainerTabindex] = useState('-1');
  const isRollUpRemoved = useRef(false);
  const prevPillsCount = useRef(0);

  const generateRollUp = useCallback(() => {
    const startIndex = RollUpUtils.handleRollUp(pillsRef);

    rollupCount.current = (children.length - startIndex);
    const reducedArray = React.Children.toArray(children).splice(0, startIndex);
    setUpdatedChildren(reducedArray);
  }, [children]);

  const generateExpansion = useCallback(() => {
    setUpdatedChildren(children);
  }, [children]);

  useLayoutEffect(() => {
    if (isCollapsed) {
      generateRollUp();
    } else {
      generateExpansion();
    }
  }, [children, generateExpansion, generateRollUp, isCollapsed]);

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

  useEffect(() => {
    const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];
    const rollUpPill = pillsRef.current.querySelector('[data-terra-rollup-pill]');
    if (rollUpPill) {
      pills.push(rollUpPill);
    }

    if (pills.length > 0) {
      for (let i = 0; i < pills.length; i += 1) {
        pills[i].setAttribute('tabindex', '-1');
      }
    }

    // Determine the first focusable pill
    if (focusNode.current === 0) {
      focusNode.current = RollUpUtils.getFirstFocusableNode(pills, focusNode.current);
    }

    // change tabIndex for first focusable element
    if (pills.length > 0 && pills.length > focusNode.current) {
      currentPill.current = pills[focusNode.current].id;
      setTabIndex('0');
      prevPillsCount.current = pills.length;
    }
    // To focus the immediate focusable pill after the rollUp pill is selected
    if (pills.length === children.length && isRollUpRemoved.current) {
      focusCurrentNode();
    }
  }, [isCollapsed, children, updatedChildren]);

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
      const nextFocusableNode = RollUpUtils.getNextFocusableNode(pills, focusNode.current);
      setTabIndex('-1');
      focusNode.current = nextFocusableNode;
      currentPill.current = pills[focusNode.current].id;
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusPreviousNode = (pills, rollUpPill) => {
    // if the focused pill is roll up pill, then focus the immediate previous pill
    if (rollUpPill && currentPill.current === 'rollup-pill') {
      setTabIndex('-1');
      focusNode.current = pills.length - 1;
      currentPill.current = pills[focusNode.current].id;
      setTabIndex('0');
      focusCurrentNode();
    } else if (focusNode.current >= 1) { // focus the previous pill
      const prevFocusableNode = RollUpUtils.getPreviousFocusableNode(pills, focusNode.current);
      setTabIndex('-1');
      focusNode.current = prevFocusableNode;
      currentPill.current = pills[focusNode.current].id;
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  // lp052179 - Not complete - Fails when there is a roll up
  const focusNodeAfterDelete = (pills, rollUpPill, pillCount) => {
    if (pills[focusNode.current].hasAttribute('data-terra-pill-removable')) {
      // If there is only one pill and is removable
      if (pills.length === 1) {
        setContainerTabindex('0');
        pillsRef.current.focus();
      }
      if (pills.length - 1 !== 0 && (pills.length - 1 < prevPillsCount.current)) {
        setTabIndex('-1');
        if (focusNode.current === 0) { // If the first pill is deleted, focus the next pill
          const nextFocusableNode = RollUpUtils.getNextFocusableNode(pills, focusNode.current);
          if (nextFocusableNode > focusNode.current) {
            currentPill.current = pills[nextFocusableNode].id;
          }
        } else if (focusNode.current !== 0) { // focus the previous pill if the current pill is delelted
          const prevFocusableNode = RollUpUtils.getPreviousFocusableNode(pills, focusNode.current);
          if (prevFocusableNode < focusNode.current) {
            focusNode.current = prevFocusableNode;
            currentPill.current = pills[focusNode.current].id;
          }
        }
        setTabIndex('0');
        focusCurrentNode();

        // Reset the previous pills count to latest count after deletion
        prevPillsCount.current = pillCount - 1;
      }
    }
  };

  const handlePillListKeyDown = (event) => {
    const pills = [...pillsRef.current.querySelectorAll('[data-terra-pill]')];
    const pillCount = pills.length;
    const rollUpPill = pillsRef.current.querySelector('[data-terra-rollup-pill]');

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
        focusNodeAfterDelete(pills, rollUpPill, pillCount);
        break;
      default:
        break;
    }
  };

  const handlePillListOnblur = () => setContainerTabindex(-1);

  const handleOnRemove = (pillKey, metaData) => {
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
    }
    const pills = pillsRef.current.querySelectorAll('[data-terra-pill]');
    // lp052179 -> incomplete - focusNode.current should be set to next focusable pill from the chldren.
    focusNode.current = pills.length;
    currentPill.current = children[focusNode.current].props.id;
  };

  const pillsProps = {};
  pillsProps.onKeyDown = handlePillListKeyDown;
  pillsProps.onBlur = handlePillListOnblur;

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
        return React.cloneElement(pill, { onRemove: handleOnRemove, isBasicPill: true });
      }
      return undefined;
    });

    return pills;
  };

  return (
    <div
      {...pillsProps}
      aria-label={!ariaLabelledBy ? ariaLabel : undefined}
      aria-describedby={ariaDescribedBy}
      className={pillListClassNames}
      ref={pillsRef}
      tabIndex={containerTabindex}
      {...customProps}
    >
      <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.pills.pillListHint' }, { numberOfPills: updatedChildren && updatedChildren.length })} />
      {updatedChildren ? renderChildren(updatedChildren) : []}
      <RollUpPill
        isCollapsed={isCollapsed}
        onSelectRollUp={handleOnSelectRollUp}
        rollupCount={rollupCount.current}
      />
    </div>
  );
};

Pills.Pill = Pill;
Pills.defaultProps = defaultProps;
Pills.propTypes = propTypes;

export default injectIntl(Pills);
