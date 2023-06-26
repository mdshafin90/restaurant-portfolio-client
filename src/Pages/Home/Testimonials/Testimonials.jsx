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
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"What Our Client Says"}
                heading={"Testimonials"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center mx-20 my-20">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="py-10">{review.details}</p>
                        <h2 className="text-3xl">{review.name}</h2>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;