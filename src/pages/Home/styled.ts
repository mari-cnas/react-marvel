import styled from 'styled-components';

import characters from '../../assets/characters.jpg';

export const Background = styled.div`
  background-color: rgb(32, 35, 41);
  display: flex;
`;

export const CharacterImage = styled.div`
  background-image: url(${characters});
  background-size: cover;
  background-position: top;
  display: flex;
  flex-grow: 1;
`;
