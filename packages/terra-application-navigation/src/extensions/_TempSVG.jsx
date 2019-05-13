/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M44.4,37.1l-18.7,9.6c-1.1,0.6-2.5,0.6-3.6,0L1.8,36.2c-0.6-0.3-0.8-1-0.5-1.6c0.1-0.2,0.3-0.4,0.5-0.5l6.4-3.2l12.5,6.5 c2,1,4.4,1,6.4,0L39.6,31l4.9,2.6c1,0.5,1.4,1.7,0.8,2.7C45.1,36.6,44.8,36.9,44.4,37.1z M44.5,21.6l-3.9-2l-13.4,6.9 c-2,1-4.4,1-6.4,0l-13.5-7l-5.4,2.7c-0.6,0.3-0.8,1-0.5,1.6c0.1,0.2,0.3,0.4,0.5,0.5l20.3,10.6c1.1,0.6,2.5,0.6,3.6,0l18.7-9.6 c1-0.5,1.4-1.7,0.9-2.7C45.1,22.1,44.8,21.8,44.5,21.6z M25.8,23.8l18.7-9.6c1-0.5,1.4-1.7,0.9-2.7c-0.2-0.4-0.5-0.7-0.9-0.9L26,0.9 c-1.1-0.6-2.4-0.6-3.6,0L1.8,11.1c-0.6,0.3-0.8,1-0.5,1.6c0.1,0.2,0.3,0.4,0.5,0.5l20.3,10.6C23.3,24.3,24.6,24.3,25.8,23.8 L25.8,23.8z"></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCaretDown";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
