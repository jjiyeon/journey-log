import React from "react";
import UI from "./index";

const Skils = () => {
  return (
    <>
      <UI.SkilContainer>
        <UI.Skils>
          <UI.SkilList>
            <UI.SkilLi>
              <span>Javascript</span>
            </UI.SkilLi>
            <UI.SkilLi>
              <span>Typescript</span>
            </UI.SkilLi>
            <UI.SkilLi>
              <span>React.js</span>
            </UI.SkilLi>
            <UI.SkilLi>
              <span>HTML</span>
            </UI.SkilLi>
            <UI.SkilLi>
              <span>CSS</span>
            </UI.SkilLi>
          </UI.SkilList>
        </UI.Skils>
      </UI.SkilContainer>
    </>
  );
};

export default Skils;
