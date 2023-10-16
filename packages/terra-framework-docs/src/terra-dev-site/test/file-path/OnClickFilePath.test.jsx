/* eslint-disable react/forbid-dom-props */
import React, { useState } from 'react';
import FilePath from 'terra-file-path';

const DefaultFilePath = () => {
  const [displayText, setDisplayText] = useState('Nothing');

  const handleOnClick = (text) => () => {
    setDisplayText(text);
  };

  const items = [
    {
      key: 'link-0',
      text: 'Link 0',
      onClick: handleOnClick('Link 0'),
    },
    {
      key: 'link-1',
      text: 'Link 1',
      onClick: handleOnClick('Link 1'),
    },
    {
      key: 'link-2',
      text: 'Link 2',
      onClick: handleOnClick('Link 2'),
    },
    {
      key: 'link-3',
      text: 'Link 3',
      onClick: handleOnClick('Link 3'),
    },
    {
      key: 'link-4',
      text: 'Link 4',
      onClick: handleOnClick('Link 4'),
    },
    {
      key: 'link-5',
      text: 'Link 5',
      onClick: handleOnClick('Link 5'),
    },
    {
      key: 'link-6',
      text: 'Link 6',
      onClick: handleOnClick('Link 6'),
    },
    {
      key: 'link-7',
      text: 'Link 7',
      onClick: handleOnClick('Link 7'),
    },
    {
      key: 'link-8',
      text: 'Link 8',
      onClick: handleOnClick('Link 8'),
    },
    {
      key: 'link-9',
      text: 'Link 9',
      onClick: handleOnClick('Link 9'),
    },
    {
      key: 'link-10',
      text: 'Link 10',
      onClick: handleOnClick('Link 10'),
    },
    {
      key: 'link-11',
      text: 'Link 11',
      onClick: handleOnClick('Link 11'),
    },
    {
      key: 'link-12',
      text: 'Link 12',
      onClick: handleOnClick('Link 12'),
    },
  ];

  return (
    <>
      <FilePath items={items} />
      <h1 style={{ textAlign: 'right' }}>{`${displayText} clicked!`}</h1>
    </>
  );
};

export default DefaultFilePath;
