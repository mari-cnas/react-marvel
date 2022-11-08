import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    //height:100vh;
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



//bootstrap overrides

`;
