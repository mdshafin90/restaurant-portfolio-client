
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className="flex space-x-2 m-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px] h-[100px]" src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}-----------------</h2>
                <p>{recipe}</p>
            </div>
            <p className=" text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;