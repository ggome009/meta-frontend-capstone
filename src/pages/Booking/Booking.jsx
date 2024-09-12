import { useState, useEffect, useReducer } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import BookingForm from '../../components/Booking/BookingForm'
import { fetchAPI, submitAPI } from '../../utils/api'
import { useNavigate } from 'react-router-dom'

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'changed_date' : {
      const newTimes = fetchAPI(action.date)
      return newTimes
    }
  }
}

export const initializeTimes = (date) => {
  const now = new Date()
  const times = fetchAPI(now)
  return times
}

function Booking() {
  let now = new Date()
  const navigate = useNavigate()
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, now, initializeTimes)
  const [payload, setPayload] = useState(null)

  const submitForm = (formData) => {
      setPayload(formData)
  }

  useEffect(() => {
    if(payload) {
      submitAPI(payload)
      localStorage.setItem("formData", JSON.stringify(payload))
      let bookingInfo = {
        date: payload.date,
        time: payload.time,
        guests: payload.guests,
        occasion: payload.occasion
      }
      navigate("/booking-confirmation", { state: bookingInfo})
    }
  }, [payload])

    return (
      <PageLayout>
          <BookingForm
            availableTimes={availableTimes}
            dispatchTimes={dispatchTimes}
            submitHandler={submitForm}
          />
      </PageLayout>
    )
}

export default Booking