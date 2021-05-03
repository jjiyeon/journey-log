import React from "react";
import UI from "./CategoryStyle";

const Category = () => {
  return (
    <UI.Main>
      <UI.Category>
        <button>All</button>
        <button>About</button>
        <button>React</button>
        <button>Javascript</button>
        <button>프로젝트</button>
      </UI.Category>
    </UI.Main>
  );
};

export default Category;
