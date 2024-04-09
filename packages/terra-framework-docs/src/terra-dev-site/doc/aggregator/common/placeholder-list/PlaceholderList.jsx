import React from 'react';
import './PlaceholderList.module.scss';
/* eslint-disable */
const List = ({ children, isPadded }) => (
  <ul aria-label="Placeholder List" role="tablist" className={isPadded ? 'placeholder-list is-padded' : 'placeholder-list '}>
    {children}
  </ul>
);

export default List;
