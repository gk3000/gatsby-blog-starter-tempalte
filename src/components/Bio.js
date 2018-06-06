import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './skull_front.png'


class Bio extends React.Component {
  render() {
    return (
      <div
      style={{
        display: 'flex',

      }}
      >
      <img
      src={profilePic}
      alt={`GK`}
      style={{
        
        marginBottom: 0,

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
