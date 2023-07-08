import moment from 'moment/moment';
import footerImg from '../../../assets/footerImg/footer-icon.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-neutral text-white w-full">
                <div className="p-10 m-0 w-full h-full">
                    <img className='w-[100px] h-[100px]' src={footerImg} alt="" />
                    <p>Happy Grill Restaurant<br />Providing Delicious Food since 1992 - Present</p>
                </div>
                <div className="bg-[#111827] m-0 p-10 w-full h-full">
                    <span className="footer-title text-[16px] text-white">Follow Us on</span>
                    <div className='flex w-[200px] justify-between'>
                        <div className='cursor-pointer'>
                            <FaFacebook className='w-[35px] h-[35px]' />
                        </div>
                        <div className='cursor-pointer'>
                            <FaYoutube className='w-[35px] h-[35px]' />
                        </div>
                        <div className='cursor-pointer'>
                            <FaLinkedin className='w-[35px] h-[35px]' />
                        </div>
                        <div className='cursor-pointer'>
                            <FaInstagram className='w-[35px] h-[35px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer bg-black footer-center p-4 font-bold text-white">
                <div>
                    <p>Copyright © {moment().format("YYYY")} - All right reserved by Happy Grill Restaurant</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;