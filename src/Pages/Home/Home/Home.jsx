import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import ContactNum from "../ContactNum/ContactNum";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefService from "../ChefService/ChefService";
import { Helmet } from "react-helmet-async";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Happy Grill | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <ChefService />
            <PopularMenu />
            <ContactNum />
            <ChefRecommend />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;