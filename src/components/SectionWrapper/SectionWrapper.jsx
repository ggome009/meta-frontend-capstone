import './SectionWrapper.css'

let SectionWrapper = ({classes, children}) => {
    return(
        <section className={'section-wrapper ' + classes}>
            {children}
        </section>
    )
};

export default SectionWrapper;