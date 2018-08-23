import { InputField } from '../../components';
import TextAreaField from '../../components/Form/TextAreaField';

export default [
  { key: 'id', isEditable: false, Component: InputField },
  { key: 'name', isEditable: true, Component: InputField },
  { key: 'description', isEditable: true, Component: TextAreaField },
  { key: 'rating', isEditable: false, Component: InputField },
  { key: 'reviews.aggregateRating', isEditable: true, Component: InputField },
  { key: 'reviews.googleRating', isEditable: true, Component: InputField },
  { key: 'reviews.yelpRating', isEditable: true, Component: InputField },
  { key: 'reviews.yelpUrl', isEditable: true, Component: InputField },
  { key: 'reviews.tripAdvisorRating', isEditable: true, Component: InputField },
  { key: 'reviews.tripAdvisorUrl', isEditable: true, Component: InputField },
  { key: 'formattedAddress', isEditable: true, Component: InputField },
  { key: 'hours', isEditable: false, Component: InputField },
  { key: 'imgRef', isEditable: true, Component: InputField },
  { key: 'latitude', isEditable: true, Component: InputField },
  { key: 'longitude', isEditable: true, Component: InputField },
  { key: 'phoneNumber', isEditable: true, Component: InputField },
  { key: 'website', isEditable: true, Component: InputField },
  { key: 'priceLevel', isEditable: false, Component: InputField },
  { key: 'types', isEditable: false, Component: InputField },
];
