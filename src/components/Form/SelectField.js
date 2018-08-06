import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const SelectField = props => console.log('props', props) || (
  <div>
    <Select defaultValue={props.options[0]} style={{ width: 120 }}>
      {props.options.map(option => (
        <Option key={option} value={option}>{option}</Option>
      ))}
    </Select>
  </div>
);

export default SelectField;
