import React from 'react';
import FolderTree from 'terra-folder-tree';

const data = {
  title: 'Documents',
  items: [
    {
      id: 'item-1-level-1',
      label: 'Projects - Level 1',
      items: [
        { id: 'item-1-level-2', label: 'Important Document 1' },
        {
          id: 'item-2-level-2',
          label: 'Projects - Level 2',
          items: [
            {
              id: 'item-1-level-3',
              label: 'Projects - Level 3',
              items: [
                {
                  id: 'item-1-level-4',
                  label: 'Projects - Level 4',
                  items: [
                    { id: 'item-1-level-5', label: 'Important Document 4' },
                    { id: 'item-1-level-5', label: 'Important Document 5' },
                  ],
                },
                { id: 'item-2-level-4', label: 'Important Document 3' },
              ],
            },
            { id: 'item-2-level-3', label: 'Important Document 2' },
          ],
        },
      ],
    },
  ],
};

const folderExpandedState = {
  'item-1-level-1': false,
  'item-2-level-2': false,
  'item-1-level-3': false,
  'item-1-level-4': false,
};

const ExpandCollapseFolderTree = () => {
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
            isSelected={selectedKey === item.id}
            onClick={() => { setSelectedKey(item.id); }}
            onToggle={() => { handleExpandCollapseKeys(item.id); }}
          />,
        );
      });
      return elements;
    }

    return null;
  };

  return (
    <div id="expand-collapse-folder-tree">
      <FolderTree
        title="Documents"
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
      >
        {buildFolderTreeItems(data.items)}
      </FolderTree>
    </div>
  );
};

export default ExpandCollapseFolderTree;
