import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl } from 'terra-enzyme-intl';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../../src/Menu';
import DefaultMenu from './DefaultMenuExample';

describe('Menu', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = enzyme.shallow(<DefaultMenu />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const tabs = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Menu
          isOpen
          targetRef={jest.fn()}
          onRequestClose={jest.fn()}
        >
          <Menu.Item key="abc" text="testing" />
        </Menu>
      </ThemeContextProvider>,
    );
    expect(tabs).toMatchSnapshot();
  });
});
