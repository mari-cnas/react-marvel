import { memo } from 'react';

import { Container } from 'react-bootstrap';
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialGithub,
  TiSocialFacebook,
} from 'react-icons/ti';

import logo from '../../assets/logo_bottom.png';
import { FooterBg } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterBg>
      <Container>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 mt-5 ">
          <div className="col ">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src={logo} alt="logo" />
            </a>
            <p className="text-muted">&copy; 2022</p>
          </div>

          <div className="col ">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">ABOUT MARVEL</li>
              <li className="nav-item mb-2">HELP/FAQS</li>
              <li className="nav-item mb-2">CAREERS</li>
              <li className="nav-item mb-2">INTERNSHIPS</li>
            </ul>
          </div>

          <div className="col ">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">ADVERTISING</li>
              <li className="nav-item mb-2">DISNEY+</li>
              <li className="nav-item mb-2">MARVELHQ.COM</li>
              <li className="nav-item mb-2">REDEEM DIGITAL COMICS</li>
            </ul>
          </div>
          <div className="col ">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">MARVEL INSIDER</li>
              <li className="nav-item mb-2">Get rewarded</li>
              <li className="nav-item mb-2">MARVEL UNLIMITED</li>
              <li className="nav-item mb-2">Acess over 30,000+ comics</li>
            </ul>
          </div>
          <div className="col ">
            <p>FOLLOW MARVEL</p>
            <ul className="list-unstyled d-flex flex-md-column">
              <li>
                <a href="www.google.com">
                  <TiSocialTwitter />
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  <TiSocialInstagram />
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  <TiSocialFacebook />
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  <TiSocialGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </FooterBg>
  );
};

export default memo(Footer);
