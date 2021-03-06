import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// import 'react-dates/initialize';




import SpotsIndexContainer from './spots/spots_Index_container'
import MainPage from '../components/main/main_page';
import SessionModal from "./modal/session_modal";
import BookingModal from './modal/booking_modal';
import SpotProfileContainer from "./spots/spot_profile_container";
import BookingList from './booking/booking_list';
// import EditBookingContainer from "./booking/edit_booking_container";
import SearchIndexContainer from "./search/search_index_container";
import {NavContainer} from './nav/nav_container';
const App = () => (
  <div>
    <SessionModal />
    <BookingModal />
    <Route path={[`/spots/:spotId`, "/search", "/spots", '/:userId/bookings']} component={NavContainer} />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path={'/:userId/bookings'} component={BookingList} />
      <Route path={`/spots/:spotId`} component={SpotProfileContainer} />
      <Route exact path="/spots" component={SpotsIndexContainer}/>
      <Route path="/search" component={SearchIndexContainer} />
    </Switch> 
  </div>
);

export default App;