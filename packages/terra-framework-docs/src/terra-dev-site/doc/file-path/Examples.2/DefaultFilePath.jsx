import React from 'react';
import FilePath from 'terra-file-path';

const items = [
  {
    key: 'home',
    text: 'Home',
    href: 'https://oracle.com',
  },
  {
    key: 'level-1',
    text: 'Level 1',
    href: 'https://oracle.com',
  },
  {
    key: 'level-2',
    text: 'Level 2',
    href: 'https://oracle.com',
  },
  {
    key: 'level-3',
    text: 'Level 3',
    href: 'https://oracle.com',
  },
  {
    key: 'level-4',
    text: 'Level 4',
    href: 'https://oracle.com',
  },
  {
    key: 'level-5',
    text: 'Level 5',
    href: 'https://oracle.com',
  },
  {
    key: 'level-6',
    text: 'Level 6',
    href: 'https://oracle.com',
  },
  {
    key: 'level-7',
    text: 'Level 7',
    href: 'https://oracle.com',
  },
  {
    key: 'level-8',
    text: 'Level 8',
    href: 'https://oracle.com',
  },
  {
    key: 'level-9',
    text: 'Level 9',
    href: 'https://oracle.com',
  },
  {
    key: 'level-10',
    text: 'Level 10',
    href: 'https://oracle.com',
  },
  {
    key: 'level-11',
    text: 'Level 11',
    href: 'https://oracle.com',
  },
  {
    key: 'level-12',
    text: 'Level 12',
    href: 'https://oracle.com',
  },
];

const DefaultFilePath = () => (
  <FilePath items={items} />
);

export default DefaultFilePath;
