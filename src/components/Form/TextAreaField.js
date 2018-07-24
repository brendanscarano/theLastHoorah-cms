import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const TextAreaField = ({ field }) => console.log('field', field) || (
  <TextArea
    {...field.input}
    type="text"
    disabled={field.disabled}
    style={{ width: '400px' }}
  />
);

console.log('TextAreaField', TextAreaField);
export default TextAreaField;
