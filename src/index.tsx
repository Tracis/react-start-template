import "beehive/esm/themes/tiffany-blue.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./modules";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { getUserInfo } from "modules/actions/account";
import { parseQuery } from "./utils";

if (!Intl.PluralRules) {
  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/dist/locale-data/zh");
  require("@formatjs/intl-pluralrules/dist/locale-data/en");
}

// @ts-ignore
if (!Intl.RelativeTimeFormat) {
  require("@formatjs/intl-relativetimeformat/polyfill");
  require("@formatjs/intl-relativetimeformat/dist/locale-data/zh");
  require("@formatjs/intl-relativetimeformat/dist/locale-data/en");
}

const store = configureStore();
const render = () => {
  const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  ReactDOM.render(<Root />, document.getElementById("root"));
};

store
  .dispatch(getUserInfo(parseQuery()))
  .then((result: any) => {
    if (result.res_code === 1) {
      render();
    }
  })
  .catch(() => {
    render();
  });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
