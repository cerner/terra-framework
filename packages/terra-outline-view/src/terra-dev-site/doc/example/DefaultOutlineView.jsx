import React from 'react';
import { IconDocuments } from 'terra-icon';
import OutlineView from '../../../OutlineView';

const data = {
  title: 'Documents',
  items: [
    { id: 'item-1-level-1', label: 'Information', icon: <IconDocuments /> },
    { id: 'item-2-level-1', label: 'Projects - 2023', icon: <IconDocuments /> },
    {
      id: 'item-3-level-1',
      label: 'Projects - 2023',
      items: [
        { id: 'item-1-level-2-1', label: 'Project Data - October', icon: <IconDocuments /> },
        { id: 'item-2-level-2-1', label: 'Project Data - November', icon: <IconDocuments /> },
        { id: 'item-3-level-2-1', label: 'Project Data - December', icon: <IconDocuments /> },
        {
          id: 'item-4-level-2-1',
          label: 'Tests',
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

const BasicOutlineView = () => {
  const [selectedKey, setSelectedKey] = React.useState('menu');
  const [selectedChildKey, setSelectedChildKey] = React.useState(undefined);
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

  const handleOnChange = (event, changeData) => {
    setSelectedKey(changeData.selectedMenuKey);
    setSelectedChildKey(changeData.selectedChildKey);
  };

  const buildOutlineViewItems = (items) => {
    if (items) {
      const elements = [];
      items.forEach(item => {
        elements.push(
          <OutlineView.Item
            key={item.id}
            label={item.label}
            icon={item.icon}
            subfolderItems={buildOutlineViewItems(item.items)}
            isExpanded={expandedItems[item.id]}
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
    <div>
      <OutlineView
        title={data.title}
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
        selectedMenuKey={selectedKey}
        selectedChildKey={selectedChildKey}
        onChange={handleOnChange}
        ariaLabel="Sub Menu List"
      >
        {buildOutlineViewItems(data.items)}
      </OutlineView>
    </div>
  );
};

export default BasicOutlineView;
