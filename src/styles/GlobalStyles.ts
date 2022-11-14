import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
  
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
}

html,body,#root{
    min-height: 100vh;
}



//bootstrap overrides

`;

export const LoadingDiv = styled.div`
  min-height: 100vh;
`;
