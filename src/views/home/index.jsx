import React, { Component, Fragment } from 'react';
import Banner from '../../compontents/home/banner';
import Comment from '../../compontents/home/Comment';
import Music from '../../compontents/home/music'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Comment />
        <Music/>
      </Fragment>
    );
  }
}

export default Home;
