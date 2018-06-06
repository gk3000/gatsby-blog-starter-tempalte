import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './skull_front.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
      >
      <img
      src={profilePic}
      alt={`GK`}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
      }}
      />
      <p>
      Posted by <strong>GK</strong> from the sunny Barcelona. I am writing about whatever I want to.{' '}
      <a href="https://twitter.com/gk3000">
      Me on Twitter
      </a>
      </p>
      </div>
      )
  }
}

export default Bio
