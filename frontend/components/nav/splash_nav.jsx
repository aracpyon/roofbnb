import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router';
import {SearchBarFormContainer} from '../search/search_form_container';

class SplashNav extends React.Component {
  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
    handleClick(){
      this.props.logout().then(this.props.history.push('/'));
    }

  render (){
    const { currentUser, logout, openModal } = this.props;

    const noCurrentUser = () => (
      <nav className = "splash-nav-right-contents" >
        <div className="splash-nav-contents-div"><Link className="splash-nav-contents" to="/spots" ><div className="splash-nav-buttons">Spots</div></Link></div>
        <div className="splash-nav-contents-div"><a className="splash-nav-contents" href="https://github.com/aracpyon"><div className="splash-nav-buttons">GitHub</div></a></div>
        <div className="splash-nav-contents-div"><div className="splash-nav-contents" onClick={() => openModal('signup')}><div className="splash-nav-buttons">Sign up</div></div></div>
        <div className="splash-nav-contents-div"><div className="splash-nav-contents" onClick={() => openModal('login')}><div className="splash-nav-buttons">Log In</div></div></div>
      </nav >
    )

    const yesCurrentUser = () => (
      <nav className="splash-nav-right-contents" >
        <div className="splash-nav-contents-div"><Link className="splash-nav-contents" to={`/${currentUser.id}/bookings`}><div className="splash-nav-buttons">My Trips</div></Link></div>
        <div className="splash-nav-contents-div"><div className="splash-nav-contents"><div className="nav-buttons">Messages</div></div></div>
        <div className="splash-nav-contents-div"><div className="splash-nav-contents" onClick={this.handleClick}><div className="splash-nav-buttons">Log out</div></div></div >
      </nav >
    )

    const render = currentUser ?
    yesCurrentUser(logout) :
    noCurrentUser()

  return (
    <div className="splash-nav-bar">
      <div className="splash-nav-left">
        <Link to="/"><img className="logo" src={window.logo} /></Link>
      </div>
      <div className="splash-nav-right">
        {render}  
      </div>
    </div>
  )
  }
}

export default withRouter(SplashNav);