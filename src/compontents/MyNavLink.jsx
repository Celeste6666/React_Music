import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class MyNavLink extends Component {
  linkActive=({isActive})=>{
    const activeClass = isActive ? 'text-warning' : 'text-secondary';
    return `btn ${activeClass}`
  }

  render() {
    return (
      <NavLink {...this.props} className={this.linkActive} />
    )
  }
}


