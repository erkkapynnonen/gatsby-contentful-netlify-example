import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../utils/gallery'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>

    <h2>Here's my gallery:</h2>
    <Gallery />
    
    <h2>Here are my subpages:</h2>
    <ul>
      <li><Link to="/subpage/">A subpage</Link></li>
    </ul>
    
    <h2>Here are my posts:</h2>
    <ul>
      <li><Link to="/blogpost/">A post</Link></li>
    </ul>
  </div>
)

export default IndexPage
