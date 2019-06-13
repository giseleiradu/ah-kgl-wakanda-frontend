import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

import './SideBar.scss';

/**
 * SideBar component
 * @returns {void}
 */
class SideBar extends Component {
  state = {
    checked: true,
    navLinks: [
      { key: 0, to: '/home', icon: 'far fa-newspaper', name: 'Home' },
      { key: 1, to: '//my-articles', icon: 'fas fa-list-ul', name: 'My articles' },
      { key: 2, to: '/bookmarks', icon: 'far fa-heart', name: 'Bookmarks' },
      { key: 3, to: '/stats', icon: 'fas fa-signal', name: 'Statistics' },
      { key: 4, to: '/complaint', icon: 'fas fa-file', name: 'Complaints' },
      { key: 5, to: '/sidebar', icon: 'far fa-user', name: 'Create user' },
      { key: 6, to: '/logout', icon: 'fas fa-sign-out-alt', name: 'Logout' },
    ],
  };

  /**
   * SideBar component
   * @returns {void}
   */
  check = () => {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  };

  user = ({ user: { profileImage, firstName, lastName, username } }) => (
    <React.Fragment>
      <div className="p-avatar row">
        <div className="avatar" style={{ backgroundImage: `url(${profileImage})` }} />
      </div>

      <div className="name row">{`${firstName} ${lastName}`}</div>
      <div className="username row">{username}</div>
    </React.Fragment>
  );

  toggle = ({ checked }) => (
    <React.Fragment>
      <hr />
      <label htmlFor="emailNotif" onClick={this.check} className="switch">
        <input name="emailNotif" type="checkbox" onChange={this.check} checked={checked} />
        <span className="slider round" />
      </label>
      <span className="email-notif">Email Notification</span>
    </React.Fragment>
  );

  navigation = ({ navLinks }) =>
    navLinks.map((navLink, key) => (
      <NavLink key={key} to={navLink.to} className="item row">
        <i className={navLink.icon} />
        <span>{navLink.name}</span>
      </NavLink>
    ));

  accountStats = ({ posts, followers, following }) => (
    <React.Fragment>
      <div className="item">
        <div className="label">Posts</div>
        <div className="data">{posts}</div>
      </div>
      <div className="item">
        <div className="label">Followers</div>
        <div className="data">{followers}</div>
      </div>
      <div className="item">
        <div className="label">Following</div>
        <div className="data">{following}</div>
      </div>
    </React.Fragment>
  );

  /**
   * Home component
   * @returns {void}
   */
  render() {
    const { user, display = true } = this.props;
    return (
      <nav style={{ display: display ? 'flex' : null }}>
        <div className="user">{this.user(this.props)}</div>
        <div className="info row">{this.accountStats(user)}</div>
        <div className="navigation">{this.navigation(this.state)}</div>
        <div className="notif">{this.toggle(this.state)}</div>
      </nav>
    );
  }
}

SideBar.propTypes = {
  user: PropTypes.object.isRequired,
  display: PropTypes.bool.isRequired,
};

export default SideBar;