import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = (
        <>
            <button className="btn btn-ghost"><Link to="/">Home</Link></button>
            <button className="btn btn-ghost"><Link to="/contact">Contact Us</Link></button>
            <button className="btn btn-ghost"><Link to="/menu">Our Menu</Link></button>
            <button className="btn btn-ghost"><Link to="/order/dessert">Order Food</Link></button>
            <button className="btn btn-ghost"><Link to="/secret">Secret</Link></button>
            <Link to="/dashboard/mycart">
                <button className="btn">
                    <FaShoppingCart />
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>

            {user ?
                <>
                    <div className="flex items-center mx-2">
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                </> :
                <>
                    <button className="btn btn-ghost"><Link to="login">Login</Link></button>
                </>
            }
        </>
    );

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-[25px]"><Link to="/">Happy Grill</Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-blue-900 font-bold text-white px-[25px] rounded py-[14px]">Login</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
