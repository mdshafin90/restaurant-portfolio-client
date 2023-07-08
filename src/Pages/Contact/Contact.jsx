import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Contact.css'
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationArrow } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { BsSendFill } from 'react-icons/bs';

const Contact = () => {

    const handleContactSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const textarea = form.textarea.value;
        console.log(name, email, phone, address, textarea)
    }

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
            <div className='mb-10 border p-14 mx-auto'>
                <form onSubmit={handleContactSubmit} className='w-full'>
                    <div className='flex w-[full] justify-center mb-5'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[18px] font-bold">Your Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered sm:w-1/2 md:w-[500px]" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[18px] font-bold">Your Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name='email' placeholder="Email Address" className="input input-bordered sm:w-1/2 md:w-[500px]" />
                            </label>
                        </div>
                    </div>

                    <div className='flex w-[full] justify-center mb-5'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[18px] font-bold">Your Phone</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name='phone' placeholder="Your Phone Number" className="input input-bordered sm:w-1/2 md:w-[500px]" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[18px] font-bold">Your Address</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='address' placeholder="4/7 California USA" className="input input-bordered sm:w-1/2 md:w-[500px]" />
                            </label>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text text-[18px] font-bold">Your Message</span>
                        </label>
                        <textarea placeholder="Write Your Message Here" name='textarea' className="textarea textarea-bordered textarea-lg sm:w-1/2 md:w-[1100px] h-[250px]" ></textarea>
                    </div>

                    {/* React Recaptcha implement field */}

                    <div className='flex justify-center'>
                        <button className='bg-orange-700 w-[200px] h-[50px] text-[20px] text-white font-bold mt-10 flex justify-center items-center'>Message <BsSendFill className='flex items-center justify-center ml-3' /></button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Contact;