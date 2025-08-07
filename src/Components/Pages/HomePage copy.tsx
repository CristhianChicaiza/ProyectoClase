import Navmenu  from '../molecules/Menu'
import PrincipalMenu from '../molecules/PrincipalMenu'
import Footer from '../Organims/Footer'
import PrincipalPage from '../Organims/PrincipalPage'

function HomePage() {
  return (
    <>
      <div>
        <PrincipalMenu/>
       <Navmenu/>
       <PrincipalPage/>       
      </div>
      <Footer />
   
    </>
  )
}
export default HomePage;
