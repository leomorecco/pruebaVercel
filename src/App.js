
import { useItemsCart } from "./hooks/useItemsCart"
import { GlobalRouter } from "./routes/GlobalRouter";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

export const App = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();
    
    return (
        <>
            <Banner />
            <div>
                <GlobalRouter
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
            <Footer />
        </>
    )
}

export default App;