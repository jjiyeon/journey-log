const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    console.log(value);
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  console.log("create page");
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`);

  return await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
              draft
            }
          }
        }
      }
    }
  `).then((result) => {
    // Create blog posts pages.
    console.log("create page then.................");
    console.log(JSON.stringify(result));
    const posts = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => !node.frontmatter.draft && !!node.frontmatter.category
    );
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      console.log(post.node.fields.slug);
      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: post.node.fields.slug,
        },
      });
    });
  });
};
