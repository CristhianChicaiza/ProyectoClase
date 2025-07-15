import GeneralText from "../atoms/GeneralText";
function Footerdesign() {
    return (
        <footer id="footer" className="bg-blue-800 text-white py-4">
            <GeneralText text="Ubicación: Av. Grandos" />
            <GeneralText text="Teléfono: 123-456-7890" />
            <GeneralText text="Correo: ccc@gmail"/>
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} CD. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Follow us on 
                    <a href="https://twitter.com" className="text-blue-400 ml-1">Twitter</a>, 
                    <a href="https://facebook.com" className="text-blue-400 ml-1">Facebook</a>, 
                    <a href="https://instagram.com" className="text-blue-400 ml-1">Instagram</a>
                </p>
            </div>
        </footer>
    );
}
    export default Footerdesign;