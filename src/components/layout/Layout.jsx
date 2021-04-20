import React from "react";

import UI from "./LayoutStyle";
import logo from "../../images/kkulFace.jpg";

const Layout = () => {
  return (
    <>
      <UI.Wrapper>
        <UI.Header>
          <UI.HeaderItem>
            <UI.Logo>
              <img src={logo} alt="logo image" />
            </UI.Logo>
            <UI.Info>
              <h1>journey.log</h1>
              <p>Frontend에 관심이 많고 떡볶이를 좋아합니다</p>
              <a href="https://github.com/jjiyeon">github</a>
              <a>About</a>
            </UI.Info>
          </UI.HeaderItem>
        </UI.Header>
        <UI.Main>
          <UI.Category>
            <button>About</button>
            <button>React</button>
            <button>Javascript</button>
            <button>프로젝트</button>
          </UI.Category>
        </UI.Main>
        <UI.Footer>Footer</UI.Footer>
      </UI.Wrapper>
    </>
  );
};

export default Layout;
