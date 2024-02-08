/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import MoreButton from '../../src/common-tabs/_MoreButton';

import * as TabUtils from '../../src/common-tabs/_TabUtils';

jest.mock('../../src/common-tabs/_TabUtils', () => ({
  handleMoreButtonArrows: jest.fn(),
}));

describe('MoreButton', () => {
  test('should render a more button with provided props', () => {
    const testTabIds = ['tab-1', 'tab-2', 'tab-3'];
    const wrapper = mountWithIntl(
      <IntlProvider>
        <MoreButton
          hiddenIndex={1}
          tabIds={testTabIds}
          zIndex={0}
        />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a more button with provided props and selection handling', () => {
    const mockOnSelect = jest.fn();
    const mockOnBlur = jest.fn();
    const testTabIds = ['tab-1', 'tab-2', 'tab-3'];

    render((
      <IntlProvider>
        <MoreButton
          hiddenIndex={1}
          onBlur={mockOnBlur}
          onSelect={mockOnSelect}
          tabIds={testTabIds}
          zIndex={0}
        />
      </IntlProvider>
    ));

    const buttonElement = screen.getByRole('button', { hidden: true });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ 'z-index': '0' });

    userEvent.click(buttonElement);

    expect(mockOnSelect).toHaveBeenCalled();
    mockOnSelect.mockClear();

    buttonElement.focus();
    userEvent.type(buttonElement, '{arrowright}', { skipClick: true });
    expect(mockOnSelect).not.toHaveBeenCalledWith();
    expect(TabUtils.handleMoreButtonArrows).toHaveBeenCalledWith(expect.anything(), 1, testTabIds);
    mockOnSelect.mockClear();

    buttonElement.blur();
    expect(mockOnBlur).toHaveBeenCalled();
  });

  test('should render a more button when active and open', () => {
    const mockOnSelect = jest.fn();
    const mockOnBlur = jest.fn();
    const testTabIds = ['tab-1', 'tab-2', 'tab-3'];

    render((
      <IntlProvider>
        <MoreButton
          hiddenIndex={1}
          onBlur={mockOnBlur}
          onSelect={mockOnSelect}
          tabIds={testTabIds}
          zIndex={0}
          isActive
          isOpen
        />
      </IntlProvider>
    ));

    const buttonElement = screen.getByRole('button', { hidden: true });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('is-active');
    expect(buttonElement).toHaveStyle({ 'z-index': '100' });

    userEvent.click(buttonElement);

    expect(mockOnSelect).toHaveBeenCalled();
    mockOnSelect.mockClear();

    buttonElement.focus();
    userEvent.type(buttonElement, '{arrowright}', { skipClick: true });
    expect(mockOnSelect).not.toHaveBeenCalledWith();
    expect(TabUtils.handleMoreButtonArrows).toHaveBeenCalledWith(expect.anything(), 1, testTabIds);
    mockOnSelect.mockClear();

    buttonElement.blur();
    expect(buttonElement).not.toHaveAttribute('tabindex');
    expect(mockOnBlur).toHaveBeenCalled();
  });

  test('should not blow up when onBlur is not provided', () => {
    const mockOnSelect = jest.fn();
    const testTabIds = ['tab-1', 'tab-2', 'tab-3'];

    render((
      <IntlProvider>
        <MoreButton
          hiddenIndex={1}
          onSelect={mockOnSelect}
          tabIds={testTabIds}
          zIndex={0}
        />
      </IntlProvider>
    ));

    const buttonElement = screen.getByRole('button', { hidden: true });
    expect(buttonElement).toBeInTheDocument();

    buttonElement.focus();
    buttonElement.blur();

    expect(buttonElement).not.toHaveAttribute('tabindex');
  });
});
