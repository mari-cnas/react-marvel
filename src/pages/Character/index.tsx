import { memo, useEffect } from 'react';

import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useCharacters } from 'context/CharactersContext';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import {
  CharacterBg,
  CharacterContainer,
  CharacterName,
  StyledSection,
} from './styled';

const Character: React.FC = () => {
  const { character, isLoading, fetchCharacter } = useCharacters();
  const { id } = useParams();
  const setTitle = useTitle();

  useEffect(() => {
    if (id) fetchCharacter(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setTitle(`${character?.name} | Characters`);
  }, [character?.name, setTitle]);

  // setIsLoading(false);
  return (
    <>
      <Header />

      {isLoading && (
        <div className="text-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
      {!isLoading && character && (
        <>
          <CharacterBg coverimage={getImageUrl(character.thumbnail)}>
            <CharacterContainer className="d-flex h-100 align-items-center ">
              <CharacterName>{character?.name ?? 'Loading...'}</CharacterName>
            </CharacterContainer>
          </CharacterBg>
          <CharacterContainer>
            <StyledSection className=" d-flex flex-column my-2 py-2 px-2 w-100">
              <p>
                <span className="fw-bold">Description: </span>
                {character.description}
              </p>
              <p>
                <span className="fw-bold">Comics available: </span>
                {character?.comics.available}
              </p>

              <p className="fw-bold">
                {' '}
                List containing comics which feature this character:
              </p>
              <p>
                {character.comics.items.map((comic) => (
                  <p>{comic.name}</p>
                ))}
              </p>
            </StyledSection>
          </CharacterContainer>
        </>
      )}

      <Footer />
    </>
  );
};

export default memo(Character);

// {{character.description} && <p>{character.description}</p>}
