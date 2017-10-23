/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';
import styles from './site.scss';

const TestLinks = () => (
  <div className={styles.app} style={{ overflow: 'auto' }}>
    <ul className={styles['site-nav']}>
      {/* <li><Link to="/tests/alert-tests">Alert Tests</Link></li> */}
    </ul>
  </div>
);

export default TestLinks;
