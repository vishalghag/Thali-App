
import { NavLink } from "react-router-dom";
import routes from './../routes/action.json'
import { useSelector } from 'react-redux';

const Navbar = () => {

    const items = useSelector((state) => state.cart)

  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <span className='logo'>Redux Thali App</span>
        <div>
            <NavLink className='navLink' to={routes.HOME}>
                HOME
            </NavLink>
            <NavLink className='navLink' to={routes.CART}>
                CART
            </NavLink>
            <span className='cartCount'>
                Cart Item: {items.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar