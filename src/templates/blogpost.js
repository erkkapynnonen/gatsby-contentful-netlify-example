import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    return (
      <div>
        <h1>{post.title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.content,
          }}
        />

        <div><Link to="/">Go back to the homepage</Link></div>
      </div>
    )
  }
}

export default BlogPost

export const blogPostQuery = graphql`
  query blogPostQuery( $id : String! ) {
    contentfulBlogPost( id: { eq: $id } ) {
      id
      title
      content {
        content
      }
    }
  }
`