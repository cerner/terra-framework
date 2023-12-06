import React from 'react';
import ActionHeader from 'terra-action-header';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import FolderTree from '../../src/FolderTree';
import FolderTreeItem from '../../src/subcomponents/FolderTreeItem';

describe('basic folder tree', () => {
  it('renders a folder tree with one level of children and no subfolders', () => {
    const wrapper = shallowWithIntl(
      <FolderTree title="Documents">
        <FolderTreeItem label="Cat" />
        <FolderTreeItem label="Dog" />
        <FolderTreeItem label="Rabbit" />
      </FolderTree>,
    );

    expect(wrapper.find(ActionHeader).length).toBe(1);
    expect(wrapper.find(ActionHeader).prop('text')).toBe('Documents');

    expect(wrapper.find(FolderTreeItem).length).toBe(3);
    expect(wrapper.find(FolderTreeItem).at(0).prop('label')).toBe('Cat');
    expect(wrapper.find(FolderTreeItem).at(0).dive().prop('level')).toBe(0);
    expect(wrapper.find(FolderTreeItem).at(1).prop('label')).toBe('Dog');
    expect(wrapper.find(FolderTreeItem).at(1).dive().prop('level')).toBe(0);
    expect(wrapper.find(FolderTreeItem).at(2).prop('label')).toBe('Rabbit');
    expect(wrapper.find(FolderTreeItem).at(2).dive().prop('level')).toBe(0);
  });

  it('renders a folder tree item with subitems', () => {
    const wrapper = mountWithIntl(
      <FolderTreeItem
        subfolderItems={[
          (<FolderTreeItem label="item 1" />),
          (<FolderTreeItem label="item 2" />),
          (<FolderTreeItem label="item 3" />),
        ]}
      />,
    );

    const subfolder = wrapper.find('.subfolder');

    expect(subfolder.find('span.fill.fill-block').length).toBe(3);
    expect(subfolder.find('span.fill.fill-block').at(0).text()).toBe('item 1');
    expect(subfolder.find('span.fill.fill-block').at(1).text()).toBe('item 2');
    expect(subfolder.find('span.fill.fill-block').at(2).text()).toBe('item 3');
  });

  it('hides folder items when enclosing folder is collapsed', () => {
    const wrapper = shallowWithIntl(
      <FolderTree title="Documents">
        <FolderTreeItem
          label="Animals"
          subfolderItems={[
            (<FolderTreeItem label="Dog" />),
          ]}
        />
      </FolderTree>,
    );

    const collapsedFolder = wrapper.find(FolderTreeItem).dive().dive();

    expect(collapsedFolder.find('.folder-tree-item').prop('aria-expanded')).toBe(false);
    expect(collapsedFolder.find('.subfolder').prop('hidden')).toBe(true);
  });

  it('shows folder items when enclosing folder is expanded', () => {
    const wrapper = shallowWithIntl(
      <FolderTree title="Documents">
        <FolderTreeItem
          label="Animals"
          isExpanded
          subfolderItems={[
            (<FolderTreeItem label="Dog" />),
          ]}
        />
      </FolderTree>,
    );

    const expandedFolder = wrapper.find(FolderTreeItem).dive().dive();

    expect(expandedFolder.find('.folder-tree-item').prop('aria-expanded')).toBe(true);
    expect(expandedFolder.find('.subfolder').prop('hidden')).toBe(false);
  });

  it('does not trigger expand/collapse on folder selection', () => {
    const onClick = jest.fn();
    const onToggle = jest.fn();

    const wrapper = shallowWithIntl(
      <FolderTreeItem
        label="Animals"
        onClick={onClick}
        onToggle={onToggle}
        subfolderItems={[
          (<FolderTreeItem label="Dog" />),
        ]}
      />,
    ).dive();

    const radioButton = wrapper.find('.radio');
    radioButton.simulate('click', { stopPropagation: () => {} });

    expect(onClick).toHaveBeenCalled();
    expect(onToggle).not.toHaveBeenCalled();
  });
});
