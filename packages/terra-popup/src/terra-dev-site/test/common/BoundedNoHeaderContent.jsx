import React from 'react';
import PropTypes from 'prop-types';

class BoundedNoHeaderContent extends React.Component {
  render() {
    const content = this.props.closeButtonRequired ? <p>There is no Header and popup is Bounded</p> : <p>This is the content of the popup</p>;

    return content;
  }
}

BoundedNoHeaderContent.propTypes = {
  closeButtonRequired: PropTypes.bool,
};

BoundedNoHeaderContent.defaultProps = {
  closeButtonRequired: false,
};

export default BoundedNoHeaderContent;
