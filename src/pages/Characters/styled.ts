import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const CharactersBg = styled.div`
  background-color: black;
  display: flex;
  color: white;
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

export const SearchInput = styled.input`
  border-width: 2px;
  border-radius: 5px;
`;
