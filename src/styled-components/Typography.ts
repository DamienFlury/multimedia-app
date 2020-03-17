import styled from 'styled-components'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

const getFontSize = (variant?: Variant): string => {
  switch (variant) {
    case 'h1':
      return '3rem'
    case 'h2':
      return '2rem'
    case 'h3':
      return '1.5rem'
    case 'h4':
      return '1.2rem'
    default:
      return '1rem'
  }
}

type Props = {
  variant?: Variant
  color?: string
}

const Typography = styled.div<Props>`
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => getFontSize(props.variant)};
  color: ${props => props.color ?? props.theme.colors.foreground};
`

export default Typography
