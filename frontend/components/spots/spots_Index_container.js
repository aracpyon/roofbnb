import { fetchSpots, fetchSpot, createSpot, updateSpot } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import SpotsIndex from './spots_index';

const mSTP = ({entities}) => {
  const photos = {
    amazon: [window.amazon1, window.amazon2, window.amazon3, window.amazon4], 
    met: [window.met1, window.met2, window.met3, window.met4],
    google: [window.google1, window.google2, window.google3, window.google4],
    eiffel: [window.eiffel1, window.eiffel2, window.eiffel3, window.eiffel4],
    timesquare: [window.timesquare1, window.timesquare2, window.timesquare3, window.timesquare4]
  }
  return {
    spots: Object.values(entities.spots),
    photos: photos
  }
}

const mDTP = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createSpot: spot => dispatch(createSpot(spot)),
    updateSpot: spot => dispatch(updateSpot(spot))
  }
}

export default connect(mSTP, mDTP)(SpotsIndex);