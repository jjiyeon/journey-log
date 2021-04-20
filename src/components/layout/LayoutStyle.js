import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.header`
  width: 100%;
  height: 10rem;
  position: relative;
  background-color: #9696ea;
`;
const HeaderItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
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
const Info = styled.div`
  display: inline-block;
  color: #fff;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 80%;
  }
  a {
    &:before {
      content: "";
      background: url("../../images/Octicons-mark-github.svg");
    }
  }
`;

const Main = styled.div`
  max-width: 42.25rem;
  margin: 0 auto;
`;
const Category = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  padding-top: 10px;
  /* background: #e6e6fa; */
  button {
    width: fit-content;
    height: 40px;
    margin: 5px;
    border: 1px solid #9696ea;
    border-radius: 1rem;
    background: #e6e6fa;
    color: #9696ea;
  }
`;

const Footer = styled.div``;
export default {
  Wrapper,
  Header,
  HeaderItem,
  Logo,
  Info,
  Main,
  Category,
  Footer
};
