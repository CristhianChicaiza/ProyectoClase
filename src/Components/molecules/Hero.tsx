import Title from '../atoms/Subtitle'
import TextCont from '../atoms/Text'
import ButtonFile from '../atoms/ButtonURL'

function Hero() {

  return (
    <>
      <div>
<Title text="Titulo de evento"/>
<TextCont text="Concepto de la pagia web" />
<TextCont text="Concepción de textos" />
  <ButtonFile label="Recerva tu lugars" />
 {/* <img src={category1} className="Image" alt="Imagen" /> */}
      </div>
    </>
  )
}

export default Hero;