import { useReducer } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import BookingForm from '../../components/Booking/BookingForm'
import { fetchAPI, submitAPI } from '../../utils/api'

const getToday = () => {
  const today = new Date();
  let dd = today.getDate();
  dd = dd < 10 ? `0${dd}` : dd;
  let mm = today.getMonth()+1;
  mm = mm < 10 ? `0${mm}` : mm;
  const yyyy = today.getFullYear();
  return `${yyyy}-${dd}-${mm}`;
}

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'changed_date' : {
      const newTimes = fetchAPI(action.date)
      return ({
        date: action.date,
        times: newTimes
      })
    }
  }
}

const initializeTimes = (date) => {
  const now = new Date()
  const times = fetchAPI(now)
  return {
    date: date,
    times: times
  }
}

function Booking() {
  let today = getToday()

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, today, initializeTimes)

  const submitHandler = (e) => {
      e.preventDefault();
      console.log(formData)
  }

    return (
      <PageLayout>
          <BookingForm
            availableTimes={availableTimes}
            dispatchTimes={dispatchTimes}
            submitHandler={submitHandler}
          />
      </PageLayout>
    )
}

export default Booking