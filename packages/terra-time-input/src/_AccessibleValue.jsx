import React, { useEffect, useState } from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const defaultProps = {
  value: undefined,
};

function AccessibleValue(props) {
  const [role, setRole] = useState('generic');
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    if (!props.value) {
      setRole('generic');
    } else if (props.value !== value) {
      setRole('status');
      setValue(props.value);
    }
  }, [props.value, value]);

  return (
    <VisuallyHiddenText
      id={props.id}
      text={props.value}
      role={role}
    />
  );
}

AccessibleValue.propTypes = propTypes;
AccessibleValue.defaultProps = defaultProps;

export default AccessibleValue;
