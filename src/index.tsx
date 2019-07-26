import 'beehive/esm/themes/tiffany-blue.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './modules';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { getUserInfo } from 'modules/actions/account';
import { parseQuery, addIntlLocalData } from './utils';

addIntlLocalData();
const store = configureStore();

store.dispatch(getUserInfo(parseQuery())).then((result: any) => {
  const render = () => {
    const Root = () => (
      <Provider store={store}>
        <App />
      </Provider>
    );
    ReactDOM.render(<Root />, document.getElementById('root'));
  };
  if (result.res_code === 1) {
    render();
  }

});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
