/* eslint-disable react/forbid-dom-props */
import React, { useState } from 'react';
import FilePath from 'terra-file-path';
import ActionHeader from 'terra-action-header';

const FilePathwithClinicalHeader = () => {
  const path = [
    {
      key: 'link-0',
      text: 'Link 0',
    },
    {
      key: 'link-1',
      text: 'Link 1',
    },
  ];

  const [items, setItems] = useState(path);

  const handleClick = () => {
    setItems([...items, { key: `link${items.length}`, text: `Link${items.length}` }]);
  };

  return (
    <>
      <button id="add-path" type="button" onClick={handleClick}>Click Me</button>
      <ActionHeader text={<FilePath items={items} />} />
    </>
  );
};

export default FilePathwithClinicalHeader;
