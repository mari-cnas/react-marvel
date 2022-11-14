import { memo, useEffect } from 'react';

import { Carousel } from 'react-bootstrap';

import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';
// import useWindowSize from 'hooks/useWindowSize';

import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';

const Home: React.FC = () => {
  const setTitle = useTitle();
  // const { width, height } = useWindowSize();

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  // <p>
  //   Tamanho da tela: {width} x {height}
  // </p>
  //  <p>Enviroment:{Config.app.env}</p>}
  return (
    <>
      <Header />
      <section className="d-flex justify-content-center">
        <Carousel className="d-flex">
          <Carousel.Item className="justify-content-center">
            <img className="d-block " src={carousel1} alt="First slide" />
            <Carousel.Caption>
              <h3>This week&#x27;s new comics</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block " src={carousel2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Assembled</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block " src={carousel3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Black Panther</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <Footer />
    </>
  );
};

export default memo(Home);
