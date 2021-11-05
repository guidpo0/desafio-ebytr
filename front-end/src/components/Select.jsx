import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

function Select({ config }) {
  const {
    htmlFor,
    labelText,
    setSelectedValue,
    selectedValue,
    data,
  } = config;
  return (
    <label className="select-container" htmlFor={htmlFor}>
      <p>{labelText}</p>
      <select
        id={htmlFor}
        value={selectedValue}
        onChange={({ target: { value } }) => setSelectedValue(Number(value))}
      >
        {data.map(({ id, name }) => (
          <option key={name + id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  config: PropTypes.shape({
    htmlFor: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    setSelectedValue: PropTypes.func.isRequired,
    selectedValue: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Select;
