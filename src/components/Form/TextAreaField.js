import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const TextAreaField = field => (
  <TextArea
    {...field.input}
    type="text"
    disabled={field.disabled}
    style={{ width: '400px' }}
  />
);

export default TextAreaField;
