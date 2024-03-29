import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import { useCharacters } from 'context/CharactersContext';

import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { LoadingDiv, Wrapper } from 'styles/GlobalStyles';

import { CharactersBg, MarvelPaginate, SearchInput } from './styled';

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
  const [hasSearch, setHasSearch] = useState(false);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchCharacters(page, search);
      window.scrollTo(0, 0);
    },
    [fetchCharacters, search],
  );

  const handleSearch = useCallback(() => {
    fetchCharacters(1, search);
    setHasSearch(true);
  }, [fetchCharacters, search, setHasSearch]);

  const handleClean = useCallback(() => {
    fetchCharacters(1);
    setSearch('');
    setHasSearch(false);
  }, [fetchCharacters, setHasSearch]);

  return (
    <Wrapper>
      <Header />
      <CharactersBg>
        <Container>
          {isLoading && (
            <LoadingDiv className="d-flex aling-items-center justify-content-center">
              <Spinner
                animation="border"
                variant="danger"
                className="my-auto"
              />
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
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="px-1 mx-1"
                    />
                    <div className="d-flex ">
                      <Button
                        variant="danger"
                        type="button"
                        onClick={handleSearch}
                        className="me-1"
                        disabled={!search?.length}
                      >
                        <FaSearch size={18} />
                      </Button>
                      {hasSearch === true && (
                        <Button
                          variant="danger"
                          onClick={handleClean}
                          type="button"
                          className="me-1"
                        >
                          <AiOutlineCloseCircle size={18} />
                        </Button>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              <Row
                xs={1}
                sm={2}
                md={3}
                lg={4}
                className=" g-3 justify-content-center"
              >
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
            <p className="text-muted" style={{ fontSize: '2rem' }}>
              Character not found
            </p>
          )}
        </Container>
      </CharactersBg>
      <Footer />
    </Wrapper>
  );
};

export default memo(Characters);
