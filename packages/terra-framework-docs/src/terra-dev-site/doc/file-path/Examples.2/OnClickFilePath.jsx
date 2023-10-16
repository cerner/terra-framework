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
      key: 'home',
      text: 'Home',
      onClick: handleOnClick('Home'),
    },
    {
      key: 'level-1',
      text: 'Level 1',
      onClick: handleOnClick('Level 1'),
    },
    {
      key: 'level-2',
      text: 'Level 2',
      onClick: handleOnClick('Level 2'),
    },
    {
      key: 'level-3',
      text: 'Level 3',
      onClick: handleOnClick('Level 3'),
    },
    {
      key: 'level-4',
      text: 'Level 4',
      onClick: handleOnClick('Level 4'),
    },
    {
      key: 'level-5',
      text: 'Level 5',
      onClick: handleOnClick('Level 5'),
    },
    {
      key: 'level-6',
      text: 'Level 6',
      onClick: handleOnClick('Level 6'),
    },
    {
      key: 'level-7',
      text: 'Level 7',
      onClick: handleOnClick('Level 7'),
    },
    {
      key: 'level-8',
      text: 'Level 8',
      onClick: handleOnClick('Level 8'),
    },
    {
      key: 'level-9',
      text: 'Level 9',
      onClick: handleOnClick('Level 9'),
    },
    {
      key: 'level-10',
      text: 'Level 10',
      onClick: handleOnClick('Level 10'),
    },
    {
      key: 'level-11',
      text: 'Level 11',
      onClick: handleOnClick('Level 11'),
    },
    {
      key: 'level-12',
      text: 'Level 12',
      onClick: handleOnClick('Level 12'),
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
