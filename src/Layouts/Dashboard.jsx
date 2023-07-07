import { FaCalendarAlt, FaHome, FaShoppingCart, FaStar, FaWallet, FaCalendarCheck } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu, AiFillShopping } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import useCart from "../Hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full">
                    <li className="text-center text-3xl font-bold uppercase mb-2">Happy Grill</li>
                    <li className="text-center text-[16px] font-bold uppercase mb-5">Restaurant & Steak House</li>
                    {/* Sidebar content here */}
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/"><FaHome /> User Home</NavLink></li>
                    <li className="font-bold text-[20px] mb-2">
                        <NavLink to="/dashboard/mycart"><FaShoppingCart /> My Cart
                            <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/dashboard/reservations"><FaCalendarAlt /> Reservation</NavLink></li>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/dashboard/history"><FaWallet /> Payment History</NavLink></li>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/dashboard/review"><FaStar /> Add Review</NavLink></li>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/dashboard/bookings"><FaCalendarCheck /> My Bookings</NavLink></li>
                    <div className="border border-spacing-3 border-purple-900 my-5"></div>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/menu"><AiOutlineMenu /> Menu</NavLink></li>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/order/dessert"><AiFillShopping /> Shop</NavLink></li>
                    <li className="font-bold text-[20px] mb-2"><NavLink to="/contact"><MdEmail /> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;