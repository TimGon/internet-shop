import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import { getProduct } from "../components/ApiFunction/function";
import Product from "../components/Product/Product";
import ErrorBoundary from "../components/Errors/Error";
import ErrorMsg from "../components/Errors/ErrorMsg";
import Filter from "../components/FilterProducts/Filter";
import { useProduct } from "../components/Contexts/ProductContext";
import { useAuth } from "../components/Contexts/AuthContext";
import ProdCreate from "../components/Create/CreateProd";
import Search from "../components/SearchProducts/Search";
const Products = () => {
    
    const location = useLocation();
    const prod = location.pathname.split('/product/').join('');

    const [stateUse, setStateUse] = useState(true); 

    const { 
        product, 
        setProduct, 
        result, 
        setResult,
        categ, 
        setCateg,
    } = useProduct();

    const { status } =useAuth();

    useEffect(()=> {
        if(stateUse) {
            getProduct(prod, setProduct, setCateg, setResult);
            setStateUse(false);
        } 
    }, [stateUse, prod])

    return(
        <div className="main__container">
            {status === 'admin' ?
            <ProdCreate/>:''
            }
            <Search/> 
            <div className="rigths flex">
                <Filter/>
                <ErrorBoundary ErrorComponent={ErrorMsg}>
                    <div className="products">
                        <h1 className="title">
                            {categ[2] === prod ? categ[1]: ''}
                        </h1>
                        <div className="center flex">
                            {product !== null && result !== null && product && result ? 
                                <Product nameProd={result} nameCateg={prod}/>
                                : ''
                            }
                        </div>
                    </div>
                </ErrorBoundary>
            </div>
        </div>
    )   
}

export default Products;