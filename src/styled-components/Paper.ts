import styled from 'styled-components'

const Paper = styled.div`
  box-shadow: ${props => props.theme.shadows[0]};
  border-radius: ${props => props.theme.borderRadius};
`

export default Paper
