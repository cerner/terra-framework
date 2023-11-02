import React from 'react';
import { IconHospital, IconAnalytics, IconBriefcase, IconDocuments } from 'terra-icon';
import FolderTree from 'terra-folder-tree';

const BasicFolderTree = () => {
  const [selectedKey, setSelectedKey] = React.useState('a');
  
  return (
  <FolderTree
    title="Documents"
    key="a"
    isSelected={selectedKey === 'a'}
    onClick={() => {setSelectedKey('a')}}
  >
    <FolderTree.TreeItem
      text="info.txt"
      icon={<IconDocuments />}
      key="b"
      isSelected={selectedKey === 'b'}
      onClick={() => {setSelectedKey('b')}}
    />
    <FolderTree.TreeItem
      text="projects_2023.txt"
      icon={<IconDocuments />}
      key="c"
      isSelected={selectedKey === 'c'}
      onClick={() => {setSelectedKey('c')}}
    />
    <FolderTree.TreeItem
      text="Projects"
      key="d"
      isSelected={selectedKey === 'd'}
      onClick={() => {setSelectedKey('d')}}
      subtreeItems={[
        (<FolderTree.TreeItem
          text="project_data1.txt"
          icon={<IconDocuments />}
          key="e"
          isSelected={selectedKey === 'e'}
          onClick={() => {setSelectedKey('e')}}
        />),
        (<FolderTree.TreeItem
          text="project_data2.txt"
          icon={<IconDocuments />}
          key="f"
          isSelected={selectedKey === 'f'}
          onClick={() => {setSelectedKey('f')}}
          />),
        (<FolderTree.TreeItem
          text="Tests"
          key="g"
          isSelected={selectedKey === 'g'}
          onClick={() => {setSelectedKey('g')}}
          icon={<IconDocuments />}
          subtreeItems={[
            (<FolderTree.TreeItem
              text="test1.txt"
              icon={<IconDocuments />}
              key="h"
              isSelected={selectedKey === 'h'}
              onClick={() => {setSelectedKey('h')}}
              isDisabled
            />),
            (<FolderTree.TreeItem
              text="test2.txt"
              icon={<IconDocuments />}
              key="i"
              isSelected={selectedKey === 'i'}
              onClick={() => {setSelectedKey('i')}}
            />),
          ]}
        />),
      ]}
    />
  </FolderTree>
);}

export default BasicFolderTree;
