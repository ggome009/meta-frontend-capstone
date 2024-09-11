import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import Button from '../../components/Button/Button'

import './UnderConstruction.css'

const UnderConstruction = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <div className="page-content">
          <h1 id="title">Coming soon!</h1>
          <div className="reservation-details">
            <p>This page isn't quite ready yet. Check back later!</p>
          </div>
          <Link to="/"><Button>Home</Button></Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default UnderConstruction