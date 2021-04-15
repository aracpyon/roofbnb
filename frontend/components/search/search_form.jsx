import React from 'react';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
// import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import './date-picker.css';

class SearchForm extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         location: 'New York',
         checkIn: null,
         checkOut: null,
         adults: 1,
         children: 0,
         focusedInput: START_DATE,
         open: false,
         error: ""
      }

      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(field){
      return e => {this.setState({[field]: e.target.value})}
   }

   render(){
      return(
         <div className="search-form-container">
            <div className="search-form-title">
               <h1 className="search-form-big-title">Find Places to stay on Roofbnb</h1>
               <p className="search-form-sub-title">Discover entire homes and private rooms perfect for any trip.</p>
            </div>
            
            <form className="search-form">
               <div className="search-form-location">
                  <label for="location">LOCATION</label>
                  <input 
                     type="text"
                     name="location"
                     value={this.state.location}
                     onChange={this.handleChange('location')}
                  />
               </div>
               
               <div className="search-form-dates-container">
                  <div className="search-form-check-in">
                     <label for="check-in">CHECK IN</label>
                     <input
                        className="search-input"
                        type="text"
                        name="checkin"
                        value={this.state.checkIn}
                        onChange={this.handleChange('checkIn')}
                        placeholder="Add Date"
                     />
                  </div>
                  
                  <div className="search-form-check-out">
                     <label for="check-Out">CHECK OUT</label>
                     <input
                        className="search-input"
                        type="text"
                        name="checkOut"
                        value={this.state.checkOut}
                        onChange={this.handleChange('checkOut')}
                        placeholder="Add Date"
                     />
                  </div>
                  
               </div>
               
               <div className="search-form-guests-container">
                  <div className="search-form-adults">
                     <label for="adults">ADULTS</label>
                     <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option selected value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                     </select>
                  </div>

                  <div className="search-form-children">
                     <label for="children">CHILDREN</label>
                     <select>
                        <option selected value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                     </select>
                  </div>
               </div>

               <button className="search-form-button">Search</button>
            </form>
         </div>
      )
   }
}

export default SearchForm;