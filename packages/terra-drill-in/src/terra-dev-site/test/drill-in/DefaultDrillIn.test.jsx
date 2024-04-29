import React from 'react';

import { IconDocuments } from 'terra-icon';
import DrillIn from '../../../DrillIn';

const DefaultDrillIn = () => {
  const [selectedKey, setSelectedKey] = React.useState('');
  const [selectedChildKey, setSelectedChildKey] = React.useState(undefined);
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

  const handleOnChange = (event, changeData) => {
    setSelectedKey(changeData.selectedMenuKey);
    setSelectedChildKey(changeData.selectedChildKey);
  };

  return (
    <div id="basic-folder-tree">
      <DrillIn
        title="Documents"
        key="documents"
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
        onChange={handleOnChange}
        selectedMenuKey={selectedKey}
        selectedChildKey={selectedChildKey}
        ariaLabel="Sub Menu List"
      >
        <DrillIn.Item
          label="info.txt"
          icon={<IconDocuments />}
          key="info"
          isSelected={selectedKey === 'info'}
          onSelect={() => { setSelectedKey('info'); }}
          child
        />
        <DrillIn.Item
          label="projects_2023.txt"
          icon={<IconDocuments />}
          key="projects_2023"
          isSelected={selectedKey === 'projects_2023'}
          onSelect={() => { setSelectedKey('projects_2023'); }}
        />
        <DrillIn.Item
          label="Projects"
          key="projects"
          isSelected={selectedKey === 'projects'}
          isExpanded={expandedItems.projects}
          onSelect={() => { setSelectedKey('projects'); }}
          onToggle={() => { handleExpandCollapseKeys('projects'); }}
          subfolderItems={[
            (<DrillIn.Item
              label="project_data1.txt"
              icon={<IconDocuments />}
              key="project_data1"
              isSelected={selectedKey === 'project_data1'}
              onSelect={() => { setSelectedKey('project_data1'); }}
            />),
            (<DrillIn.Item
              label="project_data2.txt"
              icon={<IconDocuments />}
              key="project_data2"
              isSelected={selectedKey === 'project_data2'}
              onSelect={() => { setSelectedKey('project_data2'); }}
            />),
            (<DrillIn.Item
              label="Tests"
              key="tests"
              isSelected={selectedKey === 'tests'}
              isExpanded={expandedItems.tests}
              onSelect={() => { setSelectedKey('tests'); }}
              onToggle={() => { handleExpandCollapseKeys('tests'); }}
              icon={<IconDocuments />}
              subfolderItems={[
                (<DrillIn.Item
                  label="very_very_very_very_very_very_very_long_name_test.txt"
                  icon={<IconDocuments />}
                  key="long-name-test"
                  isSelected={selectedKey === 'long-name-test'}
                  onSelect={() => { setSelectedKey('long-name-test'); }}
                />),
                (<DrillIn.Item
                  label="test.txt"
                  icon={<IconDocuments />}
                  key="test"
                  isSelected={selectedKey === 'test'}
                  onSelect={() => { setSelectedKey('test'); }}
                />),
                (<DrillIn.Item
                  label="even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt"
                  icon={<IconDocuments />}
                  key="longer-name-test"
                  isSelected={selectedKey === 'longer-name-test'}
                  onSelect={() => { setSelectedKey('longer-name-test'); }}
                />),
              ]}
            />),
          ]}
        />
      </DrillIn>
    </div>
  );
};

export default DefaultDrillIn;
