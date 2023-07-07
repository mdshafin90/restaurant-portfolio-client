import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Contact.css'
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationArrow } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';

const Contact = () => {
    return (
        <div>
            <div className='main-contact flex items-center w-full h-[800px] mb-5 uppercase text-white'>
                <div className='flex flex-col justify-center items-center w-[1000px] h-1/2 opacity-80 mx-auto bg-black'>
                    <h1 className='text-7xl font-bold text-white'>Contact Us</h1>
                    <p className='text-[16px] font-bold text-white mt-14'>would you like to try a dish ?</p>
                </div>
            </div>
            <div className='my-10'>
                <SectionTitle
                    subHeading={"Visit Us"}
                    heading={"Our Location"}
                ></SectionTitle>
            </div>
            <div className='mb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto'>
                <div className='border w-[400px] h-[260px]'>
                    <div className='w-full h-[50px] flex justify-center items-center bg-orange-400'>
                        <FiPhoneCall className='w-[50px] h-[25px]' />
                    </div>
                    <div className='uppercase flex flex-col justify-center items-center mt-12'>
                        <p className='font-bold text-[17px]'>Phone</p>
                        <p className='mt-5'>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className='border w-[400px] h-[260px]'>
                    <div className='w-full h-[50px] flex justify-center items-center bg-orange-400'>
                        <FaLocationArrow className='w-[50px] h-[25px]' />
                    </div>
                    <div className='uppercase flex flex-col justify-center items-center mt-12'>
                        <p className='font-bold text-[17px]'>ADDRESS</p>
                        <p className='mt-5'>2/6 Len Kochukhet Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='border w-[400px] h-[260px]'>
                    <div className='w-full h-[50px] flex justify-center items-center bg-orange-400'>
                        <BiTimeFive className='w-[50px] h-[25px]' />
                    </div>
                    <div className='uppercase flex flex-col justify-center items-center mt-12'>
                        <p className='font-bold text-[17px]'>WORKING HOURS</p>
                        <p className='mt-5'>
                            Mon - Fri: 08:00 - 22:00
                            <br />
                            Sat - Sun: 10:00 - 23:00
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-10'>
                <SectionTitle
                    subHeading={"Send Us a Message"}
                    heading={"Contact form"}
                ></SectionTitle>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Contact;