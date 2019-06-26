import React from 'react';
import DocTemplate from 'terra-doc-template';
import classNames from 'classnames/bind';

import { name } from '../../../../package.json';
import ExampleDoc from '../../../../docs/example.md';
import styles from './Example.2.doc.module.scss';

/* eslint-disable import/no-webpack-loader-syntax, import/first,  import/no-unresolved, import/extensions, , import/no-duplicates */
import ExampleApplication from '../example/ExampleApplication';
import ExampleApplicationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ExampleApplication';
import ExampleApplicationWithNavIcons from '../example/ExampleApplicationWithNavIcons';
import ExampleApplicationWithNavIconsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ExampleApplicationWithNavIcons';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const cx = classNames.bind(styles);

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ExampleDoc}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        example: <div className={cx('example-content')}><ExampleApplication /></div>,
        source: ExampleApplicationSrc,
      },
      {
        example: <div className={cx('example-content')}><ExampleApplicationWithNavIcons /></div>,
        source: ExampleApplicationWithNavIconsSrc,
      },
    ]}
  />
);

export default DocPage;
