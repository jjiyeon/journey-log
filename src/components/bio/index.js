import styled from "styled-components";

const BioContainder = styled.div`
  width: 100%;
  height: 100%;
`;
const Author = styled.div``;
const AuthorDescription = styled.div`
  width: 42.25rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .author-image {
    width: 120px;
    min-width: 72px;
    display: inline-block;
    margin-top: 12px;
    margin-right: 12px;
    margin-bottom: 0;
  }
`;
const AuthorName = styled.div`
  h1 {
    margin: 0;
  }
  .author-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 8px;
  }
`;
const AuthorIntro = styled.p`
  margin: 8px 0;
`;
const AuthorEmail = styled.span`
  display: flex;
`;
const AuthorGithub = styled.span`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #000;
  }
  .author-icon {
    width: 18px;
    height: 18px;
  }
`;

export default {
  BioContainder,
  Author,
  AuthorDescription,
  AuthorName,
  AuthorIntro,
  AuthorEmail,
  AuthorGithub,
};
