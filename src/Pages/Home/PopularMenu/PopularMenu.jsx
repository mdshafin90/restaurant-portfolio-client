import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex flex-col items-center justify-center">
                <button className="btn btn-outline sm:btn-sm md:btn-md lg:btn-lg border-0 border-b-4 mt-6">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;