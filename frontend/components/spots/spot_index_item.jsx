import React from 'react';
import { withRouter } from 'react-router';
import { Redirect, Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const spotId = this.props.spot.id
    this.props.history.push(`/spots/${spotId}`);
  }

  render(){
 
    const { name, title, city, price } = this.props.spot;
    const photos = this.props.photos;

    return (
  
        <div className="section1-index-item" onClick={this.handleClick}>
          <div className="section1-photo-container">
              <img className="section1-photo" src={photos[name][0]} />
          </div>
            
          <div className="spot-index-info">
            <div className="item-city-rate">
              <span className="item-city">{city}</span>
              <span className="item-rate">
                <img className="item-star" src={window.star} />
                5.00</span>
            </div>
            <div className="item-title">{title}</div>
            <div className="item-price">
              <span>${price}</span>
              /night
            </div>
            
          </div>
        </div>  
      // </div>
    )
  }
}

export default withRouter(SpotIndexItem);
//wrap with withRouter when you need to use this.props.histroy.push('url)