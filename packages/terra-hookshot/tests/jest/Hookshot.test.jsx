import React from 'react';
import HookshotDefaultExample from './HookshotDefaultExample';
import {
  getBoundedPositions,
} from '../../src/_HookshotUtils';

// Snapshot Tests
it('should shallow a default component', () => {
  const hookshot = enzyme.shallow(<HookshotDefaultExample />);
  expect(hookshot).toMatchSnapshot();
});

it('should render a default component', () => {
  const hookshot = render(<HookshotDefaultExample />);
  expect(hookshot).toMatchSnapshot();
});

describe('HookshotUtils', () => {
  it('getBoundedPositions return correct values', () => {
    const boundingRect = {
      top: 0, bottom: 639, left: 0, right: 1680,
    };
    const positions = {
      content: {
        attachment: { vertical: 'top', horizontal: 'center' },
        offset: { horizontal: 0, vertical: 0 },
        rect: {
          bottom: 599, height: 40, left: 0, right: 1480, top: 0, width: 200,
        },
        x: 324.5,
        y: 451,
      },
      target: {
        attachment: { vertical: 'bottom', horizontal: 'center' },
        offset: { horizontal: 0, vertical: 0 },
        rect: {
          bottom: 188, height: 30, left: 354, right: 1186, top: 421, width: 141,
        },
        x: 424.5,
        y: 451,
      },
    };
    const result = getBoundedPositions(positions, boundingRect);
    expect(result.content.attachment).toEqual({ vertical: 'top', horizontal: 'center' });
    expect(result.content.offset).toEqual({ horizontal: 0, vertical: 0 });
  });
});
