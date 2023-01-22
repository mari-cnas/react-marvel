import { Form, Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
}

export const ComicBg = styled.section<ICoverProps>`
  background-color: black;
`;

export const ComicBanner = styled.section<ICoverProps>`
  background: ${({ coverimage }) => `rgba(0, 0, 0, 0.7)url(${coverimage} ) `};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: darken;
`;

export const ComicDiv = styled.div`
  display: flex;
  color: white;
`;

export const StyledSection = styled.section`
  display: flex;
`;

export const ComicName = styled.h1`
  text-shadow: black 0.1em 0.1em 0.2em;
`;

export const ComicImage = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Issue = styled(Form)`
  background-color: lightgrey;
  color: black;

  .row {
    --bs-gutter-x: 0rem;
  }
`;

export const StyledDiv = styled.div`
  backdrop-filter: blur(5px);
`;

export const DigitalDiv = styled.div`
  @media (max-width: 767px) {
    border-top: 2px solid white;
  }
  @media (min-width: 768px) {
    border-left: 2px solid white;
  }
`;
