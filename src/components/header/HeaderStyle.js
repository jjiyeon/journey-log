import styled from "styled-components";
import { responsive } from "../util";

const HeaderContainer = styled.div`
  width: calc(100% / 3);
  height: 100%;
  color: tomato;
`;
const Header = styled.header`
  width: 100%;
  height: 10rem;
  position: relative;
  background-color: #9696ea;
`;
const HeaderItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 50%;
  transform: translate(0, -50%);

  @media ${responsive.desktop} {
    max-width: 42.25rem;
    padding-top: calc(77px / 2);
    top: inherit;
    transform: inherit;
    display: inherit;
    /* position: absolute;
    text-align: inherit;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%); */
    margin: 0 auto;
  }
`;
const Logo = styled.div`
  display: inline-block;
  margin-right: 10px;
  img {
    width: 72px;
    height: 72px;
    border-radius: 22px;
  }
`;
export default {
  HeaderContainer,
  Header,
  HeaderItem,
  Logo,
};
