import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
  

}

html,body,#root{
    min-height: 100vh;
}


footer {
    margin-top: auto;
   
} 

`;

export const LoadingDiv = styled.div`
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
