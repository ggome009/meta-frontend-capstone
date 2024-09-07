import { useReducer } from 'react'
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

  const submitForm = (e, formData) => {
      e.preventDefault()
      let response = submitAPI(formData)
      localStorage.setItem("formData", JSON.stringify(formData))
      if(response) {
        navigate("/booking-confirmation")
      }
  }

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