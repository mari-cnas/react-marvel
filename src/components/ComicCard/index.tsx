import { memo } from 'react';

import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getImageUrl, strToSlug } from 'helpers';

import { ComicType } from 'types/ComicType';

import { ComicImage, ColoredCard } from './styled';

interface IComicCardProps {
  children?: React.ReactNode;
  comic: ComicType;
}

const ComicCard: React.FC<IComicCardProps> = ({ comic }) => {
  return (
    <ColoredCard className="flex-column  my-4 w-100">
      <div>
        <Link to={`/comics/${comic.id}/${strToSlug(comic.title)}`}>
          <ComicImage
            aspectRatio={150}
            coverimage={getImageUrl(comic.thumbnail)}
            className="my-4"
          >
            <div />
          </ComicImage>
        </Link>
      </div>
      <div>
        <Card.Body>
          <Link to={`/comics/${comic.id}/${strToSlug(comic.title)}`}>
            <Card.Title>{comic.title}</Card.Title>
          </Link>
          <Card.Text>
            <p className="my-0">Issue Number: {comic.issueNumber}</p>
            <p>Format:{comic.format}</p>
          </Card.Text>
        </Card.Body>
      </div>
    </ColoredCard>
  );
};

export default memo(ComicCard);
