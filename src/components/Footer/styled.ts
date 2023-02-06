import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const FooterBg = styled.div`
  background-color: rgb(32, 35, 41);
  display: flex;
  color: grey;
  margin-top: auto;

  /* unvisited link */
  a:link {
    color: grey;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: grey;
  }

  /* mouse over link */
  a:hover {
    color: white;
  }

  /* selected link */
  a:active {
    color: blue;
  }
`;

export const CharacterName = styled.h1`
  text-shadow: black 0.1em 0.1em 0.2em;
  color: white;
`;
