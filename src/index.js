import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
