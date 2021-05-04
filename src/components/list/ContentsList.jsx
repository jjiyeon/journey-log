import React from "react";
import UI from "./ContentsListStyle";

const ContentsList = () => {
  return (
    <>
      <UI.ListWrapper>
        <UI.ListUl>
          <UI.ListLi>
            <UI.Title>
              퇴사 회고
              <p>2021.05.04</p>
            </UI.Title>

            <UI.Contents>
              퇴사한지 2달이 지났지만 회고하는 시간을 가져보는 나란 사람 P
              지독하다 지독해..
            </UI.Contents>
          </UI.ListLi>
        </UI.ListUl>
      </UI.ListWrapper>
    </>
  );
};

export default ContentsList;
