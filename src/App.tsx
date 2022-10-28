import { memo } from 'react';

import Routes from 'Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from 'styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyles />
  </>
);

export default memo(App);
