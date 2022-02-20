import React, { Component, Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Relatedtrack extends Component {
  render() {
    return (
      <Fragment>
        <h6 className="d-flex justify-content-between">
          <span>
          <FontAwesomeIcon icon="fa-solid fa-headphones-simple" className="me-2 text-secondary" />
          Related Track
          </span>
          <span className="text-warning">
            View All
          </span>
        </h6>
        <ul className="list-unstyled mt-3">
          <li className="d-flex">
            <img
            src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="" className="img-thumbnail w-25" />
            <div className="w-75 px-2 text-secondary">
              <h6 className="text-dark">JIIB-Somewday</h6>
              <span>Grek</span>
              <div className="icons d-flex justify-content-between">
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-play" className="me-1" />
                  <span>542</span>
                </span>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-heart" className="me-1" />
                  <span>542</span>
                </span>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-recycle" className="me-1"  />
                  <span>542</span>
                </span>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-message" className="me-1" />
                  <span>542</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Relatedtrack;
