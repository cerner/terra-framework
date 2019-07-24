
/* eslint-disable */
import React, {
  useState,
} from 'react';
import classNames from 'classnames/bind';
import styles from './ExampleWrapper.module.scss';

const cx = classNames.bind(styles);

const ExampleApplication = ({ children }) => {
  const [lastActionKey, setLastActionKey] = useState(null);

  function handleOnAction(key) {
    setLastActionKey(`Current Action: ${key}`);
  }

  return (
    <div>
      {lastActionKey}
      <div className={cx('wrapper')}>
        {React.Children.map(children, child => React.cloneElement(child, { onAction: handleOnAction }))}
      </div>
    </div>
  );
};

export default ExampleApplication;
