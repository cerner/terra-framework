import React from 'react';
import classNames from 'classnames/bind';

import { IconDocuments } from 'terra-icon';
import FolderTree from 'terra-folder-tree';

import styles from './BasicFolderTree.module.scss';

const cx = classNames.bind(styles);

const data = {
  title: 'Documents',
  items: [
    { id: 'item-1-level-1', label: 'Information', icon: <IconDocuments /> },
    {
      id: 'item-2-level-1', label: 'Projects - 2023', icon: <IconDocuments />, isSelectable: false,
    },
    {
      id: 'item-3-level-1',
      label: 'Projects - 2023',
      isSelectable: false,
      items: [
        { id: 'item-1-level-2-1', label: 'Project Data - October', icon: <IconDocuments /> },
        { id: 'item-2-level-2-1', label: 'Project Data - November', icon: <IconDocuments /> },
        { id: 'item-3-level-2-1', label: 'Project Data - December', icon: <IconDocuments /> },
        {
          id: 'item-4-level-2-1',
          label: 'Tests',
          isSelectable: false,
          items: [
            { id: 'item-1-level-3-1', label: 'Very Very Very Very Very Very Very Long Name Test', icon: <IconDocuments /> },
            { id: 'item-2-level-3-1', label: 'Even Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger Name Test', icon: <IconDocuments /> },
          ],
        },
      ],
    },
    { id: 'item-4-level-1', label: 'Projects - 2024', icon: <IconDocuments /> },
    {
      id: 'item-5-level-1',
      label: 'Projects - 2024',
      isSelectable: false,
      items: [
        { id: 'item-1-level-2-2', label: 'Project Data - January', icon: <IconDocuments /> },
      ],
    },
  ],
};

const folderExpandedState = {
  'item-3-level-1': false,
  'item-4-level-2-1': false,
  'item-5-level-1': false,
};

const FolderTreeSelection = () => {
  const [selectedKey, setSelectedKey] = React.useState('');
  const [expandedItems, setExpandedItems] = React.useState(folderExpandedState);

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

  const buildFolderTreeItems = (items) => {
    if (items) {
      const elements = [];
      items.forEach(item => {
        elements.push(
          <FolderTree.Item
            key={item.id}
            label={item.label}
            icon={item.icon}
            subfolderItems={buildFolderTreeItems(item.items)}
            isExpanded={expandedItems[item.id]}
            isSelectable={item.isSelectable}
            isSelected={selectedKey === item.id}
            onSelect={() => { setSelectedKey(item.id); }}
            onToggle={() => { handleExpandCollapseKeys(item.id); }}
          />,
        );
      });
      return elements;
    }

    return null;
  };

  return (
    <div className={cx('content-wrapper')}>
      <FolderTree
        title={data.title}
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
      >
        {buildFolderTreeItems(data.items)}
      </FolderTree>
    </div>
  );
};

export default FolderTreeSelection;
