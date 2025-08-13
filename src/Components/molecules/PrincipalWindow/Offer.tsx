import { Link } from "react-router-dom";
import category1 from "../../../image/category1.jpg";
import ButtonURL from "../../atoms/ButtonURL";

const AutomaticCarrousel = () => {
 

  return (
    <>

<div>
        <Link to="/Login">
            <ButtonURL label="Login"/>
        </Link>
</div>
</>
  );
}
export default AutomaticCarrousel;