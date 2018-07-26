/**
* Description here...
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    overflow: scroll;
`;

const ImgWrapper = styled.div`
    max-width: 200px;
    max-height: 200px;
    margin: 0 1rem;

    > img {
        flex: 1 1 160px;
        margin: 10px;
        ${({ isSelected }) => isSelected && 'border: 3px solid #1890ff'};
    }

    &:focus {
        outline: 0;
    }
`;

const ImagePickerField = ({ field }) => (
  <Wrapper>
    {field.location.photos.map((imgRef, i) => (
      <ImgWrapper
        onClick={() => field.input.onChange(imgRef)}
        onKeyDown={() => field.input.onChange(imgRef)}
        role="button"
        tabIndex={0}
        isSelected={field.input.value === imgRef}
        key={imgRef}
      >
        <img
          src={imgRef}
          alt={`${field.location.name}-${i}`}
        />
      </ImgWrapper>
    ))}
  </Wrapper>
);

ImagePickerField.propTypes = {
  field: PropTypes.shape({
    disabled: PropTypes.bool,
    input: PropTypes.object,
    label: PropTypes.string,
    location: PropTypes.object,
    meta: PropTypes.object,
    type: PropTypes.string,
  }).isRequired,
};

export default ImagePickerField;
