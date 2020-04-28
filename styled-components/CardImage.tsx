import styled from 'styled-components';

type Props = {
  src: string;
};

const CardImage = styled.div<Props>`
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200px;
`;

export default CardImage;
