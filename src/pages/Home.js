import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/productList";

function Home() {
    return ( 
        <NavBar>
            <ProductList/>
        </NavBar>
     );
}

export default Home;