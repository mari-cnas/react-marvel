import { Container } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
}

export const CharacterContainer = styled(Container)`
  display: flex;
`;

export const CharacterBg = styled.section<ICoverProps>`
  background: ${({ coverimage }) => `rgba(0, 0, 0, 0.7) url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 400px;
  background-blend-mode: darken;
`;
export const StyledSection = styled.section`
  border: 2px solid;
  display: flex;
`;

export const CharacterName = styled.h1`
  text-shadow: black 0.1em 0.1em 0.2em;
  color: white;
`;
