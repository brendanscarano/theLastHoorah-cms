/**
* Description here...
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImagePickerField = ({ field }) => console.log('field', field) || (
  <div>{field.location.photos.map(imgRef => <img src={imgRef} />)}</div>
);

export default ImagePickerField;
