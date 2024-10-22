import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
export const Navbar = () => {

    return (<>
        <nav className="menu">
                <NavLink to="/" exact activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/catalog" activeClassName="active">
                    Catalog
                </NavLink>
                <NavLink to="/cart" activeClassName="active">
                    Cart
                </NavLink>
        </nav>
    </>);
}






