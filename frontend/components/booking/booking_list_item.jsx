import React from 'react';
import { withRouter } from 'react-router';

const BookingListItem = props => {
  const handleClick = () => {
    const spotId = props.booking.spot_id;
    props.history.push(`/spots/${spotId}`);
  }
 
  const dateFilter = isoDate => {
    const dateArr = isoDate.slice(0, 10).split("-");
    dateArr.push(dateArr.shift());
    return dateArr.join(".")
  }
  const handleDelete = () => {
    props.destroyBooking(props.booking.id);
    props.history.push(`/${props.user.id}/bookings`);
  }
 
  const { booking, spots } = props;
  console.log(props)
  const spot = spots[booking.spot_id];
  const { start_date, end_date } = props.booking;
   
  return (
    <div className="booking-item-content" >
      <div className="booking-date-title">
        <h2 className="booking-date">
          <span className="from" >from</span>
          {dateFilter(start_date)}
          <span className="to" >to</span>
          {dateFilter(end_date)}
        </h2>
        <h3>{spot.city}</h3>
        <h3>{spot.title}</h3>
        <button onClick={handleDelete}>cancel</button>
      </div>
      <div className="booking-item-photo">
        {/* <img className="booking-image" src={spot.photoUrls[]} onClick={handleClick}/> */}
      </div>
    </div>
  )
}

export default withRouter(BookingListItem);