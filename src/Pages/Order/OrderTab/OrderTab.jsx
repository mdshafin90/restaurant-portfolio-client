import FoodCard from "../../../components/FoodCard/FoodCard";
import './OrderTab.css'

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const OrderTab = ({ items }) => {

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 6; // Number of items to display per page
    const pageCount = Math.ceil(items.length / itemsPerPage); // Total number of pages

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    const paginatedItems = items.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div>
            <Swiper
                pagination={Pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Array.from({ length: pageCount }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                            {paginatedItems.map((item) => (
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="pagination">
                {Array.from({ length: pageCount }).map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-button ${index === currentPage ? "active" : ""
                            }`}
                        onClick={() => handlePageChange(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>

    );
};

export default OrderTab;
