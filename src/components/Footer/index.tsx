import { memo } from 'react';

import { Container } from 'react-bootstrap';
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 mt-5 ">
          <div className="col ">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src={logo} alt="logo" />
            </a>
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
                <a href="http://marvelentertainment.tumblr.com/">
                  <FaTumblr size={25} />
                </a>
              </li>
              <li>
                <a href="https://www.snapchat.com/add/marvelhq">
                  <BsSnapchat size={25} />
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
