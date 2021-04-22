import styled from "styled-components";
import gitIcon from "../../images/Octicons-mark-github.png";

const size = {
  desktop: "770px"
};
const responsive = {
  desktop: `(min-width: ${size.desktop})`
};

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
  position: relative;
  display: flex;
  justify-content: center;
  top: 50%;
  transform: translate(0, -50%);

  @media ${responsive.desktop} {
    position: absolute;
    text-align: inherit;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
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
const Info = styled.div`
  display: inline-block;
  color: #fff;
  text-align: left;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 80%;
  }
  a {
    i {
      font-size: 0;
      &:before {
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        background: url(${gitIcon}) no-repeat;
        background-size: cover;
      }
    }
  }
`;

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
