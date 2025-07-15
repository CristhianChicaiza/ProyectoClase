import Image from "../atoms/img";
import ButtonURL from "../atoms/ButtonURL";
import { Link } from "react-router-dom"; 
import Footer from "../Organims/Footer";
function Gallery () {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Gallery</h1>
      <p className="text-lg">This is the gallery page.</p>
      <Image
        src="https://imgs.search.brave.com/LGWHlH0ZRQ3UpUpFjkF1G9FhDtn2SWz78ILgolgs9_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90aWdy/ZS1ibGFuYy1hdmVj/LWFpbGVzLW1hcmNo/YW50LSVDMyVBMC10/cmF2ZXJzLXVuZS1m/b3IlQzMlQUF0LW15/c3RpcXVlLTM2OTA2/NjAxNi5qcGc" />
    </div>
    
    <div className="flex justify-center items-center mt-4">
          <Link to="/">
            <ButtonURL label="Go to Home"/>
          </Link>
    </div>
    <div>
      <Footer />
    </div>
</>
  );
}
export default Gallery;