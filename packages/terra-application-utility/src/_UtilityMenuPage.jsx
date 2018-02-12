import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
// import styles from './_UtilityMenuPage.scss';

// const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Object containing data for this specific page
   */
  pageData: PropTypes.shape({
    Title: PropTypes.string,
    Content: PropTypes.element,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  /**
   * Function to trigger when an item is selected
   */
  onChange: PropTypes.func.isRequired,
};

class UtilityMenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // handleOnClick(key) {
  //   this.props.onChange(key);
  // }

  render() {
    const {
      pageData,
      onChange,
    } = this.props;

    return (
      <ul>
        {pageData.children.map(child => (
          <li><Arrange onClick={(event) => { onChange(event, child.key); }}>{child.title || child.content}</Arrange></li>
        ))}
      </ul>
    );
  }
}

UtilityMenuPage.propTypes = propTypes;

export default UtilityMenuPage;
