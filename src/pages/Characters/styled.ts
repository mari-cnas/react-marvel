import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const CharacterContainer = styled(Container)`
  background-color: #add8e6;
  display: flex;
`;

export const Background = styled.div`
  background-color: rgb(32, 35, 41);
  display: flex;
`;

export const CharacterName = styled.h1`
  text-shadow: black 0.1em 0.1em 0.2em;
  color: white;
`;

export const MarvelPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;

  & > li {
    border: 1px solid black;
    background-color: #013687;
    color: white;
  }

  a {
    color: white;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }
  & > li.selected > a {
    background-color: red;
    color: white;
  }
`;
