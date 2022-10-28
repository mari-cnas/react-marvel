import { memo } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import { HeaderBg } from './styled';

const Header: React.FC = () => {
  return (
    <HeaderBg className="d-flex flex-column">
      <div className="d-flex justify-content-center border-bottom">
        <img src={logo} alt="logo" width="127px" />
      </div>
      <Container>
        <Navbar
          bg="transparent"
          variant="dark"
          className="d-flex justify-content-center"
        >
          <Nav>
            <div className=" d-flex">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/characters">Characters</Nav.Link>
              <Nav.Link href="/comics">Comics</Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </HeaderBg>
  );
};

export default memo(Header);
