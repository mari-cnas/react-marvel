import { memo, useEffect } from 'react';

import useTitle from 'hooks/useTitle';

const NotFound: React.FC = () => {
  const setTitle = useTitle();

  useEffect(() => {
    setTitle('Page not found');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Page not found</h1>;
};

export default memo(NotFound);
