import React from 'react';

import { IconDocuments, IconHospital } from 'terra-icon';
import OutlineView from 'terra-outline-view';

const DefaultOutlineView = () => {
  const [selectedKey, setSelectedKey] = React.useState('menu');
  const [selectedChildKey, setSelectedChildKey] = React.useState(undefined);
  const [expandedItems, setExpandedItems] = React.useState({
    projects: false,
    tests: false,
    details: false,
    test2: false,
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

  const handleOnChange = (event, changeData) => {
    setSelectedKey(changeData.selectedMenuKey);
    setSelectedChildKey(changeData.selectedChildKey);
  };

  return (
    <div>
      <OutlineView
        title="Documents"
        key="documents"
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
        onChange={handleOnChange}
        selectedMenuKey={selectedKey}
        selectedChildKey={selectedChildKey}
        ariaLabel="Sub Menu List"
      >
        <OutlineView.Item
          label="info.txt"
          icon={<IconDocuments />}
          key="info"
          isSelected={selectedKey === 'info'}
          onSelect={() => { setSelectedKey('info'); }}
          child
        />
        <OutlineView.Item
          label="projects_2023.txt"
          icon={<IconDocuments />}
          key="projects_2023"
          isDisabled
          isSelected={selectedKey === 'projects_2023'}
          onSelect={() => { setSelectedKey('projects_2023'); }}
        />
        <OutlineView.Item
          label="Projects"
          key="projects"
          isSelected={selectedKey === 'projects'}
          isExpanded={expandedItems.projects}
          onSelect={() => { setSelectedKey('projects'); }}
          onToggle={() => { handleExpandCollapseKeys('projects'); }}
          subfolderItems={[
            (<OutlineView.Item
              label="project_data1.txt"
              icon={<IconDocuments />}
              key="project_data1"
              isSelected={selectedKey === 'project_data1'}
              onSelect={() => { setSelectedKey('project_data1'); }}
            />),
            (<OutlineView.Item
              label="project_data2.txt"
              icon={<IconDocuments />}
              key="project_data2"
              isSelected={selectedKey === 'project_data2'}
              onSelect={() => { setSelectedKey('project_data2'); }}
            />),
            (<OutlineView.Item
              label="Tests"
              key="tests"
              isSelected={selectedKey === 'tests'}
              isExpanded={expandedItems.tests}
              onSelect={() => { setSelectedKey('tests'); }}
              onToggle={() => { handleExpandCollapseKeys('tests'); }}
              icon={<IconHospital />}
              subfolderItems={[
                (<OutlineView.Item
                  label="very_very_very_very_very_very_very_long_name_test.txt"
                  icon={<IconDocuments />}
                  key="long-name-test"
                  isSelected={selectedKey === 'long-name-test'}
                  onSelect={() => { setSelectedKey('long-name-test'); }}
                />),
                (<OutlineView.Item
                  label="test.txt"
                  icon={<IconDocuments />}
                  key="test"
                  isSelected={selectedKey === 'test'}
                  onSelect={() => { setSelectedKey('test'); }}
                />),
                (<OutlineView.Item
                  label="even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt"
                  icon={<IconDocuments />}
                  key="longer-name-test"
                  isSelected={selectedKey === 'longer-name-test'}
                  onSelect={() => { setSelectedKey('longer-name-test'); }}
                />),
                (<OutlineView.Item
                  label="test2"
                  key="test2"
                  isSelected={selectedKey === 'test2'}
                  onSelect={() => { setSelectedKey('test2'); }}
                  isExpanded={expandedItems.test2}
                  onToggle={() => { handleExpandCollapseKeys('test2'); }}
                  subfolderItems={[]}
                />),
              ]}
            />),
          ]}
        />
        <OutlineView.Item
          label="Details"
          key="details"
          isSelected={selectedKey === 'details'}
          onSelect={() => { setSelectedKey('details'); }}
          isExpanded={expandedItems.details}
          onToggle={() => { handleExpandCollapseKeys('details'); }}
          subfolderItems={[]}
        />
      </OutlineView>
    </div>
  );
};

export default DefaultOutlineView;
