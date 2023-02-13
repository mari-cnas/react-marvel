import { memo, useEffect } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useCharacters } from 'context/CharactersContext';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { LoadingDiv, Wrapper } from 'styles/GlobalStyles';

import {
  CharacterBg,
  CharacterImg,
  CharacterInfos,
  CharacterName,
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
    <Wrapper>
      <Header />

      {isLoading && (
        <Container>
          <LoadingDiv className="d-flex aling-items-center justify-content-center">
            <Spinner animation="border" variant="danger" className="my-auto" />
          </LoadingDiv>
        </Container>
      )}
      {!isLoading && character && (
        <>
          <CharacterImg coverimage={getImageUrl(character.thumbnail)}>
            <Container
              className="d-flex justify-content-center align-items-center "
              style={{ height: '400px' }}
            >
              <CharacterName>{character?.name ?? 'Loading...'}</CharacterName>
            </Container>
          </CharacterImg>
          <CharacterBg className="d-flex flex-grow-1 justify-content-center align-items-center">
            <CharacterInfos className=" d-flex flex-column my-5 py-4 px-4 w-100">
              <h6 className="mb-4">{character.description}</h6>
              <Row>
                <Col>
                  <h5>COMICS</h5>
                  {character.comics.items.map((comic) => (
                    <p>{comic.name}</p>
                  ))}
                </Col>
                <Col>
                  <h5>SERIES</h5>
                  {character.series.items.map((comic) => (
                    <p>{comic.name}</p>
                  ))}
                </Col>
              </Row>
            </CharacterInfos>
          </CharacterBg>
        </>
      )}

      <Footer />
    </Wrapper>
  );
};

export default memo(Character);

// {{character.description} && <p>{character.description}</p>}
