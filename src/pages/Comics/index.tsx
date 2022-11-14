import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';

import { useComics } from 'context/ComicsContext';

import ComicCard from 'components/ComicCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { LoadingDiv } from 'styles/GlobalStyles';

import { MarvelPaginate, SearchInput } from './styled';

const Comics: React.FC = () => {
  const { comics, isLoading, totalPages, currentPage, fetchComics, error } =
    useComics();

  const setTitle = useTitle();

  useEffect(() => {
    setTitle('Comics');
  }, [setTitle]);

  const handlePageChange = useCallback(
    (page: number) => fetchComics(page),
    [fetchComics],
  );

  const [search, setSearch] = useState('');

  const handleSearch = useCallback(
    () => fetchComics(1, search),
    [fetchComics, search],
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

        {!isLoading && (
          <div className="d-flex flex-column my-5 ">
            <Row className="align-items-center">
              <Col className="d-flex justify-content-center justify-content-md-start col-12 col-md-6">
                <h2>AUGUST 03: NEW RELEASES</h2>
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
            <Row xs={1} md={4} lg={5} className=" g-3 justify-content-center">
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
          <p>Nenhum resultado encontrado</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default memo(Comics);
