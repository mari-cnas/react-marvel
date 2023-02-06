import { memo, useEffect } from 'react';

import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useComics } from 'context/ComicsContext';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { LoadingDiv, Wrapper } from 'styles/GlobalStyles';

import {
  ComicBg,
  ComicContainer,
  ComicImage,
  ComicName,
  DigitalDiv,
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
    <Wrapper>
      <Header />

      {isLoading && (
        <LoadingDiv className="d-flex aling-items-center justify-content-center">
          <Spinner animation="border" variant="danger" className="my-auto" />
        </LoadingDiv>
      )}
      {!isLoading && comic && (
        <ComicBg
          coverimage={getImageUrl(comic.thumbnail)}
          className="d-flex flex-column mt-auto "
        >
          <StyledDiv className="d-flex ">
            <ComicContainer className="d-flex flex-column  ">
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
                  <ComicName className="my-4 text-center text-md-start px-md-3">
                    {comic?.title ?? 'Loading...'}
                  </ComicName>
                  <StyledSection className="my-2 py-2 px-2">
                    <p>{comic.description}</p>
                  </StyledSection>
                </Col>
              </Row>
              <Issue className="d-flex py-3 py-md-5 my-5">
                <Row className=" flex-column flex-md-row w-100 px-3 ">
                  <Col className="d-flex col-md-4 ">
                    <Form.Group
                      className=" px-3 px-lg-5 w-100 "
                      controlId="formBasicEmail"
                    >
                      <h5>PRINT ISSUE</h5>
                      <p>In Stores Now</p>
                      <Form.Control
                        type="text"
                        placeholder="Enter zip code"
                        maxLength={9}
                      />

                      <Button variant="danger" type="submit" className=" my-2">
                        Find a store
                      </Button>
                    </Form.Group>
                  </Col>
                  <Col className="d-flex col-md-6">
                    <DigitalDiv className=" px-3 px-lg-5 pt-3 py-md-0 w-100">
                      <h5>DIGITAL ISSUE</h5>
                      <p style={{ fontSize: '0.8rem' }}>
                        Read online or on you iPhone, iPad or Android Device
                      </p>
                      <p>Digital issue is not currently available</p>
                    </DigitalDiv>
                  </Col>
                </Row>
              </Issue>
            </ComicContainer>
          </StyledDiv>
        </ComicBg>
      )}

      <Footer />
    </Wrapper>
  );
};

export default memo(Comic);

// {{comic.description} && <p>{comic.description}</p>}
