import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import Filter from '../Filter';
import theme from '../../shared/theme';
import data from './data';

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  padding: 15px 15px 3rem 0;
  height: 100%;
  overflow-y: scroll;

  @media (min-width: ${theme.bp.tablet}) {
    padding: .875rem .875rem 0 0;
  }
`;

const Filters = ({ selectedFilters }) => (
  <Container>
    {Object.keys(data).map((key) => {
      const isSelected = selectedFilters.indexOf(key) !== -1;

      return (
        <Field
          name="filters"
          key={key}
          component={props => (
            <Filter
              key={key}
              title={data[key].title}
              emoji={data[key].emoji}
              onClick={() => (selectedFilters.includes(key)
                ? props.input.onChange(selectedFilters.filter(filter => filter !== key))
                : props.input.onChange([...selectedFilters, key]))}
              isSelected={isSelected}
            />
          )}
        />
      );
    })}
  </Container>
);

Filters.propTypes = {
  /** List of selected filters */
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
};

Filters.defaultProps = {
  selectedFilters: [],
  className: '',
};

export default Filters;
