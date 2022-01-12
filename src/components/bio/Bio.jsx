import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import UI from "./index";
import Image from "gatsby-image";

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, email, social, introduction } = data.site.siteMetadata;
        return (
          <UI.BioContainder>
            <UI.Author>
              <UI.AuthorDescription>
                <Image
                  className="author-image"
                  fluid={data.avatar.childImageSharp.fluid}
                  alt={author}
                  style={{
                    borderRadius: `100%`,
                  }}
                />
                <UI.AuthorName>
                  <h1>엄지연</h1>
                  <UI.AuthorIntro>{introduction}</UI.AuthorIntro>
                  <UI.AuthorEmail>
                    <Image
                      className="author-icon"
                      fluid={data.emailIcon.childImageSharp.fluid}
                    />
                    {email}
                  </UI.AuthorEmail>
                  <UI.AuthorGithub>
                    <Image
                      className="author-icon"
                      fluid={data.githubIcon.childImageSharp.fluid}
                    />
                    {social.github && (
                      <a href={`https://github.com/${social.github}`}>GitHub</a>
                    )}
                  </UI.AuthorGithub>
                </UI.AuthorName>
              </UI.AuthorDescription>
            </UI.Author>
          </UI.BioContainder>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/my.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emailIcon: file(absolutePath: { regex: "/email.png/" }) {
      childImageSharp {
        fluid(maxWidth: 20) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    githubIcon: file(absolutePath: { regex: "/github.png/" }) {
      childImageSharp {
        fluid(maxWidth: 20) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        email
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
