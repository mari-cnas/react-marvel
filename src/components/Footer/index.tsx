import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { AiFillYoutube } from 'react-icons/ai';
import { BsPinterest, BsSnapchat } from 'react-icons/bs';
import { FaTumblr } from 'react-icons/fa';
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
} from 'react-icons/ti';

import logo from '../../assets/logo_bottom.png';
import { FooterBg } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterBg>
      <Container>
        <Row xs={1} md={2} lg={5} className="mt-5 justify-content-center">
          <Col className="d-flex justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src={logo} alt="logo" />
            </a>
          </Col>

          <Col className="d-flex justify-content-center justify-content-lg-start text-center text-lg-start">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">ABOUT MARVEL</li>
              <li className="nav-item mb-2">HELP/FAQS</li>
              <li className="nav-item mb-2">CAREERS</li>
              <li className="nav-item mb-2">INTERNSHIPS</li>
            </ul>
          </Col>
          <Col className="d-flex justify-content-center justify-content-lg-start text-center text-lg-start">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">ADVERTISING</li>
              <li className="nav-item mb-2">DISNEY+</li>
              <li className="nav-item mb-2">MARVELHQ.COM</li>
              <li className="nav-item mb-2">REDEEM DIGITAL COMICS</li>
            </ul>
          </Col>
          <Col className="d-flex justify-content-center justify-content-lg-start text-center text-lg-start">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">MARVEL INSIDER</li>
              <li className="nav-item mb-2">Get rewarded</li>
              <li className="nav-item mb-2">MARVEL UNLIMITED</li>
              <li className="nav-item mb-2">Acess over 30,000+ comics</li>
            </ul>
          </Col>
          <Col className="d-flex flex-column justify-content-center justify-content-lg-start text-center text-lg-start mt-md-3 mt-lg-0">
            <p className="mb-2">FOLLOW MARVEL</p>
            <ul className="list-unstyled d-flex justify-content-between">
              <li>
                <a
                  href="http://twitter.com/marvel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiSocialTwitter size={25} />
                </a>
              </li>
              <li>
                <a
                  href="http://instagram.com/marvel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiSocialInstagram size={25} />
                </a>
              </li>
              <li>
                <a
                  href="http://facebook.com/marvel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiSocialFacebook size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/marvelofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsPinterest size={25} />
                </a>
              </li>
              <li>
                <a
                  href="http://youtube.com/marvel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillYoutube size={25} />
                </a>
              </li>
              <li>
                <a
                  href="http://marvelentertainment.tumblr.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTumblr size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.snapchat.com/add/marvelhq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsSnapchat size={25} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterBg>
  );
};

export default memo(Footer);
