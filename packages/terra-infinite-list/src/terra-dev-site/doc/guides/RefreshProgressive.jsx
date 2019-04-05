import React from 'react';
import ProgressiveLoadingList from './ProgressiveLoadingList';

class RefreshProgressive extends React.Component {
  constructor(props) {
    super(props);
    this.updateKey = this.updateKey.bind(this);
    this.state = { refreshKey: 0 };
  }

  updateKey() {
    this.setState(prevState => ({
      refreshKey: prevState.refreshKey + 1,
    }));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.updateKey}>Refresh</button>
        <ProgressiveLoadingList key={`${this.state.refreshKey}`} />
      </div>
    );
  }
}
export default RefreshProgressive;
