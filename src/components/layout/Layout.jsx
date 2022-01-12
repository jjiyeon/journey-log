import React from "react";
import UI from "./LayoutStyle";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <UI.Container>
        <Header />
        <UI.Wrapper>{children}</UI.Wrapper>
      </UI.Container>
    </>
  );
};

export default Layout;
