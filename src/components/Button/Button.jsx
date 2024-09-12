import "./Button.css"

let Button = ({children, className, onClick, ariaLabel}) => {
    return (
        <button aria-label={ariaLabel} className={`btn + ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button