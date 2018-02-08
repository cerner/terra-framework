import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_UtilityMenuPage.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Object containing data for this specific page
   */
  pageData: PropTypes.shape({
    Title: PropTypes.string,
    Content: PropTypes.element,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  /**
   * Function to trigger when an item is selected
   */
  onChange: PropTypes.func.isRequired,
};

const UtilityMenuPage = ({
  pageData,
  onChange,
}) => {
  const pageClassNames = cx([
    'page',
  ]);

  return (
    <ul className={pageClassNames} >
      {pageData.children.map(child => (
        <li onClick={onChange(child.key)} >{child.title || child.content}</li>
      ))}
    </ul>
  );
};


UtilityMenuPage.propTypes = propTypes;

export default UtilityMenuPage;
