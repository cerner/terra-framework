import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  staticContext: PropTypes.object,
};

class MockApplicationTabs extends React.Component {
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
      <div style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%', height: '100%' }}>
        <div {...customProps} style={{ backgroundColor: 'red', width: '100%', height: '100%' }} ref={this.setContainerNode} />
      </div>
    );
  }
}

MockApplicationTabs.propTypes = propTypes;

export default MockApplicationTabs;
