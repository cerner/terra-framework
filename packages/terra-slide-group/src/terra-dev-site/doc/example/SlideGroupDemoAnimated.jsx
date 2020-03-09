import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SlideGroup from 'terra-slide-group';
import styles from './SlideGroupDemo.module.scss';

const cx = classNames.bind(styles);

class SlideGroupDemo extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      counter: 1,
    };
  }

  increment() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  decrement() {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    const slides = [];
    for (let i = 0; i < this.state.counter; i += 1) {
      slides.push((
        <div
          key={`Slide ${i}`}
          className={cx('slide')}
        >
          <h2>
            Slide
            {i}
          </h2>
          <br />
          <button type="button" onClick={this.increment}>Increment</button>
          {i !== 0 ? <button type="button" onClick={this.decrement}>Decrement</button> : null}
        </div>
      ));
    }

    return (
      <div className={cx('container')}>
        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />
      </div>
    );
  }
}

SlideGroupDemo.propTypes = {
  isAnimated: PropTypes.bool,
};

const AnimatedSlideGroup = () => (
  <SlideGroupDemo isAnimated />
);
export default AnimatedSlideGroup;
