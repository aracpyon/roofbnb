import { fetchSearchResult } from '../../actions/spot_actions';
import SearchForm from './search_form';
import SearchBarForm from './search_bar_form';
import { connect } from 'react-redux';
import { sendSearchForm } from '../../actions/search_actions';
import { withRouter, Redirect } from 'react-router-dom';
// import { START_DATE, END_DATE } from 'react-dates/src/constants';

const mDTP = dispatch => {

   return {
     sendSearchForm: (form) => dispatch(sendSearchForm(form))
   }
 }
// const mDTP = (dispatch) => ({
//   fetchSearchResult: (keyword) => dispatch(fetchSearchResult(keyword))

// })

export const SearchFormContainer = connect(null, mDTP)(SearchForm);
export const SearchBarFormContainer = connect(null, mDTP)(withRouter(SearchBarForm))