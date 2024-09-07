import { useReducer } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import BookingForm from '../../components/Booking/BookingForm'
import { fetchAPI, submitAPI } from '../../utils/api'

function ConfirmedBooking() {
    return (
      <PageLayout>
          <p>Booking confirmed!</p>
      </PageLayout>
    )
}

export default ConfirmedBooking