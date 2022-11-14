import { memo, useEffect } from 'react';

import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useComics } from 'context/ComicsContext';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { LoadingDiv } from 'styles/GlobalStyles';

import {
  ComicBg,
  ComicDiv,
  ComicImage,
  ComicName,
  Issue,
  StyledDiv,
  StyledSection,
} from './styled';

const Comic: React.FC = () => {
  const { comic, isLoading, fetchComic } = useComics();
  const { id } = useParams();
  const setTitle = useTitle();

  useEffect(() => {
    setTitle(`${comic?.id} | Comics`);
  }, [comic?.id, setTitle]);

  useEffect(() => {
    if (id) fetchComic(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // setIsLoading(false);
  return (
    <>
      <Header />

      {isLoading && (
        <LoadingDiv className="d-flex aling-items-center justify-content-center">
          <Spinner animation="grow" variant="primary" className="my-auto" />
        </LoadingDiv>
      )}
      {!isLoading && comic && (
        <ComicBg
          coverimage={getImageUrl(comic.thumbnail)}
          className="d-flex flex-grow-1"
        >
          <StyledDiv className="w-100">
            <Container className="d-flex  align-items-center ">
              <ComicDiv className="d-flex flex-column">
                <Row>
                  <Col className="d-flex" md={4}>
                    <ComicImage
                      aspectRatio={150}
                      coverimage={getImageUrl(comic.thumbnail)}
                      className="my-4 img-fluid"
                    >
                      <div />
                    </ComicImage>
                  </Col>
                  <Col md={5}>
                    <ComicName>{comic?.title ?? 'Loading...'}</ComicName>
                    <StyledSection className="my-2 py-2 px-2">
                      <p>{comic.description}</p>
                    </StyledSection>
                  </Col>
                </Row>

                <Issue className="d-flex px-4 py-4 my-5">
                  <Row>
                    <Col className="d-flex">
                      <Form.Group
                        className="mb-3 col-md-4 px-5 w-100 "
                        controlId="formBasicEmail"
                      >
                        <h5>PRINT ISSUE</h5>
                        <p>In Stores Now</p>
                        <Form.Control
                          type="number"
                          placeholder="Enter zip code"
                        />

                        <Button
                          variant="danger"
                          type="submit"
                          className=" my-2"
                        >
                          Find a store
                        </Button>
                      </Form.Group>
                    </Col>
                    <Col className="d-flex">
                      <div className="mb-3 col-md-6 border-start px-5 w-100">
                        <h5>DIGITAL ISSUE</h5>
                        <p>
                          Read online or on you iPhone, iPad or Android Device
                        </p>
                        <p>Digital issue is not currently available</p>
                      </div>
                    </Col>
                  </Row>
                </Issue>
              </ComicDiv>
            </Container>
          </StyledDiv>
        </ComicBg>
      )}

      <Footer />
    </>
  );
};

export default memo(Comic);

// {{comic.description} && <p>{comic.description}</p>}
