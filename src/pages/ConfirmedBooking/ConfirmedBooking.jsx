import { useLocation } from 'react-router-dom'
import { FaRegCalendar, FaRegClock, FaRegUser, FaBirthdayCake } from "react-icons/fa";
import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import Button from '../../components/Button/Button'

import './ConfirmedBooking.css'

const ConfirmedBooking = ({
  date,
  time,
  guests,
  occasion
}) => {
  const state = useLocation().state

  const getDateString = (date) => {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return `${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
  }

  return (
    <PageLayout>
      <div className="page-container">
        <div className="page-content">
          <h1 id="title">Confirmed!</h1>
          <div className="reservation-details">
            <p><FaRegCalendar/> {getDateString(state.date)}</p>
            <p><FaRegClock/> {state.time}</p>
            <p><FaRegUser/> {state.guests} {`guest${state.guests < 2 ? '' : 's'}`}</p>
            {state.occasion ? <p><FaBirthdayCake/> {state.occasion}</p> : null}
          </div>
          <Link to="/"><Button ariaLabel="Navigate to home page">Home</Button></Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default ConfirmedBooking