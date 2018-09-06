/**
 * Wrapper FlexColumn container
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

FlexColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlexColumn;
