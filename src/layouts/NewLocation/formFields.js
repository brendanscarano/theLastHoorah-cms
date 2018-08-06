import React from 'react';
import { InputField } from '../../components';
import ImagePickerField from '../../components/Form/ImagePickerField';
import SelectField from '../../components/Form/SelectField';
import TextAreaField from '../../components/Form/TextAreaField';

const cities = ['las-vegas',
  'new-york',
  'miami',
  'austin',
  'nashville',
  'montreal',
  'san-diego',
  'phoenix',
];

export default [
  { key: 'city', isEditable: true, Component: props => <SelectField {...props} options={cities} /> },
  { key: 'id', isEditable: false, Component: InputField },
  { key: 'name', isEditable: true, Component: InputField },
  { key: 'description', isEditable: true, Component: TextAreaField },
  { key: 'formattedAddress', isEditable: true, Component: InputField },
  { key: 'imgRef', isEditable: true, Component: ImagePickerField },
  { key: 'latitude', isEditable: true, Component: InputField },
  { key: 'longitude', isEditable: true, Component: InputField },
  { key: 'phoneNumber', isEditable: true, Component: InputField },
  { key: 'website', isEditable: true, Component: InputField },
  { key: 'priceLevel', isEditable: false, Component: InputField },
  { key: 'rating', isEditable: false, Component: InputField },
  { key: 'types', isEditable: false, Component: InputField },
];
