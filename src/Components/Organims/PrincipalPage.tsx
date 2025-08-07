import Subtitle from "../atoms/Subtitle";
import AutomaticCarrousel from "../molecules/PrincipalWindow/Carousel";
import Characteristic from "../molecules/PrincipalWindow/Characteristic";
import Quality from "../../image/boxicons/arrowup.svg";
import Categories1 from "../../image/Categories/Categories1.jpg";
import Categories2 from "../../image/Categories/Categories2.jpg";
import ProductCategories from "../molecules/PrincipalWindow/Product";


function PrincipalPage() {
  return (
    <div>
      <AutomaticCarrousel />
      <div className="flex justify-center items-center mt-4 gap-4">
        <Characteristic text="Quiality Product" alt="" src={Quality} />
        <Characteristic text="Free Shipping" alt="icon Free Shipping" src={Quality} />
        <Characteristic text="14-Day Return" alt="14-Day Return" src={Quality} />
        <Characteristic text="24/7 Support" alt="24/7 Support" src={Quality} />
      </div>

      <Subtitle text='CATEGORIES' />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <ProductCategories textA='Electronics' alt='Electronics' src={Categories1} textB={"Conteo de productos"} />
      <ProductCategories textA='Electronics' alt='Electronics' src={Categories2} textB={"Conteo de productos"} />
      </div>

      <Subtitle text='FEATURED PRODUCTS' />
      <Subtitle text='RECENT PRODUCTS' />
    </div>
  );
}
export default PrincipalPage;