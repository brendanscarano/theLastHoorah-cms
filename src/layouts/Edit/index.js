import React from 'react';
import PropTypes from 'prop-types';
import {
  compose, withState, lifecycle, withHandlers,
} from 'recompact';
import { reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { loadData } from '../../redux/location';
import Presentation from './Presentation';
import { fetchData, updateData } from './firebase';

const enhance = compose(
  connect(
    state => ({
      initialValues: state.location.data,
      formValues: state.form.editLocation && state.form.editLocation.values,
    }), { loadData, change },
  ),
  withState('isLoading', 'setIsLoading', true),
  withState('location', 'setLocation', null),
  lifecycle({
    async componentDidMount() {
      const { cityId, id } = this.props.match.params;
      const [err, doc] = await fetchData(cityId, id);

      if (!doc) {
        this.props.setIsLoading(false);
        return;
      }

      this.props.setLocation(doc);
      this.props.setIsLoading(false);
      this.props.loadData(doc);
    },
  }),
  withHandlers({
    handleSubmit: ({ formValues, match }) => async (e) => {
      const { cityId, id } = match.params;
      e.preventDefault();
      const response = await updateData(cityId, id, formValues);
      console.log('response', response);
    },
  }),
  reduxForm({
    form: 'editLocation',
    enableReinitialize: true,
  }),
);
const EditPage = ({
  match, isLoading, location, handleSubmit, change, formValues,
}) => (
  <Presentation
    location={location}
    isLoading={isLoading}
    locationId={match.params.id}
    handleSubmit={handleSubmit}
    selectedFilters={(formValues && formValues.filters) || []}
    change={change}
    showModal
  />
);

EditPage.propTypes = {
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  location: PropTypes.object,
  /** Redux Form action */
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

EditPage.defaultProps = {
  isLoading: false,
  location: {},
};

export default enhance(EditPage);
