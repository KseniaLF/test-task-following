import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { GlobalStyle } from "./constants/GlobalStyle";
import { Layout } from "./constants/Layout.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <BrowserRouter basename="/test-task-following">
        <App />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);
