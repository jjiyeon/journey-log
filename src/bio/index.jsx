import React from "react";
import { graphql } from "gatsby";
import UI from "./index";
import Image from "gatsby-image";

const Bio = () => {
  const { author, social, introduction } = data.site.siteMetadata;
  console.log(author, social, introduction);

  return (
    <>
      <UI.BioContainder>
        <UI.Author>
          <UI.AuthorDescription>
            {/* <Image
              className="author-image"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                borderRadius: `100%`,
              }}
            /> */}
          </UI.AuthorDescription>
        </UI.Author>
      </UI.BioContainder>
    </>
  );
};
const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/kkulFace.jpg/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
          instagram
        }
      }
    }
  }
`;
export default Bio;
