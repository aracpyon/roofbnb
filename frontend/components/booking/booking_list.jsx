import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import BookingListItem from './booking_list_item';
import { fetchBookings, destroyBooking } from '../../actions/booking_actions';
import { fetchSpots } from '../../actions/spot_actions';

const BookingList = props => {

  const currentUser = useSelector(state => state.entities.users[state.session.id])
  const bookings = useSelector(state => Object.values(state.entities.bookings))
  const spots = useSelector(state => state.entities.spots)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBookings(currentUser.id))
  }, [currentUser])

  const yesNobookings = bookings.length > 0 ? (
    <div className="booking-items-container">
      {
      bookings.map(booking => {
        return <BookingListItem booking={booking} key={booking.id} spots={spots} user={currentUser} destroyBooking={destroyBooking} />
      })
      }
    </div>
  ) : (
    <div className="no-booking-container">
      <p className="no-booking-comment">you don't have anything coming up--start exploring ideas for your next trip</p>
      <div>
        <img className="travel" src={window.travel} />
      </div>
    </div>
  )
 
  return (
    <div className="booking-list">
      <div className="booking-list-container">
        <div className="booking-list-head">
          <h2 className="line1">Your Kangaroo Pouches</h2>
          <h3 className="line2">what's coming up</h3>
        </div>
        {yesNobookings}
      </div>
    </div>
  )
}

export default BookingList;