import React from 'react';

import EmbeddedComponent from '../../lib/EmbeddedComponent';

const placeholder = <div>Loading</div>;

export default () => <EmbeddedComponent basePath="http://localhost:8083" placeholder={placeholder} />;
