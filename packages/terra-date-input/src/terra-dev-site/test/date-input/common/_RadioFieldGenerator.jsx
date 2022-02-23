import React from 'react';
import Radio from 'terra-form-radio';
import RadioField from 'terra-form-radio/lib/RadioField';
import PropTypes from 'prop-types';

const propTypes = {
  // The text of the legend tag.
  fieldLegend: PropTypes.string,
  // The name of every Radio
  name: PropTypes.string,
  // A list of strings to serve as the key, id, labelText, and value of every Radio.
  options: PropTypes.array,
  // The change event callback for every radio.
  onChange: PropTypes.func,
};

/**
 * Use this generator to pump out tedious RadioField + Radios.
 * @returns A <RadioField>.
 */
function RadioFieldGenerator(props) {
  return (
    <RadioField legend={props.fieldLegend}>
      {props.options.map((opt, index) => (
        <Radio
          // https://reactjs.org/docs/lists-and-keys.html#keys
          key={opt}
          name={props.name}
          id={opt}
          defaultChecked={index === 0}
          labelText={opt}
          value={opt}
          onChange={props.onChange}
        />
      ))}
    </RadioField>
  );
}

RadioFieldGenerator.propTypes = propTypes;

export default RadioFieldGenerator;
