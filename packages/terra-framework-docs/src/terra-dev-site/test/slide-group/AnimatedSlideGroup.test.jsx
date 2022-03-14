import React from 'react';
import classNames from 'classnames/bind';
import SlideGroup from 'terra-slide-group';
import styles from '../../doc/slide-group/example/SlideGroupDemo.module.scss';

const cx = classNames.bind(styles);

class SlideGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  decrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  render() {
    const slides = [];
    for (let i = 1; i <= this.state.counter; i += 1) {
      slides.push((
        <div key={i}>
          <h2>
            Slide
            {' '}
            {i}
          </h2>
          <br />
          {i !== 4 ? <button type="button" id={`increment-${i}`} className={cx('button')} onClick={this.increment}>Increment</button> : null}
          {i !== 1 ? <button type="button" id={`decrement-${i}`} className={cx('button')} onClick={this.decrement}>Decrement</button> : null}
        </div>
      ));
    }

    return (
      <div className={cx('content-wrapper')}>
        <SlideGroup items={slides} isAnimated id="SlideGroup" />
      </div>
    );
  }
}

export default SlideGroupExample;
