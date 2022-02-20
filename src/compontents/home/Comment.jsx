import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comment extends Component {
  render() {
    return (
      <div className="d-flex justify-content-evenly align-items-center py-3 border shadow-sm">
        <div className="avatar mx-2">
          <img
            src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="" className="rounded-circle" />
        </div>
        <input type="text" placeholder="寫下您的評論" className="w-50 p-2 border shadow-sm" />
        <span className="text-secondary">
          <FontAwesomeIcon icon="fa-solid fa-heart" className="me-2" />
          LIKED
        </span>
        <span className="text-secondary">
          <FontAwesomeIcon icon="fa-solid fa-recycle" className="me-2" />
          REPOSTED
        </span>
        <span className="text-warning">
          <FontAwesomeIcon icon="fa-solid fa-share-from-square" className="me-2" />
          SHARE
        </span>
        <span className="text-warning">
          <FontAwesomeIcon icon="fa-solid fa-list-ul" className="me-2" />
          MORE
        </span>
      </div>
    );
  }
}

export default Comment;
