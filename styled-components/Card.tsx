import React from 'react';
import styled from 'styled-components';
import Paper from './Paper';

const InnerCard = styled.div`
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const OuterCard = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius};
  transition: background 0.2s;
  cursor: pointer;
  &::after {
    content: '';
    top: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.shadows[1]};
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

type Props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
};

const Card: React.FC<Props> = ({ children, onClick, className }) => (
  <OuterCard className={className} onClick={onClick}>
    <InnerCard>{children}</InnerCard>
  </OuterCard>
);

export default Card;
