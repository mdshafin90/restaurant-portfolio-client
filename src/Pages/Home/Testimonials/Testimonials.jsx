import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"What Our Client Says"}
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex justify-center mt-7">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                        </div>
                        <p className="py-10 px-24">{review.details}</p>
                        <h2 className="text-3xl">{review.name}</h2>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;