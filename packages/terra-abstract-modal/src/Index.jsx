import React from 'react';
import ReactDOM from 'react-dom';

import TerraBase from 'terra-base';
import AbstractModal from './terra-dev-site/test/abstract-modal/DefaultAbstractModal.test';

const Example = () => (
  <TerraBase locale="en">
    <AbstractModal />
  </TerraBase>
);

ReactDOM.render(<Example />, document.getElementById('root'));
