import React from "react"
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default blog
