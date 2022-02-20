import React, { Component } from 'react';

class Tracklist extends Component {
  render() {
    return (
      <div className="row trackList">
        <div className="col-12 col-lg-6 position-relative">
          <div className="trackList-bg position-absolute border border-light shadow-sm"></div>
          <img
          src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="img-fluid h-100" />
        </div>
        <div className="col-12 col-lg-6">
          <h6>TrackList</h6>
          <div className="lyric text-secondary pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim iure quaerat, qui minus magni sit dolorem. Error totam earum voluptatum quis quas necessitatibus inventore ullam magni sequi blanditiis. Blanditiis adipisci ex dolorem molestiae, quo consectetur illum itaque? Eius autem veritatis sapiente esse recusandae aut distinctio nobis, quas mollitia reprehenderit.
          </div>
          <button className="btn text-warning px-0">SHOW MORE</button>
        </div>
      </div>
    );
  }
}

export default Tracklist;
