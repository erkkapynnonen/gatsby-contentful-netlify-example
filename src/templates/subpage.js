import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class SubPage extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
    return (
      <div>
        <h1>{page.title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: page.content.content,
          }}
        />

        <div><Link to="/">Go back to the homepage</Link></div>
      </div>
    )
  }
}

export default SubPage

export const pageQuery = graphql`
  query pageQuery( $id : String! ) {
    contentfulPage( id: { eq: $id } ) {
      id
      title
      content {
        content
      }
    }
  }
`