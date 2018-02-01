import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import 'terra-base/lib/baseStyles';

const propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  staticContext: PropTypes.object,
};

class ApplicationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainerNode = this.setContainerNode.bind(this);
  }

  setContainerNode(node) {
    this.container = node;
  }

  render() {
    const {
      links,
      location,
      match,
      history,
      staticContext,
      ...customProps
    } = this.props;

    return (
      <div {...customProps} style={{ backgroundColor: 'red', width: '100%' }} ref={this.setContainerNode} />
    );
  }
}

ApplicationTabs.propTypes = propTypes;

export default withRouter(ApplicationTabs);
