import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import Slide from './Slide';
import transitions from './Slide.module.scss';
import { isFocusable, findFirstFocusableElement } from '../../terra-slide-panel/src/SlidePanelUtils';

const cx = classNamesBind.bind(transitions);

const propTypes = {
  /**
   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.
   */
  items: PropTypes.array,
  /**
   * When true, the transition between slides is animated.
   */
  isAnimated: PropTypes.bool,
};

const defaultProps = {
  isAnimated: false,
};

class SlideGroup extends React.Component {
  static hidePreviousSlide(enteredElement) {
    if (enteredElement.previousSibling) {
      enteredElement.previousSibling.setAttribute('aria-hidden', true);

      // console.log([...this.disclosingNodes])
      // console.log(this.lastClicked);
      // this.setDisclosingNodes([...this.disclosingNodes, this.lastClicked]);

      const focusElement = findFirstFocusableElement(enteredElement);
      focusElement.focus();
    }
  }

  static showPreviousSlide(exitingElement) {
    if (exitingElement.previousSibling) {
      exitingElement.previousSibling.removeAttribute('aria-hidden');
    }

    console.log(this.lastClicked);
  }

  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.setLastClicked = this.setLastClicked.bind(this);
    this.setDisclosingNodes = this.setDisclosingNodes.bind(this);

    this.state = {
      currentSlide: 0,
      lastClicked: [],
    };
  }

  setContainer(node) {
    if (!node) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount
    this.slideGroup = node;
  }

  setLastClicked(event, itemCount) {
    event.persist();

    console.log('state', this.state);
    console.log('clicked. event:', event.target);
    console.log('item count', itemCount);

    if (isFocusable(event.target)) {
      this.setState((state) => {
        state.lastClicked.splice(itemCount, 1, event.target);
      });
    }
  }

  setDisclosingNodes(nodes) {
    console.log("setting disclosing nodes!");
    console.log(nodes);

    this.disclosingNodes = nodes;
  }

  render() {
    const { items, isAnimated, ...customProps } = this.props;
    // We don't want to render the transition group when no children exist. Doing so will cause the first child to
    // animate into place, which in most cases we do not want.
    if (!items || !items.length) {
      return null;
    }

    // We use the key from the first child as the key for the transition group. This will cause the transition group to
    // rerender when the root child changes and subsequently prevent that child from animating into position.
    const transitionGroupKey = items[0].key;

    const itemCount = items.length - 1;

    const transitionNames = {
      enter: transitions.enter,
      enterActive: transitions['enter-active'],
      exit: transitions.exit,
      exitActive: transitions['exit-active'],
    };
    const theme = this.context;
    const slideGroupClass = classNames(cx(
      'slide-group',
      theme.className,
    ),
    customProps.className);

    return (
      <TransitionGroup {...customProps} ref={this.setContainer} className={slideGroupClass} key={transitionGroupKey} onClick={(e) => this.setLastClicked(e, itemCount)}>
        {items.map((item, index) => (
          <CSSTransition
            classNames={transitionNames}
            enter={isAnimated}
            onEntered={SlideGroup.hidePreviousSlide}
            exit={isAnimated}
            onExit={SlideGroup.showPreviousSlide}
            timeout={300}
            key={item.key}
            id="shmmoop"
          >
            <Slide isHidden={index !== itemCount}>
              {item}
            </Slide>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;
SlideGroup.contextType = ThemeContext;

export default SlideGroup;
