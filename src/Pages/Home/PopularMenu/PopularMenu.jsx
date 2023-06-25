import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline mx-auto border-0 border-b-4 mt-6">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;