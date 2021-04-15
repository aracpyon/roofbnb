import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchSearchResult, fetchSpot } from '../../actions/spot_actions';

const mSTP = (state) => {
  const photos = {
    amazon: [window.amazon1, window.amazon2, window.amazon3, window.amazon4], 
    met: [window.met1, window.met2, window.met3, window.met4],
    google: [window.google1, window.google2, window.google3, window.google4],
    eiffel: [window.eiffel1, window.eiffel2, window.eiffel3, window.eiffel4],
    timesquare: [window.timesquare1, window.timesquare2, window.timesquare3, window.timesquare4]
  }
  return {
    searchForm: state.ui.search,
    spots: Object.values(state.entities.spots),
    photos: photos
  }
}

const mDTP = dispatch => {

  return {
    fetchSearchResult: (keyword) => dispatch(fetchSearchResult(keyword))
   
  }
}

export default connect(mSTP, mDTP)(SearchIndex);