import { memo } from 'react';

import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getImageUrl, strToSlug } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { CharacterImage, ColoredCard } from './styled';

interface ICharacterCardProps {
  children?: React.ReactNode;
  character: CharacterType;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <ColoredCard className="flex-column  my-4 w-100">
      <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
        <CharacterImage
          aspectRatio="1x1"
          coverimage={getImageUrl(character.thumbnail)}
        >
          <div />
        </CharacterImage>
      </Link>
      <Card.Body className="px-2">
        <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
          <Card.Title className="py-5 px-3">{character.name}</Card.Title>
        </Link>
      </Card.Body>
    </ColoredCard>
  );
};

export default memo(CharacterCard);
