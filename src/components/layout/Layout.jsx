import React from "react";
import UI from "./LayoutStyle";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <UI.Wrapper>
        <Header>
          {/* <UI.HeaderItem>
            <UI.Logo>
              <img src={logo} alt="logo image" />
            </UI.Logo>
            <UI.Info>
              <h1>journey.log</h1>
              <p>Frontend에 관심이 많고 떡볶이를 좋아합니다</p>
              <a
                href="https://github.com/jjiyeon"
                target="_blank"
                alt="journey github"
              >
                <i>github</i>
              </a>
            </UI.Info>
          </UI.HeaderItem> */}
        </Header>
      </UI.Wrapper>
    </>
  );
};

export default Layout;
