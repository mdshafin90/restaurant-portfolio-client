import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {

    return (
        <div className="mb-10">
            {title && <Cover bgImg={coverImg} title={title} />}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex flex-col items-center justify-center">
                    <button className="btn btn-outline sm:btn-sm md:btn-md lg:btn-lg border-0 border-b-4 mt-6">Order Your Favorite Food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;