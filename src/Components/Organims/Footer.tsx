import OneColumn from "../molecules/Footer/OneColumn";
import TwoColumn from "../molecules/Footer/TwoColumn";
import FourColumn from "../molecules/Footer/FourColumn";
import ThreeColumn from "../molecules/Footer/ThreeColumn";
import Text from "../atoms/Text";

function Footer() {
    return (
        <>
         <div className="bg-gray-600 text-white">
            <div className="py-4 grid grid-cols-4 gap-4">
            <div>
                <OneColumn />
            </div>
             <div>
                <TwoColumn />
            </div>
             <div>
                <ThreeColumn />
            </div>
             <div>
                <FourColumn />
            </div>
            </div>
        <div>
            <Text text="© Derechos reservados" />
        </div>
        </div>
        </>
    );
}
    export default Footer;
