import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexRow from '../FlexRow';
import theme from '../../shared/theme';

const Wrapper = styled(FlexRow)`
  justify-content: center;
  margin: 0 0 .875rem .875rem;
  width: calc(50% - .875rem);
  border: 1px solid ${theme.colors.gray[2]};
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  ${({ isSelected }) => isSelected && `border-bottom: 3px solid ${theme.colors.primary}`};

  &:hover {
    background-color: ${theme.colors.gray[1]};
  }

  @media (min-width: ${theme.bp.tablet}) {
    width: calc(33.3333% - .875rem);
  }
`;

const Filter = ({
  title, emoji, onClick, isSelected,
}) => (
  <Wrapper onClick={onClick} isSelected={isSelected}>
    <span role="img">
      {emoji}
    </span>
    <span>
      {title}
    </span>
  </Wrapper>
);

Filter.propTypes = {
  /** Name of the filter */
  title: PropTypes.string.isRequired,
  /** Emoji of the filter */
  emoji: PropTypes.string.isRequired,
  /** Will either add/remove filter based on if its selected or not */
  onClick: PropTypes.func.isRequired,
  /** Whether or not the particular filter has been selected */
  isSelected: PropTypes.bool,
};

Filter.defaultProps = {
  isSelected: false,
};

export default Filter;
