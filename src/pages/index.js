import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Category from "../components/category/Category";
import ContentsList from "../components/list/ContentsList";
import { createGlobalStyle } from "styled-components";
import Bio from "../components/bio/Bio";
import Skils from "../components/skils/Skils";

// styles
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;
// markup
const App = ({ data }) => {
  console.log("index...!");
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Bio />
        <Skils />
        {/* <ContentsList /> */}
      </Layout>
    </>
  );
};
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            category
            draft
            description
            template
          }
        }
      }
    }
  }
`;
export default App;
