import styled from "styled-components";
import { size, responsive } from "../util";
const ListWrapper = styled.div`
  max-width: 42.25rem;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px 0 20px;
  @media ${responsive.desktop} {
    padding: 0;
  }
`;
const ListUl = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListLi = styled.li``;
const Title = styled.h2`
  margin: 0;
  color: #333;
  p {
    font-size: 12px;
    display: inline;
    margin: 10px;
    font-style: italic;
    font-weight: 400;
  }
`;
const Date = styled.p`
  margin: 0;
  font-size: 12px;
`;
const Contents = styled.p`
  color: #333;
`;
export default {
  ListWrapper,
  ListUl,
  ListLi,
  Title,
  Date,
  Contents
};
