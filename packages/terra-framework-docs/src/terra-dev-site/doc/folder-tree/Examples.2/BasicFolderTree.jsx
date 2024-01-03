import React from 'react';
import classNames from 'classnames/bind';

import { IconDocuments } from 'terra-icon';
import FolderTree from 'terra-folder-tree';

import styles from './BasicFolderTree.module.scss';

const cx = classNames.bind(styles);

const BasicFolderTree = () => {
  const [selectedKey, setSelectedKey] = React.useState('info');
  const [expandedItems, setExpandedItems] = React.useState({
    projects: false,
    tests: false,
  });

  const handleExpandCollapseKeys = (key) => {
    const newExpandedItems = {
      ...expandedItems,
      [key]: !expandedItems[key],
    };
    setExpandedItems(newExpandedItems);
  };

  const handleExpandAll = () => {
    const newExpandedItems = {
      ...expandedItems,
    };
    Object.keys(newExpandedItems).forEach(v => { newExpandedItems[v] = true; });

    setExpandedItems(newExpandedItems);
  };

  const handleCollapseAll = () => {
    const newExpandedItems = {
      ...expandedItems,
    };
    Object.keys(newExpandedItems).forEach(v => { newExpandedItems[v] = false; });

    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={cx('content-wrapper')}>
      <FolderTree
        title="Documents"
        key="documents"
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
      >
        <FolderTree.Item
          label="info.txt"
          icon={<IconDocuments />}
          key="info"
          isSelected={selectedKey === 'info'}
          onClick={() => { setSelectedKey('info'); }}
        />
        <FolderTree.Item
          label="projects_2023.txt"
          icon={<IconDocuments />}
          key="projects_2023"
          isSelected={selectedKey === 'projects_2023'}
          onClick={() => { setSelectedKey('projects_2023'); }}
        />
        <FolderTree.Item
          label="Projects"
          key="projects"
          isSelected={selectedKey === 'projects'}
          isExpanded={expandedItems.projects}
          onClick={() => { setSelectedKey('projects'); }}
          onToggle={() => { handleExpandCollapseKeys('projects'); }}
          subfolderItems={[
            (<FolderTree.Item
              label="project_data1.txt"
              icon={<IconDocuments />}
              key="project_data1"
              isSelected={selectedKey === 'project_data1'}
              onClick={() => { setSelectedKey('project_data1'); }}
            />),
            (<FolderTree.Item
              label="project_data2.txt"
              icon={<IconDocuments />}
              key="project_data2"
              isSelected={selectedKey === 'project_data2'}
              onClick={() => { setSelectedKey('project_data2'); }}
            />),
            (<FolderTree.Item
              label="Tests"
              key="tests"
              isSelected={selectedKey === 'tests'}
              isExpanded={expandedItems.tests}
              onClick={() => { setSelectedKey('tests'); }}
              onToggle={() => { handleExpandCollapseKeys('tests'); }}
              icon={<IconDocuments />}
              subfolderItems={[
                (<FolderTree.Item
                  label="very_very_very_very_very_very_very_long_name_test.txt"
                  icon={<IconDocuments />}
                  key="long-name-test"
                  isSelected={selectedKey === 'long-name-test'}
                  onClick={() => { setSelectedKey('long-name-test'); }}
                />),
                (<FolderTree.Item
                  label="test.txt"
                  icon={<IconDocuments />}
                  key="test"
                  isSelected={selectedKey === 'test'}
                  onClick={() => { setSelectedKey('test'); }}
                />),
                (<FolderTree.Item
                  label="even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt"
                  icon={<IconDocuments />}
                  key="longer-name-test"
                  isSelected={selectedKey === 'longer-name-test'}
                  onClick={() => { setSelectedKey('longer-name-test'); }}
                />),
              ]}
            />),
          ]}
        />
      </FolderTree>
    </div>
  );
};

export default BasicFolderTree;
