import React from "react";
import UI from "./CategoryStyle";

const Category = () => {
  return (
    <UI.Main>
      <UI.Category>
        <button>All</button>
        {/* <button>About</button> */}
        <button>리뷰</button>
        {/* <button>React</button> */}
        {/* <button>Javascript</button> */}
        <button>Book</button>
      </UI.Category>
    </UI.Main>
  );
};

export default Category;
