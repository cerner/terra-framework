import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from '../../../README.md';

const Home = () => (
  <div style={{ height: '100%', padding: '15px', overflow: 'auto' }}>
    <Markdown src={ReadMe} />
  </div>
);

export default Home;
