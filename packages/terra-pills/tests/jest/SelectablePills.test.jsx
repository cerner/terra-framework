import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl } from 'terra-enzyme-intl';
import { SelectablePills } from '../../src/index';

describe('Selectable Pill', () => {
  it('should render a selectable pill', () => {
    const wrapper = mountWithIntl(
      <SelectablePills
        ariaLabel="Example of a Selectable Pill"
        onSelect={() => jest.fn()}
      >
        <SelectablePills.Pill
          label="Selectable Pill"
          id="selectable-pill"
        />
      </SelectablePills>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a selectable pill with roll up', () => {
    const wrapper = mountWithIntl(
      <SelectablePills
        ariaLabel="Example of a Selectable Pill with roll up"
        onSelect={() => jest.fn()}
        isSingleLine
      >
        <SelectablePills.Pill
          label="Selectable Pill"
          id="selectable-pill"
        />
      </SelectablePills>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
