import ButtonURL from '../atoms/ButtonURL'
import Logo from '../atoms/Logo'
import Navmenu  from '../molecules/Menu'
import Subtitle from '../atoms/Subtitle'
import PrincipalMenu from '../molecules/PrincipalMenu'
import Footer from '../Organims/Footer'
import Catalog from '../Organims/Catalog'
import Alert from '../atoms/Alert'
import AlertButton from '../molecules/AlertButton'
import Carrousel from '../molecules/Manualcarrousel'
import AutomaticCarrousel from '../molecules/AutomaticCarrucel'

function HomePage() {
  return (
    <>
      <div>
        <PrincipalMenu/>
       <Navmenu />
       <h2 className="text-3xl font-semibold text-center text-red-600">Welcome to our event!</h2>
       <Carrousel/>
       <Subtitle text='DISEÑA TU ESTILO' />
       <AutomaticCarrousel/>
       <Subtitle text='Catalogo por categorias' />
       <Subtitle text='Fashion Clothes' />
       <Subtitle text='Preguntas frecuentes' />
    <ButtonURL label='Register'/>
    <Logo text='Firt time' />
    <ButtonURL label='Regiter' url='https://www.espn.com.ec/futbol/equipo/_/id/502/hjk-helsinki'/>
      </div>
      <Catalog />
<Alert/>
<br></br>
<AlertButton/>
<br></br>


<br></br>

      <Footer />
   
    </>
  )
}
export default HomePage;
