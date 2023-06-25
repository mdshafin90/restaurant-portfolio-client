import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="mb-10 featured-item p-10">
            <div className="pb-8">
                <SectionTitle
                    subHeading={"Check it Out"}
                    heading={"Featured Menu"}
                ></SectionTitle>
            </div>
            <div className="flex justify-center items-center text-white px-14 py-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-6">
                    <p className="font-bold">Aug 20, 2023</p>
                    <p className="uppercase font-bold text-[25px]">Where Can I Go Some ?</p>
                    <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis officiis corrupti aliquam earum facilis officia maxime ea dolor culpa nihil minus quae quia laborum repudiandae mollitia quibusdam, quidem illo error in vitae rerum. Ducimus, officia eligendi, obcaecati error quam, laborum vitae cumque veniam dolor quidem dolores excepturi mollitia soluta.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;