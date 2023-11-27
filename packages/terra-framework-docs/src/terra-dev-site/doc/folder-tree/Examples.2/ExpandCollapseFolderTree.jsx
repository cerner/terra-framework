import React from 'react';
import classNames from 'classnames/bind';

import FolderTree from 'terra-folder-tree';

import styles from './BasicFolderTree.module.scss';

const cx = classNames.bind(styles);

const ExpandCollapseFolderTree = () => {
  const [selectedKey, setSelectedKey] = React.useState('info');

  return (
    <div className={cx('content-wrapper')}>
      <FolderTree
        title="Documents"
        key="documents"
      >
        <FolderTree.Item
          label="Projects"
          key="projects"
          isSelected={selectedKey === 'projects'}
          onClick={() => { setSelectedKey('projects'); }}
          subfolderItems={[
            <FolderTree.Item
              label="Projects 2"
              key="projects-2"
              isSelected={selectedKey === 'projects-2'}
              onClick={() => { setSelectedKey('projects-2'); }}
              subfolderItems={[
                <FolderTree.Item
                  label="Projects 3"
                  key="projects-3"
                  isSelected={selectedKey === 'projects-3'}
                  onClick={() => { setSelectedKey('projects-3'); }}
                  subfolderItems={[
                    <FolderTree.Item
                      label="Projects 4"
                      key="projects-4"
                      isSelected={selectedKey === 'projects-4'}
                      onClick={() => { setSelectedKey('projects-4'); }}
                      subfolderItems={[
                        <FolderTree.Item
                          label="Important Document"
                          key="important-document"
                          isSelected={selectedKey === 'important-document'}
                          onClick={() => { setSelectedKey('important-document'); }}
                        />,
                      ]}
                    />,
                  ]}
                />,
              ]}
            />,
          ]}
        />
      </FolderTree>
    </div>
  );
};

export default ExpandCollapseFolderTree;
