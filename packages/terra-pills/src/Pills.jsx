import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import Pill from './Private/_Pill';
import styles from './Private/Pill.module.scss';
import RollUpPill from './Private/_RollupPill';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * A collection of pills  to render within the Pills container body.
   */
  children: PropTypes.node,
  /**
   * Callback function to remove a pill, return pillKey, metadata
   */
  onRemove: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const Pills = (props) => {
  const {
    children,
    onRemove,
    intl,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);

  const handleOnRemove = (pillKey, metaData) => {
    if (onRemove) {
      onRemove(pillKey, metaData);
    }
  };

  const pillListClassNames = classNames(
    cx([
      'pill-list',
      theme.className,
    ]),
    customProps.className,
  );

  const renderChildren = (items) => React.Children.map(items, (pill) => React.cloneElement(pill, { onRemove: handleOnRemove, isSelectable: true }));

  return (
    <div
      {...customProps}
      className={pillListClassNames}
      tabIndex="-1"
    >
      {children ? renderChildren(children) : []}
      <RollUpPill pillCount={children.length} />
    </div>
  );
};

Pills.Pill = Pill;
Pills.propTypes = propTypes;

export default injectIntl(Pills);
