import React from 'react';

import UserData from '../../src/user/_UserData';

describe('UserData', () => {
  it('should render prop data', () => {
    const testUserData = (
      <UserData
        userName="Test, Person"
        userDetail="Detail For Test"
        userPhoto={<div>Test Photo</div>}
      />
    );

    const result = shallow(testUserData);

    expect(result).toMatchSnapshot();
  });

  it('should render empty component', () => {
    const testUserData = (
      <UserData />
    );

    const result = shallow(testUserData);

    expect(result).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const testUserData = mount(<UserData
      userName="Test, Person"
      userDetail="Detail For Test"
      userPhoto={<div>Test Photo</div>}
    />);
    expect(testUserData).toMatchSnapshot();
  });
});
