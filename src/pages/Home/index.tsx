import { memo, useEffect } from 'react';

import { Carousel } from 'react-bootstrap';

import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';
// import useWindowSize from 'hooks/useWindowSize';

import { Wrapper } from 'styles/GlobalStyles';

import { CharacterImage } from './styled';

const Home: React.FC = () => {
  const setTitle = useTitle();
  // const { width, height } = useWindowSize();

  useEffect(() => {
    setTitle('');
  }, [setTitle]);

  return (
    <Wrapper>
      <Header />
      <CharacterImage />
      <Footer />
    </Wrapper>
  );
};

export default memo(Home);
