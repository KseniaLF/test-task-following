import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { GlobalStyle } from "./constants/GlobalStyle";
import { Layout } from "./constants/Layout.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
