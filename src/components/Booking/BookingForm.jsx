import { useState } from 'react'
import Button from '../Button/Button'
import DatePicker from "react-datepicker";
import { addMonths } from 'react-datepicker/dist/date_utils.d.ts';
import "react-datepicker/dist/react-datepicker.css";

import './BookingForm.css'


const BookingForm = ({
    availableTimes,
    dispatchTimes,
    submitHandler
}) => {
    const [formData, setFormData] = useState({
        date: new Date(),
        time: availableTimes[0],
        guests: 1,
        occasion: ""
    })

    const dateChangedHandler = (date) => {
        dispatchTimes({type: 'changed_date', date: date})
        setFormData({
            ...formData,
            date: date
        })
    }

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div id="form-page-container">
            <div className="form-page-content">
            <h1 id="reserve-a-table">Reserve a Table</h1>
                <h2 id="little-lemon-ch">Little Lemon - Chicago</h2>
                <form id="booking-form" onSubmit={() => submitHandler(event, formData)}>
                    <div className="input-group">
                        <label className="res-label required" htmlFor="res-date">Choose date</label>
                        <DatePicker
                            selected={formData.date}
                            minDate={new Date()}
                            maxDate={addMonths(new Date(),1)}
                            className="res-input"
                            onChange={(date) => dateChangedHandler(date)}
                            name="res-date"
                            id="res-date"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="res-label required" htmlFor="res-time">Choose time</label>
                        <select
                            name="time"
                            onChange={changeHandler}
                            className="res-input"
                            id="res-time"
                            required
                        >
                            {availableTimes.map(time => <option value={time} key={time}>{time}</option>)}
                        </select>
                    </div>
                    <div className="input-group">
                        <label className="res-label required" htmlFor="guests">Number of guests</label>
                        <input
                            name="guests"
                            onChange={changeHandler}
                            className="res-input"
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="res-label" htmlFor="occasion">Occasion</label>
                        <select
                            name="occasion"
                            onChange={changeHandler}
                            className="res-input"
                            id="occasion"
                        >
                            <option value=""></option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Business">Business</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <Button type="submit">Make Your Reservation</Button>
                </form>
            </div>
        </div>
    )
  }

  export default BookingForm