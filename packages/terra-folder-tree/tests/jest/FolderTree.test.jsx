import React from 'react';
import ActionHeader from 'terra-action-header';

import FolderTree from '../../src/FolderTree';

describe('basic folder tree', () => {
  it('renders a folder tree with one level of children and no subfolders', () => {
    const wrapper = shallow(
      <FolderTree title="Documents">
        <FolderTree.Item label="Cat" />
        <FolderTree.Item label="Dog" />
        <FolderTree.Item label="Rabbit" />
      </FolderTree>,
    );

    expect(wrapper.find(ActionHeader).length).toBe(1);
    expect(wrapper.find(ActionHeader).prop('text')).toBe('Documents');

    expect(wrapper.find(FolderTree.Item).length).toBe(3);
    expect(wrapper.find(FolderTree.Item).at(0).prop('label')).toBe('Cat');
    expect(wrapper.find(FolderTree.Item).at(0).prop('level')).toBe(0);
    expect(wrapper.find(FolderTree.Item).at(1).prop('label')).toBe('Dog');
    expect(wrapper.find(FolderTree.Item).at(1).prop('level')).toBe(0);
    expect(wrapper.find(FolderTree.Item).at(2).prop('label')).toBe('Rabbit');
    expect(wrapper.find(FolderTree.Item).at(2).prop('level')).toBe(0);
  });

  it('renders a folder tree with subfolders', () => {
    const wrapper = shallow(
      <FolderTree title="Documents">
        <FolderTree.Item
          label="Animals"
          subfolderItems={[
            (<FolderTree.Item label="Dog" />),
          ]}
        />
      </FolderTree>,
    );

    const firstSubfolder = wrapper.find(FolderTree.Item);
    expect(firstSubfolder.prop('label')).toBe('Animals');
    expect(firstSubfolder.prop('level')).toBe(0);

    const secondSubfolder = wrapper.find(FolderTree.Item).dive();
    expect(secondSubfolder.find(FolderTree.Item).length).toBe(1);
    expect(secondSubfolder.find(FolderTree.Item).prop('label')).toBe('Dog');
    expect(secondSubfolder.find(FolderTree.Item).prop('level')).toBe(1);
  });

  it('renders a folder tree item with subitems', () => {
    const wrapper = shallow(
      <FolderTree.Item
        subfolderItems={[
          (<FolderTree.Item />),
          (<FolderTree.Item />),
          (<FolderTree.Item />),
        ]}
      />,
    );

    expect(wrapper.find(FolderTree.Item).length).toBe(3);
  });
});
