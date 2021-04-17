import React from 'react';
import { Link } from 'react-router-dom';
import SpotsIndexContainer from '../spots/spots_Index_container';
import {SearchFormContainer} from "../search/search_form_container"
import {SplashNavContainer} from '../nav/nav_container';
class MainPage extends React.Component {
  render(){
    return(
      <div>
        <SplashNavContainer />
        <div className="splash">
          <div className="main-page-image">
            <img className="splash-photowall" src={window.photowall} />
            <SearchFormContainer />
          </div>

          <div className="main-page-content">
            <div className="headlines">
              <div className="headline">Roofbnb spots to stay</div>
              <div className="subheadline">
                A selection of places to stay verified for quality and design.
              </div>
            </div>
            <div className="image-link">
              <Link to="/spots">
                <img className="front-banner" src={window.banner} />
                <div>
                  <span>Spot</span>
                  <button>Explore stays</button>
                </div>
              </Link>
            
            </div>

          </div>
          <div id="main-bottom">
            <SpotsIndexContainer />
          </div>
            
        </div>
      </div>
      
      )

  }
}

export default MainPage;