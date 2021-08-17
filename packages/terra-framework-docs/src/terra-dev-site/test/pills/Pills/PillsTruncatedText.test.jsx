import React from 'react';
import classNames from 'classnames/bind';
import Pills from '@cerner/terra-pills/lib/index';
import styles from '../PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const BasicPillWithTruncation = () => {
  const pillsData = [
    {
      label: 'Small Label',
      id: 'long-text-pill-example-6',
    },
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis libero dolor. Sed ullamcorper ante orci, a feugiat odio laoreet quis. Integer at felis sit amet dui luctus faucibus',
      id: 'long-text-pill-example-1',
    },
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis libero dolor. Sed ullamcorper ante orci, a feugiat odio laoreet quis. Integer at felis sit amet dui luctus faucibus',
      id: 'long-text-pill-example-2',
    },
    {
      label: 'Small Label',
      id: 'long-text-pill-example-3',
    },
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis libero dolor. Sed ullamcorper ante orci, a feugiat odio laoreet quis. Integer at felis sit amet dui luctus faucibus',
      id: 'long-text-pill-example-4',
    },
    {
      label: 'Small Label',
      id: 'long-text-pill-example-5',
    },
  ];
  const pills = (pillsData);

  return (
    <>
      <Pills
        ariaLabel="Example of Basic pills with long text"
        className={cx(['container', 'show-border', 'width-200'])}
      >
        {pills.map((pill, index) => (
          <Pills.Pill
            key={pill.id}
            label={pill.label}
            id={pill.id}
            pillKey={pill.label}
            metaData={{ index }}
          />
        ))}
      </Pills>
    </>
  );
};

export default BasicPillWithTruncation;
