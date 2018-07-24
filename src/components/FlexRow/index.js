/**
 * Wrapper FlexRow container
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

FlexRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlexRow;
