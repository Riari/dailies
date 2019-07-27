import { Provider } from 'unistore/preact';
import Router from 'preact-router';

import './style';
import store from './store';

import Home from './components/Home';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Home path="/" />
			</Router>
		</Provider>
	);
}

export default App;
