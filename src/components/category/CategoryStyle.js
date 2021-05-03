import styled from "styled-components";
const size = {
  desktop: "770px"
};
const responsive = {
  desktop: `(min-width: ${size.desktop})`
};
const Main = styled.div`
  max-width: 42.25rem;
  margin: 0 auto;
  overflow-x: scroll;
  white-space: nowrap;
  @media ${responsive.desktop} {
    margin: 0 auto;
    overflow-x: inherit;
  }
`;
const Category = styled.div`
  /* display: inline-block; */
  text-align: center;
  padding: 10px 20px;
  @media ${responsive.desktop} {
    /* width: 100%; */
    display: inherit;
    /* height: 60px; */
    text-align: center;
    padding-top: 10px;
  }
  button {
    height: 40px;
    padding: 14px 16px 16px;
    line-height: 1;
    margin: 0px 5px 0px 0px;
    border: 1px solid #9696ea;
    border-radius: 1rem;
    background: #e6e6fa;
    color: #9696ea;

    @media ${responsive.desktop} {
      margin: 5px;
      cursor: pointer;
    }
  }
`;

export default {
  Main,
  Category
};
