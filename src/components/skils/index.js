import styled from "styled-components";

const SkilContainer = styled.div``;
const Skils = styled.div``;
const SkilList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SkilLi = styled.li`
  display: inline-block;
  margin: 0.25rem 6px 0.25rem 0;
  background-color: rgb(102, 103, 171);
  border-radius: 15px;
  color: #fff;
  box-sizing: border-box;
  white-space: normal;

  span {
    display: block;
    padding: 8px;
    font-size: 13px;
    box-sizing: border-box;
  }
`;

export default {
  SkilContainer,
  Skils,
  SkilList,
  SkilLi,
};
