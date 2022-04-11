import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const blog = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
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
        body
      }
    }
  }
`

export default blog
