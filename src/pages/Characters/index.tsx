import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';

import { useCharacters } from 'context/CharactersContext';

import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { LoadingDiv } from 'styles/GlobalStyles';

import { MarvelPaginate, SearchInput } from './styled';

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
          <LoadingDiv className="d-flex aling-items-center justify-content-center">
            <Spinner animation="grow" variant="primary" className="my-auto" />
          </LoadingDiv>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && !error && (
          <div className="d-flex flex-column my-5 ">
            <Row className="align-items-center">
              <Col className="d-flex justify-content-center justify-content-md-start col-12 col-md-6">
                <h2>FEATURED CHARACTERS</h2>
              </Col>
              <Col className="col-12 col-md-6">
                <div className="d-flex justify-content-center justify-content-md-end ">
                  <SearchInput
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-1 mx-1"
                  />
                  <div className="d-flex flex-column flex-sm-row">
                    <Button
                      variant="danger"
                      type="button"
                      onClick={handleSearch}
                      className="me-1"
                    >
                      <FaSearch />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => setSearch('')}
                      type="button"
                      className="me-1"
                    >
                      <MdCleaningServices />
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>

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
