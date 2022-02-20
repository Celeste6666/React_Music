import React, { Component } from 'react';
import Tracklist from './TrackList';
import Relatedtrack from './RelatedTrack';
import './index.scss';

class Index extends Component {
  render() {
    return (
        <div className="d-flex">
          <div className="p-5 border border-top-0 border-2"
          style={{width: '60%'}}>
            <Tracklist />
          </div>
          <div className="p-5 border border-top-0 border-2"
          style={{width: '40%'}}>
          <Relatedtrack />
          </div>
        </div>
    );
  }
}

export default Index;
