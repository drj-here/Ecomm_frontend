import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/product";

function Home() {
    return ( 
        <NavBar>
            <ProductList/>
        </NavBar>
     );
}

export default Home;