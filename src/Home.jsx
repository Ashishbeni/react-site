import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Banner from "./banner";
import BrandDiscription from "./brandDiscription"
import ProductsScroller from "./productsScroller";
import BestSellingProductsHome from "./BestSellingProductsHome";
import Footer from "./footer";

function Home() {
  return (
    
 <div>
    {/* <Banner></Banner> */}
    <ProductsScroller></ProductsScroller>
    <BrandDiscription></BrandDiscription><br /><br />
    <BestSellingProductsHome></BestSellingProductsHome>
    <br />

    <Footer></Footer>
  </div>
  
  );
}

export default Home;