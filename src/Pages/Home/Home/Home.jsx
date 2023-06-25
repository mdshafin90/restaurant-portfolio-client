import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import ContactNum from "../ContactNum/ContactNum";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefService from "../ChefService/ChefService";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <ChefService />
            <PopularMenu />
            <ContactNum />
            <ChefRecommend />
            <Featured />
        </div>
    );
};

export default Home;