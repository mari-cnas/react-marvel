import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';

import { useComics } from 'context/ComicsContext';

import ComicCard from 'components/ComicCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { MarvelPaginate } from './styled';

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
          <div className="d-flex aling-items-center justify-content-center">
            <Spinner animation="grow" variant="primary" className="my-5" />
          </div>
        )}

        {!isLoading && (
          <div className="d-flex flex-column my-5 ">
            <h2>AUGUST 03: NEW RELEASES</h2>
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
            <Row xs={1} md={5} className=" g-3 justify-content-center">
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
                className="my-5 list-unstyled"
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
