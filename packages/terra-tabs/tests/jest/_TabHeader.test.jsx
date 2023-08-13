/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mountWithIntl } from 'terra-enzyme-intl';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TabHeader from '../../src/common-tabs/_TabHeader';

describe('TabHeader', () => {
  test('should render a heading with provided title', () => {
    render((
      <TabHeader title="Test Title" />
    ));

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveAttribute('aria-level', '2');
    expect(screen.getByRole('heading')).toHaveAttribute('tabIndex', '-1');
    expect(screen.getByRole('heading')).toHaveTextContent('Test Title');

    expect(screen.getByText('Test Title', { selector: 'div' })).toHaveAttribute('aria-hidden', 'true');

    const wrapper = mountWithIntl(<TabHeader title="Test Title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
