import React from 'react';
import ActionHeader from 'terra-action-header';
import Button from 'terra-button';
import FolderTree from '../../src';

describe('basic folder tree', () => {
  it('renders a folder tree with one level of children and no subfolders', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <FolderTree title="Documents">
        <FolderTree.Item label="Cat" />
        <FolderTree.Item label="Dog" />
        <FolderTree.Item label="Rabbit" />
      </FolderTree>,
    ).dive();

    expect(wrapper.find(ActionHeader).length).toBe(1);
    expect(wrapper.find(ActionHeader).prop('text')).toBe('Documents');

    expect(wrapper.find(FolderTree.Item).length).toBe(3);
    expect(wrapper.find(FolderTree.Item).at(0).prop('label')).toBe('Cat');
    expect(wrapper.find(FolderTree.Item).at(0).dive().prop('level')).toBe(0);
    expect(wrapper.find(FolderTree.Item).at(1).prop('label')).toBe('Dog');
    expect(wrapper.find(FolderTree.Item).at(1).dive().prop('level')).toBe(0);
    expect(wrapper.find(FolderTree.Item).at(2).prop('label')).toBe('Rabbit');
    expect(wrapper.find(FolderTree.Item).at(2).dive().prop('level')).toBe(0);
  });

  it('renders a folder tree item with subitems', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FolderTree.Item
        label="parent folder tree item"
        subfolderItems={[
          (<FolderTree.Item label="item 1" />),
          (<FolderTree.Item label="item 2" />),
          (<FolderTree.Item label="item 3" />),
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
    const wrapper = enzymeIntl.shallowWithIntl(
      <FolderTree title="Documents">
        <FolderTree.Item
          label="Animals"
          subfolderItems={[
            (<FolderTree.Item label="Dog" />),
          ]}
        />
      </FolderTree>,
    );

    const collapsedFolder = wrapper.find(FolderTree.Item).dive().dive();

    expect(collapsedFolder.find('.folder-tree-item').prop('aria-expanded')).toBe(false);
    expect(collapsedFolder.find('.subfolder').prop('hidden')).toBe(true);
  });

  it('shows folder items when enclosing folder is expanded', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <FolderTree title="Documents">
        <FolderTree.Item
          label="Animals"
          isExpanded
          subfolderItems={[
            (<FolderTree.Item label="Dog" />),
          ]}
        />
      </FolderTree>,
    );

    const expandedFolder = wrapper.find(FolderTree.Item).dive().dive();

    expect(expandedFolder.find('.folder-tree-item').prop('aria-expanded')).toBe(true);
    expect(expandedFolder.find('.subfolder').prop('hidden')).toBe(false);
  });

  it('does not trigger expand/collapse on folder selection', () => {
    const onSelect = jest.fn();
    const onToggle = jest.fn();

    const wrapper = enzymeIntl.shallowWithIntl(
      <FolderTree.Item
        label="Animals"
        onSelect={onSelect}
        onToggle={onToggle}
        subfolderItems={[
          (<FolderTree.Item label="Dog" />),
        ]}
      />,
    ).dive();

    const radioButton = wrapper.find('.radio');
    radioButton.simulate('change');

    expect(onSelect).toHaveBeenCalled();
    expect(onToggle).not.toHaveBeenCalled();
  });

  it('triggers the onExpandAll callback', () => {
    const onExpandAll = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <FolderTree
        title="Documents"
        onExpandAll={onExpandAll}
      >
        <FolderTree.Item
          label="Animals"
          subfolderItems={[
            (<FolderTree.Item label="Dog" />),
          ]}
        />
      </FolderTree>,
    );

    const expandAllButton = wrapper.find(Button).at(0);

    expandAllButton.simulate('click');
    expect(onExpandAll).toHaveBeenCalled();
  });

  it('triggers the onCollapseAll callback', () => {
    const onCollapseAll = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <FolderTree
        title="Documents"
        onCollapseAll={onCollapseAll}
      >
        <FolderTree.Item
          label="Animals"
          subfolderItems={[
            (<FolderTree.Item label="Dog" />),
          ]}
        />
      </FolderTree>,
    );

    const collapseAllButton = wrapper.find(Button).at(1);

    collapseAllButton.simulate('click');
    expect(onCollapseAll).toHaveBeenCalled();
  });

  it('renders selectable folder tree items', () => {
    const wrapper = shallowWithIntl(
      <FolderTree.Item
        label="Selectable folder tree item"
      />,
    ).dive();

    expect(wrapper.find('li').prop('aria-selected')).toBe(false);
    expect(wrapper.exists('input[type="radio"]')).toBe(true);
  });

  it('renders selectable folder tree items when selected', () => {
    const wrapper = shallowWithIntl(
      <FolderTree.Item
        label="Selectable folder tree item"
        isSelected
      />,
    ).dive();

    expect(wrapper.find('li').prop('aria-selected')).toBe(true);
    expect(wrapper.find('li').hasClass('selected')).toBe(true);
  });

  it('renders non-selectable folder tree items', () => {
    const wrapper = shallowWithIntl(
      <FolderTree.Item
        label="Non-selectable folder tree item"
        isSelectable={false}
      />,
    ).dive();

    expect(wrapper.find('li').prop('aria-selected')).toBe(null);
    expect(wrapper.exists('input[type="radio"]')).toBe(false);
  });

  it('renders non-selectable folder tree items when selected', () => {
    const wrapper = shallowWithIntl(
      <FolderTree.Item
        label="Non-selectable folder tree item"
        isSelectable={false}
        isSelected
      />,
    ).dive();

    expect(wrapper.find('li').prop('aria-selected')).toBe(null);
    expect(wrapper.find('li').hasClass('selected')).toBe(false);
  });
});
