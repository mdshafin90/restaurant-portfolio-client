

const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                <figure>
                    <img src={image} />
                    <p className="bg-slate-900 text-white absolute right-0 top-5 mr-5 px-5 py-2 rounded-3xl font-bold">${price}</p>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;