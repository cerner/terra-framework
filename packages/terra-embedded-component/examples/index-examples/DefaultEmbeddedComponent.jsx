import React from 'react';
import EmbeddedComponent from '../../lib/EmbeddedComponent';

class DefaultEmbeddedComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }
  
  render() {
    if (this.state.error) {
      return <div> An Error Occured While Loading </div>;
    }
    return <EmbeddedComponent basePath="https://s3.amazonaws.com/healthelastic-dev/localtest/assets/terra" entry="index.js" timeout={1000} placeholder={<div>Loading</div>} />;
  }
}

export default DefaultEmbeddedComponent;
