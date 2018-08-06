import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectField = ({ options, input }) => (
  <div>
    <Select style={{ width: 220 }} onChange={input.onChange}>
      {options.map(option => (
        <Option key={option.key} value={option.key}>{option.displayName}</Option>
      ))}
    </Select>
  </div>
);

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    displayName: PropTypes.string,
  })).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default SelectField;
