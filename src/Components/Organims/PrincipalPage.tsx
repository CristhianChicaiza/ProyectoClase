import Subtitle from "../atoms/Subtitle";
import AutomaticCarrousel from "../molecules/PrincipalWindow/Carousel";
import Characteristic from "../molecules/PrincipalWindow/Characteristic";
import Categories1 from "../../image/Categories/Categories1.jpg";
import Categories2 from "../../image/Categories/Categories2.jpg";
import Categories3 from "../../image/Categories/Categories3.jpg";
import Categories4 from "../../image/Categories/Categories4.jpg";

import ProductCategories from "../molecules/PrincipalWindow/Product";
import phone from "../../image/boxicons/phone.svg";
import repeat from "../../image/boxicons/repeat.svg";
import check from "../../image/boxicons/check.svg";
import truck from "../../image/boxicons/truck.svg";
import FeaturedProduct from "../molecules/PrincipalWindow/Featuredproducts";

function PrincipalPage() {
  return (
    <div>
      <AutomaticCarrousel />
      <div className="flex justify-center items-center mt-4 gap-4">
        <Characteristic text="Quiality Product" alt="" src={check} />
        <Characteristic text="Free Shipping" alt="icon Free Shipping" src={truck} />
        <Characteristic text="14-Day Return" alt="14-Day Return" src={repeat} />
        <Characteristic text="24/7 Support" alt="24/7 Support" src={phone} />
      </div>

      <Subtitle text='CATEGORIES' />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <ProductCategories textA='Ladies' alt='Ladies' src={Categories1} textB={"Conteo de productos"} />
      <ProductCategories textA='Gentlemen' alt='Gentlemen' src={Categories2} textB={"Conteo de productos"} />
      <ProductCategories textA='Girls' alt='Girls' src={Categories4} textB={"Conteo de productos"} />
      <ProductCategories textA='Children' alt='Children' src={Categories4} textB={"Conteo de productos"} />
      </div>

      <Subtitle text='FEATURED PRODUCTS' />
      <div>
        <FeaturedProduct textA='T-shirt' alt='T-shirt' src={Categories4} textB={"$5.00"} textC={"estrellas"}/>
      </div>


      <Subtitle text='RECENT PRODUCTS' />
    </div>
  );
}
export default PrincipalPage;