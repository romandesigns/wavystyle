// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// Styles
import "./utils/styles/normalize.css";
import "./utils/styles/style-variables.css";
// Components
import App from "./components/App";
// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./redux/reducers";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Others

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
