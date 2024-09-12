import { useState } from 'react'
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay'
import Button from '../Button/Button'
import DatePicker from "react-datepicker";
import { subDays, addMonths } from 'react-datepicker/dist/date_utils.d.ts';
import "react-datepicker/dist/react-datepicker.css";

import './BookingForm.css'

export const validate = (formData, availableTimes) => {
    const currentErrors = []
    let now = new Date()
    if(formData.date < subDays(now,1) || addMonths(now,1) < formData.date) {
        currentErrors.push("Invalid Date: please select a date between today and one month from today.")
    }

    if(!availableTimes.includes(formData.time)) {
        currentErrors.push("Invalid Time: please select an available time from the list based on the date selected.")
    }

    if(formData.guests < 1 || 10 < formData.guests) {
        currentErrors.push("Invalid number of guests: please choose a number of guests from 1 to 10.")
    }

    return currentErrors
}

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

    const [errors, setErrors] = useState([])

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

    const handleSubmit = (event, formData) => {
        event.preventDefault()
        let currentErrors = validate(formData, availableTimes)
        if(currentErrors.length)
            setErrors(currentErrors)
        else
            submitHandler(formData)
    }

    return (
        <div id="form-page-container">
            <div className="form-page-content">
            <h1 id="reserve-a-table">Reserve a Table</h1>
                <h2 id="little-lemon-ch">Little Lemon - Chicago</h2>
                {errors.length ? <ErrorDisplay errors={errors}/> : null }
                <form id="booking-form" onSubmit={() => handleSubmit(event, formData)}>
                    <div className="input-group">
                        <label className="res-label required" htmlFor="res-date">Choose date</label>
                        <DatePicker
                            aria-label="Select date"
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
                            aria-label="Select Time"
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
                            aria-label="Number of guests"
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
                            <option aria-label="No occasion" value=""></option>
                            <option aria-label="Birthday" value="Birthday">Birthday</option>
                            <option aria-label="Anniversary" value="Anniversary">Anniversary</option>
                            <option aria-label="Business" value="Business">Business</option>
                            <option aria-label="Other" value="Other">Other</option>
                        </select>
                    </div>
                    <Button ariaLabel="Submit form" type="submit">Make Your Reservation</Button>
                </form>
            </div>
        </div>
    )
  }

  export default BookingForm