import { Link } from "react-router-dom";

const NavBar = () => {

    const navOptions = <>
        <li><Link className="text-[17px] text-white hover:bg-none hover:bg-sky-400 hover:text-black font-bold" to="/">Home</Link></li>

        <li><Link className="text-[17px] text-white hover:bg-none hover:bg-sky-400 hover:text-black font-bold" to="/menu">Our Menu</Link></li>

        <li><Link className="text-[17px] text-white hover:bg-none hover:bg-sky-400 hover:text-black font-bold" to="/order/dessert">Order Food</Link></li>

        <li><Link className="text-[17px] text-white hover:bg-none hover:bg-sky-400 hover:text-black font-bold" to="/menu">Our Menu</Link></li>

        <li><Link className="text-[17px] text-white hover:bg-none hover:bg-sky-400 hover:text-black font-bold" to="/shop">Our Shop</Link></li>
    </>

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
                    <button className="bg-blue-900 font-bold text-white px-[25px] rounded  py-[14px]">Login</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;