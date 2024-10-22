import { useNavigate } from "react-router-dom";
import '../Style/ProductCardView.css';

export const ProductCardView = ({ handler, id, name, description, price,image }) => {

    const navigate = useNavigate();

    const onAddProduct = (product) => {
        console.log(product);
        handler(product);
        navigate('/cart');
    }
    
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img src={image} alt={name} className="card-img-top" />
                    <p>{description}</p>
                    <p>$ {price}</p>
                    <button className="button"
                        onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button>
                </div>
            </div>

            
        </>
    )
}
