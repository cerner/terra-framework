import React from 'react';
import classNames from 'classnames/bind';

import FolderTree from 'terra-folder-tree';

import styles from './BasicFolderTree.module.scss';

const cx = classNames.bind(styles);

const ExpandCollapseFolderTree = () => {
  const [selectedKey, setSelectedKey] = React.useState('');
  const [expandedKeys, setExpandedKeys] = React.useState({
    projects: false,
    'projects-2': false,
    'projects-3': false,
    'projects-4': false,
  });

  const handleSelect = (key) => {
    setSelectedKey(key);
  };

  const handleExpandCollapseKeys = (key) => {
    const newExpandedKeys = {
      ...expandedKeys,
      [key]: !expandedKeys[key],
    };
    setExpandedKeys(newExpandedKeys);
  };

  return (
    <div className={cx('content-wrapper')}>
      <FolderTree
        title="Documents"
        key="documents"
      >
        <FolderTree.Item
          label="Projects - Level 1"
          key="projects"
          isSelected={selectedKey === 'projects'}
          isExpanded={expandedKeys.projects}
          onClick={() => { handleSelect('projects'); }}
          onToggle={() => { handleExpandCollapseKeys('projects'); }}
          subfolderItems={[
            <FolderTree.Item
              label="Projects - Level 2"
              key="projects-2"
              isSelected={selectedKey === 'projects-2'}
              isExpanded={expandedKeys['projects-2']}
              onClick={() => { handleSelect('projects-2'); }}
              onToggle={() => { handleExpandCollapseKeys('projects-2'); }}
              subfolderItems={[
                <FolderTree.Item
                  label="Projects - Level 3"
                  key="projects-3"
                  isSelected={selectedKey === 'projects-3'}
                  isExpanded={expandedKeys['projects-3']}
                  onClick={() => { handleSelect('projects-3'); }}
                  onToggle={() => { handleExpandCollapseKeys('projects-3'); }}
                  subfolderItems={[
                    <FolderTree.Item
                      label="Projects - Level 4"
                      key="projects-4"
                      isSelected={selectedKey === 'projects-4'}
                      isExpanded={expandedKeys['projects-4']}
                      onClick={() => { handleSelect('projects-4'); }}
                      onToggle={() => { handleExpandCollapseKeys('projects-4'); }}
                      subfolderItems={[
                        <FolderTree.Item
                          label="Important Document"
                          key="important-document"
                          isSelected={selectedKey === 'important-document'}
                          isExpanded={expandedKeys.projects}
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
