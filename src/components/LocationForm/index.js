import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { Button, Filters, FlexRow } from '..';

const FormRow = styled(FlexRow)`
  align-items: flex-start;
`;

const FieldWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const LocationForm = ({
  location, fields, handleSubmit, selectedFilters, buttonText,
}) => console.log('location', location) || (
  <form onSubmit={handleSubmit}>
    <FormRow>
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
              />
            </div>
          </FieldWrapper>
        ))}
      </div>

      <div>
        <Filters selectedFilters={selectedFilters} />
      </div>

    </FormRow>
    <div>
      <Button type="submit">{buttonText}</Button>
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
