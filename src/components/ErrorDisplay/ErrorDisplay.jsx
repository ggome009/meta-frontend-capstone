import './ErrorDisplay.css'

const ErrorDisplay = ({errors}) => {
    return(
        <div className="error-display">
            <p>Please address the following errors:</p>
            <ul>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
        </div>
    )
}

export default ErrorDisplay