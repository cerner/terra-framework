import React, { useState } from 'react';

import { IconDocuments } from 'terra-icon';
import FolderTree from 'terra-folder-tree';

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
  reloadItems: [
    { id: 'reload-item-1-level-1', label: 'Information', icon: <IconDocuments /> },
    {
      id: 'reload-item-2-level-1', label: 'Projects - 2024', icon: <IconDocuments />, isSelectable: false,
    },
    {
      id: 'reload-item-3-level-1',
      label: 'Projects - 2024',
      isSelectable: false,
      items: [
        { id: 'reload-item-1-level-2-1', label: 'Project Data - January', icon: <IconDocuments /> },
        { id: 'reload-item-2-level-2-1', label: 'Project Data - February', icon: <IconDocuments /> },
        { id: 'reload-item-3-level-2-1', label: 'Project Data - March', icon: <IconDocuments /> },
        {
          id: 'reload-item-4-level-2-1',
          label: 'Tests',
          isSelectable: false,
          items: [
            { id: 'reload-item-1-level-3-1', label: 'Very Very Very Very Very Very Very Long Name Test', icon: <IconDocuments /> },
            { id: 'reload-item-2-level-3-1', label: 'Even Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger Name Test', icon: <IconDocuments /> },
          ],
        },
      ],
    },
    { id: 'reload-item-4-level-1', label: 'Projects - 2025', icon: <IconDocuments /> },
    {
      id: 'reload-item-5-level-1',
      label: 'Projects - 2025',
      isSelectable: false,
      items: [
        { id: 'reload-item-1-level-2-2', label: 'Project Data - January', icon: <IconDocuments /> },
      ],
    },
  ],
};

const folderExpandedState = {
  'item-3-level-1': false,
  'item-4-level-2-1': false,
  'item-5-level-1': false,
};

const FolderTreeReload = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const [expandedItems, setExpandedItems] = useState(folderExpandedState);
  const [isReloaded, setReloaded] = useState(false);

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

  const reloadItems = () => {
    setReloaded(true);

    setExpandedItems({
      'reload-item-3-level-1': false,
      'reload-item-4-level-2-1': false,
      'reload-item-5-level-1': false,
    });
  };

  return (
    <>
      <button id="reload-data-button" type="button" onClick={reloadItems}> Reload Data</button>
      <br />
      <div id="folder-tree-reload">
        <FolderTree
          title={data.title}
          onExpandAll={handleExpandAll}
          onCollapseAll={handleCollapseAll}
        >
          {buildFolderTreeItems(isReloaded ? data.reloadItems : data.items)}
        </FolderTree>
      </div>
    </>
  );
};

export default FolderTreeReload;
