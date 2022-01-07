import React from "react";
import UI from "./CategoryStyle";

const Category = () => {
  return (
    <UI.CategoryContainer>
      <UI.Category>
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>리뷰</button>
          </li>
          <li>
            <button>Book</button>
          </li>
        </ul>
        {/* <button>About</button> */}
        {/* <button>React</button> */}
        {/* <button>Javascript</button> */}
      </UI.Category>
    </UI.CategoryContainer>
  );
};

export default Category;
