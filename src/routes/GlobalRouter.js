import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "../components/CartView"
import { CatalogView } from "../components/CatalogView"
import Landing from '../views/Landing';


export const GlobalRouter = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems }) => {
    return (
        <Routes>

            
            <Route path="/" element={<Landing />} />    
            
            <Route
                path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />}
            />

            <Route path="cart" element={(
                cartItems?.length <= 0 ?
                    <div >No hay productos en el carrito de compras!</div>
                    :
                    (
                        <div>
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
            )} />

            <Route path="/" element={<Navigate to={'/catalog'} />} />

            

        </Routes>
    )
}