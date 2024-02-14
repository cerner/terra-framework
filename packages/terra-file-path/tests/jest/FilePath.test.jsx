import React from 'react';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import FilePath from '../../src/FilePath';

const defaultItems = [{
  key: 'oracle',
  text: 'Oracle',
  href: 'https://oracle.com',
},
{
  key: 'cerner',
  text: 'Cerner',
  href: 'https://cerner.com',
},
{
  key: 'google',
  text: 'Google',
  href: 'https://google.com',
}];

const handleOnClickOracle = jest.fn();
const handleOnClickCerner = jest.fn();
const onClickItems = [{
  key: 'oracle',
  text: 'Oracle',
  onClick: handleOnClickOracle,
},
{
  key: 'cerner',
  text: 'Cerner',
  onClick: handleOnClickCerner,
},
{
  key: 'google',
  text: 'Google',
}];

describe('Default File Path', () => {
  it('should render a default component', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<FilePath items={defaultItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the right href per hyperlink', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<FilePath items={defaultItems} />).dive();
    expect(wrapper.find(CollapsibleMenuView.Hyperlink).length).toBe(2);
    expect(wrapper.find(CollapsibleMenuView.Hyperlink).first().prop('href')).toBe('https://oracle.com');
    expect(wrapper.find(CollapsibleMenuView.Hyperlink).at(1).prop('href')).toBe('https://cerner.com');
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render the last item as a hyperlink', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<FilePath items={defaultItems} />).dive();
    expect(wrapper.find(CollapsibleMenuView.Item).length).toBe(1);
    expect(wrapper.find(CollapsibleMenuView.Item).first().prop('text')).toBe('Google');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('On Click File Path', () => {
  it('should render a component with on clickable items', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<FilePath items={onClickItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger the correct on click per item', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<FilePath items={onClickItems} />).dive();
    expect(wrapper.find(CollapsibleMenuView.Hyperlink).length).toBe(2);

    wrapper.find(CollapsibleMenuView.Hyperlink).first().simulate('click');
    expect(handleOnClickOracle).toHaveBeenCalled();

    wrapper.find(CollapsibleMenuView.Hyperlink).at(1).simulate('click');
    expect(handleOnClickCerner).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
