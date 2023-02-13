import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import { useComics } from 'context/ComicsContext';

import ComicCard from 'components/ComicCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { LoadingDiv, Wrapper } from 'styles/GlobalStyles';

import { ComicsBg, MarvelPaginate, SearchInput } from './styled';

const Comics: React.FC = () => {
  const { comics, isLoading, totalPages, currentPage, fetchComics, error } =
    useComics();

  const setTitle = useTitle();

  useEffect(() => {
    setTitle('Comics');
  }, [setTitle]);

  const [search, setSearch] = useState('');
  const [hasSearch, setHasSearch] = useState(false);

  const handleSearch = useCallback(() => {
    fetchComics(1, search);
    setHasSearch(true);
  }, [fetchComics, search, setHasSearch]);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchComics(page, search);
      window.scrollTo(0, 0);
    },
    [fetchComics, search],
  );

  const handleClean = useCallback(() => {
    fetchComics(1);
    setSearch('');
    setHasSearch(false);
  }, [fetchComics, setHasSearch]);

  return (
    <Wrapper>
      <Header />
      <ComicsBg>
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

          {!isLoading && (
            <div className="d-flex flex-column my-5 ">
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center justify-content-md-start col-12 col-md-6">
                  <h2>COMICS</h2>
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
                {comics.map((comic) => (
                  <Col key={comic.id} className="d-flex">
                    <ComicCard comic={comic} />
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
          {!isLoading && !error && comics.length === 0 && (
            <p className="text-muted" style={{ fontSize: '2rem' }}>
              Comic not found
            </p>
          )}
        </Container>
      </ComicsBg>
      <Footer />
    </Wrapper>
  );
};

export default memo(Comics);
