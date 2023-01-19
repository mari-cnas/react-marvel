import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const HeaderBg = styled.div`
  background-color: rgb(32, 35, 41);
  display: flex;

  /* unvisited link */
  a:link {
    color: white;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: white;
  }

  /* mouse over link */
  a:hover {
    color: red;
  }

  /* selected link */
  a:active {
    color: red;
  }
`;
