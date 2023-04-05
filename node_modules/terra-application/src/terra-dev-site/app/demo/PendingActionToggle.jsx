import React, { useState } from 'react';
import classNames from 'classnames/bind';
import NavigationPrompt from 'terra-application/lib/navigation-prompt';

import styles from './PendingActionToggle.module.scss';

const cx = classNames.bind(styles);

const PendingActionToggle = () => {
  const [hasPendingAction1, setHasPendingAction1] = useState(false);
  const [hasPendingAction2, setHasPendingAction2] = useState(false);

  return (
    <div>
      <h3>Unsaved Changes</h3>
      <p>This component uses a NavigationPrompt to register unsaved state with framework. Multiple NavigationPrompts can be rendered at the same time.</p>
      <p className={hasPendingAction1 ? cx('red-text') : null}>
        Pending Action 1:
        {' '}
        <button type="button" onClick={() => { setHasPendingAction1(!hasPendingAction1); }}>
          {hasPendingAction1 ? 'Disable' : 'Activate'}
        </button>
      </p>
      <p className={hasPendingAction2 ? cx('red-text') : null}>
        Pending Action 2:
        {' '}
        <button type="button" onClick={() => { setHasPendingAction2(!hasPendingAction2); }}>
          {hasPendingAction2 ? 'Disable' : 'Activate'}
        </button>
      </p>
      {hasPendingAction1 ? <NavigationPrompt description="Pending Action 1" /> : undefined}
      {hasPendingAction2 ? <NavigationPrompt description="Pending Action 2" /> : undefined}
    </div>
  );
};

export default PendingActionToggle;
