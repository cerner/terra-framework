import React from 'react';
import ActionHeader from 'terra-action-header';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import FolderTree from '../../src/FolderTree';

describe('basic folder tree', () => {
  it('renders a folder tree with one level of children and no subfolders', () => {
    const wrapper = shallowWithIntl(
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
    // TODO: Fix these tests
    // expect(wrapper.find(FolderTree.Item).at(0).prop('level')).toBe(0);
    expect(wrapper.find(FolderTree.Item).at(1).prop('label')).toBe('Dog');
    // expect(wrapper.find(FolderTree.Item).at(1).prop('level')).toBe(0);
    expect(wrapper.find(FolderTree.Item).at(2).prop('label')).toBe('Rabbit');
    // expect(wrapper.find(FolderTree.Item).at(2).prop('level')).toBe(0);
  });

  it('renders a folder tree with subfolders', () => {
    const wrapper = shallowWithIntl(
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
    // TODO: Fix these tests
    // expect(firstSubfolder.prop('level')).toBe(0);
    // const secondSubfolder = wrapper.find(FolderTree.Item).dive();
    // expect(secondSubfolder.find(FolderTree.Item).length).toBe(1);
    // expect(secondSubfolder.find(FolderTree.Item).prop('label')).toBe('Dog');
    // expect(secondSubfolder.find(FolderTree.Item).prop('level')).toBe(1);
  });

  // TODO: Fix these tests
  // it('renders a folder tree item with subitems', () => {
  //   const wrapper = shallowWithIntl(
  //       <FolderTree.Item
  //         label="Animals"
  //         subfolderItems={[
  //           (<FolderTree.Item label="Dog"/>),
  //           (<FolderTree.Item label="Cat"/>),
  //           (<FolderTree.Item label="Rabbit"/>),
  //         ]}
  //       />,
  //   );
  //  expect(wrapper.find(FolderTree.Item).length).toBe(3);
  // });
});
