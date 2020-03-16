import React from 'react'
import styled from 'styled-components'
import Paper from './Paper'

const CardWrapper = styled(Paper)`
  position: relative;
  display: inline-block;
  margin: 10px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  &::after {
    top: 0;
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.shadows[1]};
    transition: opacity 0.3s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
  }
`

const OverflowFix = styled.div`
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius};
`

const Card: React.FC = ({ children }) => (
  <CardWrapper>
    <OverflowFix>{children}</OverflowFix>
  </CardWrapper>
)

export default Card
