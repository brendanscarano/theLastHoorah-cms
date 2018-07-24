import React from 'react';
import PropTypes from 'prop-types';
import {
  compose, withState, lifecycle, withHandlers,
} from 'recompact';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loadData } from '../../redux/location';
import Presentation from './Presentation';
import { fetchData, updateData } from './firebase';

const enhance = compose(
  connect(
    state => ({
      initialValues: state.location.data,
      formValues: state.form.editLocation && state.form.editLocation.values,
    }), { loadData },
  ),
  withState('isLoading', 'setIsLoading', true),
  withState('location', 'setLocation', null),
  lifecycle({
    async componentDidMount() {
      const [err, doc] = await fetchData(this.props.match.params.id);

      if (!doc) {
        this.props.setIsLoading(false);
        return;
      }

      console.log('doc', doc);
      this.props.setLocation(doc);
      this.props.setIsLoading(false);
      this.props.loadData(doc);
    },
  }),
  withHandlers({
    handleSubmit: ({ formValues, match }) => async (e) => {
      e.preventDefault();
      const res = await updateData(match.params.id, formValues);
      console.log('res', res);
    },
  }),
  reduxForm({
    form: 'editLocation',
    enableReinitialize: true,
  }),
);
const EditPage = ({
  history, match, isLoading, location, handleSubmit, formValues,
}) => (
  <Presentation
    location={location}
    isLoading={isLoading}
    locationId={match.params.id}
    handleSubmit={handleSubmit}
    selectedFilters={formValues && formValues.filters || []}
    showModal
  />
);

EditPage.propTypes = {
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  location: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

EditPage.defaultProps = {
  isLoading: false,
  location: {},
};

export default enhance(EditPage);
