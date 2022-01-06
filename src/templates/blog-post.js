// markdown-template.js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  console.log("======================blogTemplate======================");
  console.log(frontmatter);
  console.log(data);
  return (
    <>
      <Layout />
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        category
      }
    }
  }
`;
