import styled from "styled-components";
import gitIcon from "../../images/Octicons-mark-github.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  Info,
  Footer,
};
