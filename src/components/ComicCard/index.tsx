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
      <Link to={`/comics/${comic.id}/${strToSlug(comic.title)}`}>
        <ComicImage
          aspectRatio={150}
          coverimage={getImageUrl(comic.thumbnail)}
          className="mb-3"
        >
          <div />
        </ComicImage>
      </Link>
      <Card.Body className="px-2 mb-1">
        <Link to={`/comics/${comic.id}/${strToSlug(comic.title)}`}>
          <Card.Title className="mb-3">{comic.title}</Card.Title>
        </Link>
        <Card.Text style={{ color: '#949494' }}>
          <p className="my-1">Issue Number: {comic.issueNumber}</p>

          {comic?.format && <p>Format: {comic.format}</p>}
        </Card.Text>
      </Card.Body>
    </ColoredCard>
  );
};

export default memo(ComicCard);
