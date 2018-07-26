import React from 'react';
import { Input } from 'antd';

const InputField = field => (
  <div className="input-row">
    <Input
      {...field.input}
      type="text"
      disabled={field.disabled}
      style={{ width: '400px' }}
    />
    {field.meta.touched && field.meta.error
            && (
              <span className="error">
                {field.meta.error}
              </span>
            )}
  </div>
);

export default InputField;
