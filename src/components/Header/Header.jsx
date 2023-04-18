import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

const {user, logOut} = useContext(AuthContext)
console.log(user);
const handleLogOut = () =>{
    logOut()
    .then(result =>{ })
    .catch(error =>{
        console.log(error);
    })
}

    return (
        <nav className='Header'>
           <img src={logo} alt="" srcSet="" />
           <div>
                <Link to="/">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/manage_inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
                <Link to="/signup">Sign Up </Link>
                {user && <span> Welcome {user.email}<button onClick={handleLogOut}> Sign Out</button> </span> }
           </div>
        </nav>
    );
};

export default Header;