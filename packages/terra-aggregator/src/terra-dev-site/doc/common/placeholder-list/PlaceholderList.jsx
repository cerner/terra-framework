import React from 'react';
import './PlaceholderList.module.scss';
/* eslint-disable */
const List = ({ children, isPadded }) => (
  <ul role="listbox" className={isPadded ? 'placeholder-list is-padded' : 'placeholder-list '}>
    {children}
  </ul>
);

export default List;
