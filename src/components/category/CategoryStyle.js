import styled from "styled-components";
import { responsive } from "../util";

const CategoryContainer = styled.div`
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
  padding: 10px 20px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
  }
  @media ${responsive.desktop} {
    display: inherit;
    padding-left: 0;
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
  CategoryContainer,
  Category,
};
