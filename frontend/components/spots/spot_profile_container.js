import { fetchSpot, createSpot, updateSpot } from '../../actions/spot_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SpotProfile from './spot_profile';

const mSTP = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId]
  const photos = {
    amazon: [window.amazon1, window.amazon2, window.amazon3, window.amazon4], 
    met: [window.met1, window.met2, window.met3, window.met4],
    google: [window.google1, window.google2, window.google3, window.google4],
    eiffel: [window.eiffel1, window.eiffel2, window.eiffel3, window.eiffel4],
    timesquare: [window.timesquare1, window.timesquare2, window.timesquare3, window.timesquare4]
  }
  return {
    spot: spot,
    photos: photos,
    reviews: Object.values(state.entities.reviews),
    authors: state.entities.users
  
  }
}

const mDTP = dispatch => {
  
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createSpot: spot => dispatch(createSpot(spot)),
    updateSpot: spot => dispatch(updateSpot(spot)),
    openModal: () => dispatch(openModal('createBooking')),
    closeModal: () => dispatch(closeModal()) 
  }
}

export default connect(mSTP, mDTP)(SpotProfile);