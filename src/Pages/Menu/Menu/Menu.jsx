import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category == 'offered')

    return (
        <div>
            <Helmet>
                <title>Happy Grill | Menu</title>
            </Helmet>
            <Cover bgImg={menuImg} title={"Our Menu"} />

            {/* Main Cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offer"}></SectionTitle>

            {/* offered item */}
            <MenuCategory items={offered} />

            {/* dessets item */}
            <MenuCategory items={dessert} title="dessert" coverImg={dessertImg} />

            {/* pizza items */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg} />

            {/* salads items */}
            <MenuCategory items={salad} title="salad" coverImg={saladImg} />

            {/* soup items */}
            <MenuCategory items={soup} title="soup" coverImg={soupImg} />
        </div>
    );
};

export default Menu;