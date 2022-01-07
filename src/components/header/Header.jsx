import React from "react";
import UI from "./HeaderStyle";
// import logo from "../../images/kkulFace.jpg";

const Header = () => {
  return (
    <>
      <UI.HeaderContainer>
        <UI.Header>
          {/* <UI.Logo>
            <img src={logo} alt="logo image" />
          </UI.Logo> */}
          <h1>Journey.log</h1>
          {/* <UI.Info>
              <h1>journey.log</h1>
              <p>Frontend에 관심이 많고 떡볶이를 좋아합니다</p>
              <a
                href="https://github.com/jjiyeon"
                target="_blank"
                alt="journey github"
              >
                <i>github</i>
              </a>
            </UI.Info> */}
        </UI.Header>
      </UI.HeaderContainer>
    </>
  );
};

export default Header;
