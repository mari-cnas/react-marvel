import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';

import { CharacterType } from 'types/CharacterType';

interface IContextProps {
  characters: CharacterType[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  error: string | null;
  fetchCharacters: (page: number, search?: string) => Promise<void>;
  fetchCharacter: (charId: number) => Promise<void>;
  character: CharacterType | null;
}
interface ICharactersProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = useCallback(async (page: number, search?: string) => {
    setIsLoading(true);
    const limit = 36;
    const offset = (page - 1) * limit;
    setCurrentPage(page);
    setError(null);

    const params = {
      offset,
      limit,
      nameStartsWith: search?.length ? search : undefined,
    };

    try {
      const {
        data: {
          data: { results, total },
        },
      } = await Api.get('/characters', {
        params,
      });
      setCharacters(results);
      setTotalPages(Math.ceil(total / limit));
    } catch {
      setError('Não foi possível carregar os personagens');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCharacters(1);
  }, [fetchCharacters]);

  const fetchCharacter = useCallback(async (charId: number) => {
    setIsLoading(true);
    try {
      // setIsLoading(true);
      const {
        data: {
          data: { results },
        },
      } = await Api.get(`/characters/${charId}`);
      setCharacter(results[0]);
    } catch {
      setError('Não foi possível carregar o personagem');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          characters,
          isLoading,
          totalPages,
          currentPage,
          fetchCharacters,
          fetchCharacter,
          character,
          error,
        }),
        [
          characters,
          isLoading,
          totalPages,
          currentPage,
          fetchCharacters,
          fetchCharacter,
          character,
          error,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useCharacters = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider');
  }

  return context;
};
