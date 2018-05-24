import React from 'react'
import get from 'lodash/get'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import Img from "gatsby-image";

class Bio extends React.Component {
  render() {
    const profileImage = get(this, 'props.profileImage')

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <Img
          sizes={profileImage.sizes}
          alt={`craig t smith`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        
        <p>
          thought / written by me, <strong>craig t smith</strong> how very nice to meet you. <br/>
          <a href="https://twitter.com/craig_tsmith">
            i sometimes tweet
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
