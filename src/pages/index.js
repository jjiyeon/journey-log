import * as React from "react";
import Layout from "../components/layout/Layout";
import { createGlobalStyle } from "styled-components";

// styles
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;
// markup
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
};

export default App;
