import { Card, Ratio, Row } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
  aspectRatio: string;
}

export const ColoredCard = styled.div`
  color: black;
`;
export const ComicImage = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
