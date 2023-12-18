import React from 'react';
import classNames from 'classnames/bind';

import { IconDocuments } from 'terra-icon';
import FolderTree from 'terra-folder-tree';

import styles from './common/FolderTreeCommon.module.scss';

const cx = classNames.bind(styles);

const BasicFolderTree = () => {
  const [selectedKey, setSelectedKey] = React.useState('');

  return (
    <div id="wrapped-label-folder-tree" className={cx('content-wrapper')}>
      <FolderTree
        title="Documents"
        key="documents"
      >
        <FolderTree.Item
          label="long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt"
          icon={<IconDocuments />}
          key="long-name-test"
          isSelected={selectedKey === 'long-name-test'}
          onClick={() => { setSelectedKey('long-name-test'); }}
        />
      </FolderTree>
    </div>
  );
};

export default BasicFolderTree;
