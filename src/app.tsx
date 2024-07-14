import { Router } from '@solidjs/router'
// @ts-expect-error
import routes from '~solid-pages'

const App = () => {
  return <Router>{routes}</Router>;
};

export default App;
