import { Provider } from 'unistore/preact';
import Router from 'preact-router';

import './style';
import store from './store';

import EditTask from './components/pages/EditTask';
import Home from './components/pages/Home';

if (module.hot) {
  require('preact/debug');
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Home path="/" />
        <EditTask path="/task/new" />
      </Router>
    </Provider>
  );
}

export default App;
