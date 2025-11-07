import Trackingui from '../components/globalsearch/trackingui'
import Header from '../layout/header-3'
import Footer from '../layout/footer/footer'
const tracking=()=>{
    return (
            <div>
         
    <div className='flex items-center justify-center w-full h-[20vh] '>
        <Header />
 </div> 
      
                  <Trackingui />
                   
            <Footer />
        </div>
    )
}   
export default tracking
