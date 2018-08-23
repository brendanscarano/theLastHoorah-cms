import React from 'react';
import { InputField } from '../../components';
import ImagePickerField from '../../components/Form/ImagePickerField';
import SelectField from '../../components/Form/SelectField';
import TextAreaField from '../../components/Form/TextAreaField';

const cities = [
  { key: 'las-vegas', displayName: 'Las Vegas' },
  { key: 'nyc', displayName: 'New York City' },
  { key: 'miami', displayName: 'Miami' },
  { key: 'austin', displayName: 'Austin' },
  { key: 'nashville', displayName: 'Nashville' },
  { key: 'montreal', displayName: 'Montreal' },
  { key: 'san-diego', displayName: 'San Diego' },
  { key: 'phoenix', displayName: 'Phoneix' },
];

export default [
  { key: 'city', isEditable: true, Component: props => <SelectField {...props} options={cities} /> },
  { key: 'id', isEditable: false, Component: InputField },
  { key: 'name', isEditable: true, Component: InputField },
  { key: 'description', isEditable: true, Component: TextAreaField },
  { key: 'rating', isEditable: false, Component: InputField },

  { key: 'reviews.googleRating', isEditable: true, Component: InputField },
  { key: 'reviews.yelpRating', isEditable: true, Component: InputField },
  { key: 'reviews.yelpUrl', isEditable: true, Component: InputField },
  { key: 'reviews.tripAdvisorRating', isEditable: true, Component: InputField },
  { key: 'reviews.tripAdvisorUrl', isEditable: true, Component: InputField },
  { key: 'reviews.aggregateRating', isEditable: true, Component: InputField },
  { key: 'formattedAddress', isEditable: true, Component: InputField },
  { key: 'imgRef', isEditable: true, Component: ImagePickerField },
  { key: 'latitude', isEditable: true, Component: InputField },
  { key: 'longitude', isEditable: true, Component: InputField },
  { key: 'phoneNumber', isEditable: true, Component: InputField },
  { key: 'website', isEditable: true, Component: InputField },
  { key: 'priceLevel', isEditable: false, Component: InputField },
  { key: 'types', isEditable: false, Component: InputField },
];
