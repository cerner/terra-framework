import React from 'react';
import PropTypes from 'prop-types';
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
      <div style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%', height: '40px' }}>
        <div {...customProps} style={{ backgroundColor: 'red', width: '100%', height: '100%' }} ref={this.setContainerNode} />
      </div>
    );
  }
}

ApplicationTabs.propTypes = propTypes;

export default ApplicationTabs;
