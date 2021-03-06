import React from "react";
import Img from "gatsby-image";
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    
    console.log(this.props.data.markdownRemark)
    
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const profileImage = get(this, 'props.data.profileImage')
    const { previous, next } = this.props.pathContext
    
    let headerimg
    if ((post.frontmatter.headerimg)) {
      headerimg = (          
        <Img fadeIn={true} sizes={post.frontmatter.headerimg.childImageSharp.sizes} />
      )
    }

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        {headerimg}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `0 ${rhythm(3 / 4)}`,
          }}
        >
          
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          
          
          
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio profileImage={profileImage} />
  
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}
  
            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        headerimg {
          childImageSharp {
            sizes(maxHeight: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    profileImage: imageSharp(id: { regex: "/profile-pic/" }) {
      sizes(maxWidth: 400 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
