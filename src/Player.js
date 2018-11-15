import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class Player extends Component {
  render () {
    return <ReactPlayer url='https://res.cloudinary.com/dmwi5lxjc/video/upload/v1542151195/lyft_nyxk83.mp4' width='80%' height='auto' playing loop muted />
  }
}

export default Player;