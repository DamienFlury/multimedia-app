import styled from 'styled-components';

const Paper = styled.div`
  background: ${props => props.theme.colors.background[1]};
  box-shadow: ${props => props.theme.shadows[0]};
  border-radius: ${props => props.theme.borderRadius};
  transition: ${props => props.theme.transitions[0]};
  color: ${props => props.theme.colors.text};
`;

export default Paper;
