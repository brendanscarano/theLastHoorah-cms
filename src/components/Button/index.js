import styled from 'styled-components';
import theme from '../../shared/theme';

const StyledButton = styled.button`
  border-radius: 0;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  border-radius: 2px;
  background-color: ${theme.colors.gray.lighest};
  padding: 0.5rem;
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export default StyledButton;
