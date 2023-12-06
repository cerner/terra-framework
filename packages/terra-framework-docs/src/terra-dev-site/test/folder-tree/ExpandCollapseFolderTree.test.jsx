import React from 'react';
import FolderTree from 'terra-folder-tree';

const ExpandCollapseFolderTree = () => {
  const [selectedKey, setSelectedKey] = React.useState('');
  const [expandedKeys, setExpandedKeys] = React.useState({
    projects: false,
    'projects-2': false,
    'projects-3': false,
    'projects-4': false,
  });

  const handleExpandCollapseKeys = (key) => {
    const newExpandedKeys = {
      ...expandedKeys,
      [key]: !expandedKeys[key],
    };
    setExpandedKeys(newExpandedKeys);
  };

  return (
    <div id="expand-collapse-folder-tree">
      <FolderTree
        title="Documents"
        key="documents"
      >
        <FolderTree.Item
          label="Projects - Level 1"
          key="projects"
          isSelected={selectedKey === 'projects'}
          isExpanded={expandedKeys.projects}
          onClick={() => { setSelectedKey('projects'); }}
          onToggle={() => { handleExpandCollapseKeys('projects'); }}
          subfolderItems={[
            <FolderTree.Item
              label="Projects - Level 2"
              key="projects-2"
              isSelected={selectedKey === 'projects-2'}
              isExpanded={expandedKeys['projects-2']}
              onClick={() => { setSelectedKey('projects-2'); handleExpandCollapseKeys('projects-2'); }}
              onToggle={() => { handleExpandCollapseKeys('projects-2'); }}
              subfolderItems={[
                <FolderTree.Item
                  label="Projects - Level 3"
                  key="projects-3"
                  isSelected={selectedKey === 'projects-3'}
                  isExpanded={expandedKeys['projects-3']}
                  onClick={() => { setSelectedKey('projects-3'); handleExpandCollapseKeys('projects-3'); }}
                  onToggle={() => { handleExpandCollapseKeys('projects-3'); }}
                  subfolderItems={[
                    <FolderTree.Item
                      label="Projects - Level 4"
                      key="projects-4"
                      isSelected={selectedKey === 'projects-4'}
                      isExpanded={expandedKeys['projects-4']}
                      onClick={() => { setSelectedKey('projects-4'); handleExpandCollapseKeys('projects-4'); }}
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
