import styled from 'styled-components'
import { motion } from 'framer-motion'

const Paper = styled(motion.div)`
  box-shadow: ${props => props.theme.shadows[0]};
  border-radius: ${props => props.theme.borderRadius};
`

export default Paper
