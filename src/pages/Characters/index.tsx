import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

import { useCharacters } from 'context/CharactersContext';

import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { MarvelPaginate } from './styled';

const Characters: React.FC = () => {
  const {
    characters,
    isLoading,
    totalPages,
    currentPage,
    fetchCharacters,
    error,
  } = useCharacters();

  const setTitle = useTitle();

  useEffect(() => {
    setTitle('Characters');
  }, [setTitle]);
  const [search, setSearch] = useState('');

  const handlePageChange = useCallback(
    (page: number) => fetchCharacters(page, search),
    [fetchCharacters, search],
  );

  const handleSearch = useCallback(
    () => fetchCharacters(1, search),
    [fetchCharacters, search],
  );

  return (
    <>
      <Header />
      <Container>
        {isLoading && (
          <>
            <div className="d-flex aling-items-center justify-content-center">
              <Spinner animation="grow" variant="primary" className="my-5" />
            </div>
            <div>
              <ContentLoader viewBox="0 0 380 70" className="my-5">
                {/* Only SVG shapes */}
                {/* <rect x="0" y="0" rx="5" ry="5" width="70" height="70" /> */}
                <rect x="0" y="15" rx="4" ry="4" width="50" height="80" />
                <rect x="90" y="15" rx="3" ry="3" width="50" height="80" />
                <rect x="150" y="15" rx="3" ry="3" width="50" height="80" />
                <rect x="250" y="15" rx="3" ry="3" width="50" height="80" />
              </ContentLoader>
            </div>
          </>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && !error && (
          <div className="d-flex flex-column my-5">
            <h2>FEATURED CHARACTERS</h2>
            <div className="d-flex justify-content-end">
              <input
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="button" onClick={handleSearch}>
                Buscar
              </button>
            </div>
            <Row xs={1} md={4} className=" g-3 justify-content-center">
              {characters.map((character) => (
                <Col key={character.id} className="d-flex ">
                  <CharacterCard character={character} />
                </Col>
              ))}
            </Row>
            {totalPages > 1 && (
              <MarvelPaginate
                forcePage={currentPage - 1}
                onPageChange={(p) => handlePageChange(p.selected + 1)}
                pageCount={totalPages}
                previousLabel="<<"
                nextLabel=">>"
                className="my-5 list-unstyled flex-wrap"
              />
            )}
          </div>
        )}
        {!isLoading && !error && characters.length === 0 && (
          <p>Nenhum resultado encontrado</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default memo(Characters);
