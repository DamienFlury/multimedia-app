import styled from 'styled-components';
import Paper from './Paper';

const Card = styled(Paper)`
  position: relative;
  display: inline-block;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  transition: background 0.2s;
  &::after {
    top: 0;
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.shadows[1]};
    transition: opacity 0.3s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export default Card;
