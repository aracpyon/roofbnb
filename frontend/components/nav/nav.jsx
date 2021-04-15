import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router';
import {SearchBarFormContainer} from '../search/search_form_container';

class Nav extends React.Component {
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
      <nav className = "nav-right-contents" >
        <div className="nav-contents-div"><Link className="nav-contents" to="/spots" ><div className="nav-buttons">Spots</div></Link></div>
        <div className="nav-contents-div"><a className="nav-contents" href="https://github.com/aracpyon"><div className="nav-buttons">GitHub</div></a></div>
        <div className="nav-contents-div"><div className="nav-contents" onClick={() => openModal('signup')}><div className="nav-buttons">Sign up</div></div></div>
        <div className="nav-contents-div"><div className="nav-contents" onClick={() => openModal('login')}><div className="nav-buttons">Log In</div></div></div>
      </nav >
    )

    const yesCurrentUser = () => (
      <nav className="nav-right-contents" >
        <div className="nav-contents-div"><Link className="nav-contents" to={`/${currentUser.id}/bookings`}><div className="nav-buttons">My Trips</div></Link></div>
        <div className="nav-contents-div"><div className="nav-contents"><div className="nav-buttons">Messages</div></div></div>
        <div className="nav-contents-div"><div className="nav-contents" onClick={this.handleClick}><div className="nav-buttons">Log out</div></div></div >
      </nav >
    )

    const render = currentUser ?
    yesCurrentUser(logout) :
    noCurrentUser()

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <Link to="/"><img className="logo" src={window.logo} /></Link>
        <SearchBarFormContainer />
      </div>
      <div className="nav-right">
        {render}  
      </div>
    </div>
  )
  }
}

export default withRouter(Nav);