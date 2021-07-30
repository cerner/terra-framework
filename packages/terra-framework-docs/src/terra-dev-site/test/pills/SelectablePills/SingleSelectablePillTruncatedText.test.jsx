import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import { SelectablePills } from 'terra-pills/lib/index';

const SingleSelectablePillTruncatedText = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pillRef = useRef();

  const setPillNode = (node) => {
    pillRef.current = node;
  };

  const getPillNode = () => pillRef.current;

  const handleOnSelect = () => {
    setIsOpen(true);
  };

  const handleOnRequestClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SelectablePills
        ariaLabel="Example of a Selectable Pill with long text"
        onSelect={handleOnSelect}
      >
        <SelectablePills.Pill
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu malesuada odio. Nulla id lacus vitae dui fermentum elementum ut vel velit. Integer interdum mauris erat, sit amet venenatis mi feugiat interdum. Suspendisse nibh augue, congue eu cursus id, finibus ac lorem"
          id="selectable-long-text"
          key="selectable-long-text"
          refCallback={setPillNode}
        />
      </SelectablePills>
      <Popup
        isOpen={isOpen}
        isArrowDisplayed
        targetRef={getPillNode}
        onRequestClose={handleOnRequestClose}
        contentHeight="40"
        contentWidth="240"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu malesuada odio. Nulla id lacus vitae dui fermentum elementum ut vel velit. Integer interdum mauris erat, sit amet venenatis mi feugiat interdum. Suspendisse nibh augue, congue eu cursus id, finibus ac lorem </p>
      </Popup>
    </>
  );
};

export default SingleSelectablePillTruncatedText;
