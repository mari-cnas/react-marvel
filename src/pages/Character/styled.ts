import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
}

export const CharacterBg = styled.div`
  display: flex;
  background-color: black;

  h5 {
    border-bottom-style: dotted;
    border-bottom-width: 3px;
    color: red;
  }
`;

export const CharacterImg = styled.section<ICoverProps>`
  background: ${({ coverimage }) => `rgba(0, 0, 0, 0.7) url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 400px;
  background-blend-mode: darken;
`;
export const StyledSection = styled.section`
  border-style: inset;
  border-width: 4px;
  display: flex;
  background-color: rgb(32, 35, 41);
  color: white;
`;

export const CharacterName = styled.h1`
  text-shadow: black 0.1em 0.1em 0.2em;
  color: white;
`;
