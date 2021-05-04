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

const Footer = styled.div``;
export default {
  Wrapper,
  Header,
  HeaderItem,
  Logo,
  Info,
  Footer
};
