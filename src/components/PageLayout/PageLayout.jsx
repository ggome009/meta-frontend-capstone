import Header from './Header/Header'
import Footer from './Footer/Footer'

let PageLayout = ({children}) => {
    return(
        <>
        <Header/>
        {
            children
        }
        <Footer/>
        </>
        
    )
}

export default PageLayout