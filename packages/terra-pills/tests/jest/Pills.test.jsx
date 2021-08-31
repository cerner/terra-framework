import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl } from 'terra-enzyme-intl';
import Pills from '../../src/index';

describe('Pills', () => {
  it('should render a basic pill', () => {
    const wrapper = mountWithIntl(
      <Pills
        ariaLabel="Example of a Basic Pill"
      >
        <Pills.Pill
          label="Basic Pill"
          id="basic-pill"
        />
      </Pills>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a basic pill with roll up', () => {
    const wrapper = mountWithIntl(
      <Pills
        ariaLabel="Example of a basic Pill with roll up"
        isSingleLine
      >
        <Pills.Pill
          label="Basic Pill"
          id="basic-pill"
        />
      </Pills>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
