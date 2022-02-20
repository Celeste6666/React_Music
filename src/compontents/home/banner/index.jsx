import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Audioplayer from './AudioPlayer';
import AudioTrack from './AudioTrack';
import './banner.scss';

class Index extends Component {
  state = {
    audioCtx: null,
    musicBarDataArr: null,
    analyser: null,
  }
  
  getAudioVisualData=(audioCtx, analyser, musicBarDataArr)=>{
    this.setState({audioCtx, analyser, musicBarDataArr})
  }

  render() {
    return (
      <div
      className="banner px-5 py-3 border-top border-bottom border-4 border-info
      d-flex flex-column position-relative">
        <div className="singer d-flex align-items-center">
          <img src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="" className="img-fluid rounded-circle border border-3 border-info" />
          <div className="ms-2 text-success">
            <div>Foolish</div>
            <div>
              <small>
                <FontAwesomeIcon icon="fa-solid fa-users" className="me-1" />
                65
              </small>
              <small className="ms-2">
                <FontAwesomeIcon icon="fa-solid fa-headphones-simple"  className="me-1" />
                65
              </small>
            </div>
          </div>
        </div>
        <Audioplayer getAudioCtx={this.getAudioVisualData} {...this.state} />
        <AudioTrack {...this.state} />
      </div>
    );
  }
}

export default Index;
