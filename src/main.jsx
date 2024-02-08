import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import App from "./Components/App.jsx";
import store from "./app/store.js";
import "./index.css";

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => console.log(error.message)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
