import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SplashNav from './splash_nav';
import Nav from './nav';
import { openModal } from "../../actions/modal_actions";

const mSTP = ({session, entities}) => ({
  currentUser: entities.users[session.id]
})

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
})

export const SplashNavContainer = connect(mSTP, mDTP)(SplashNav);
export const NavContainer = connect(mSTP, mDTP)(Nav);