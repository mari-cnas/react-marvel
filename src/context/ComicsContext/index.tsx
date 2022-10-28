import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';

import { ComicType } from 'types/ComicType';

interface IContextProps {
  comics: ComicType[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  error: string | null;
  fetchComics: (page: number, search?: string) => Promise<void>;
  fetchComic: (comId: number) => Promise<void>;
  comic: ComicType | null;
}
interface IComicsProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const ComicsProvider: React.FC<IComicsProviderProps> = ({
  children,
}) => {
  const [comics, setComics] = useState<ComicType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [comic, setComic] = useState<ComicType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchComics = useCallback(async (page: number, search?: string) => {
    setIsLoading(true);
    const limit = 36;
    const offset = (page - 1) * limit;
    setCurrentPage(page);
    setError(null);

    const params = {
      offset,
      limit,
      titleStartsWith: search?.length ? search : undefined,
    };

    try {
      const {
        data: {
          data: { results, total },
        },
      } = await Api.get('/comics', { params });
      setComics(results);
      setTotalPages(Math.ceil(total / limit));
    } catch {
      setError('Não foi possível carregar os quadrinhos');
    } finally {
      setIsLoading(false);
    }
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchComics(1);
  }, [fetchComics]);

  const fetchComic = useCallback(async (comId: number) => {
    setIsLoading(true);
    try {
      // setIsLoading(true);
      const {
        data: {
          data: { results },
        },
      } = await Api.get(`/comics/${comId}`);
      setComic(results[0]);
      setIsLoading(false);
    } catch {
      setError('Não foi possível carregar o quadrinho');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          comics,
          isLoading,
          totalPages,
          currentPage,
          fetchComics,
          fetchComic,
          comic,
          error,
        }),
        [
          comics,
          isLoading,
          totalPages,
          currentPage,
          fetchComics,
          fetchComic,
          comic,
          error,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useComics = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider');
  }

  return context;
};
