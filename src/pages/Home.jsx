import "../css/Home.css";
import img1 from "../assets/images/beautifulmonkey.jpg";
import img2 from "../assets/images/suit-monkey.jpg";

import Spin from "../components/Loader";
import ProductCard from "../components/ProductCARDWORK";


function Home() {
  return (
    <>
      
      {/* <NavBar /> */}
      <Spin />
      {/* <Hero heading='Welcome to Home page'/> */}
      <h1 className="bg-danger text-light">Welcome to Home Page</h1>
      <div
        className=""
        style={{
          backgroundColor: "green",
          height: "100%",
          borderRadius: "15px",
        }}
      >
        {/* <ProductCard /> */}
        <img src={img2} height='100%' width='100%' />
      </div>
    </>
  );
}

export default Home;
