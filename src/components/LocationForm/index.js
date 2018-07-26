import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { Filters, FlexRow } from '..';
import { Button } from 'antd';

const FormRow = styled(FlexRow)`
  align-items: flex-start;
`;

const FieldWrapper = styled(FlexRow)`
  margin-bottom: 1.5rem;
  > label {
    margin-right: .5rem;
    width: 10.75rem;
    text-align: left;
  }
`;

const LocationForm = ({
  location, fields, handleSubmit, selectedFilters, buttonText,
}) => console.log('location', location) || (
  <form onSubmit={handleSubmit}>
    <div>
      {fields.map(({ key, isEditable, Component }) => (
        <FieldWrapper key={key}>
          <label id={key} htmlFor={key}>
            {key}
          </label>
          <div>
            <Field
              name={key}
              type="text"
              value={location[key]}
              label={key}
              component={field => <Component field={field} />}
              disabled={!isEditable}
              location={location}
            />
          </div>
        </FieldWrapper>
      ))}
    </div>

    <Filters selectedFilters={selectedFilters} />
    <div>
      <Button type="primary" htmlType="submit">{buttonText}</Button>
    </div>
  </form>
);

LocationForm.propTypes = {
  location: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    isEditable: PropTypes.bool,
    Component: PropTypes.element,
  })),
  handleSubmit: PropTypes.func.isRequired,
  selectedFilters: PropTypes.array,
  buttonText: PropTypes.string,
};

LocationForm.defaultProps = {
  selectedFilters: [],
  buttonText: 'Update Data',
};

export default LocationForm;
