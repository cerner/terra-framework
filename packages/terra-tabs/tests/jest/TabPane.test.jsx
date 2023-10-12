import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowWithIntl } from 'terra-enzyme-intl';
import Pane from '../../src/TabPane';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('TabPane', () => {
  it('should render a default component with label', () => {
    const wrapper = shallowWithIntl(<Pane label="Default" />).dive().dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon and label', () => {
    const wrapper = shallowWithIntl(<Pane label="Label" icon={<div>Fake icon</div>} />).dive().dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon only when indicated', () => {
    const wrapper = shallowWithIntl(<Pane label="Label" icon={<div>Fake icon</div>} isIconOnly />).dive().dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a custom display when provided', () => {
    const wrapper = shallowWithIntl(<Pane label="Label" customDisplay={<div>Custom Display</div>} />).dive().dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = shallowWithIntl(<Pane label="Default" className="customClass" />).dive().dive();
    expect(wrapper).toMatchSnapshot();
  });
});
