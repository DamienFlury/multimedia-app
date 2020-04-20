import styled from 'styled-components';
import { motion } from 'framer-motion';

const Paper = styled(motion.div)`
  box-shadow: ${(props) => props.theme.shadows[0]};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.background.main[1]};
`;

export default Paper;
