import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyNavLink from './MyNavLink';

class Sidebar extends Component {
  state = {
    links: [
      {
        path: '/',
        icon: 'fa-house-chimney',
        content: 'HOME'
      },
      {
        path: 'collection',
        icon: 'fa-folder',
        content: 'COLLECTION'
      },
      {
        path: 'upload',
        icon: 'fa-cloud-arrow-up',
        content: 'UPLOAD'
      }
    ],
  }
  render() {
    const {links} = this.state
    return (
      <Fragment>
        <ul className="list-unstyled">
          {links.map(link=>(
            <li className="list-item py-3 border-bottom" key={link.content}>
              <MyNavLink to={link.path}>
                <FontAwesomeIcon icon={`fa-solid ${link.icon}`} className="me-2"/>
                <span>{link.content}</span>
              </MyNavLink>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Sidebar;
