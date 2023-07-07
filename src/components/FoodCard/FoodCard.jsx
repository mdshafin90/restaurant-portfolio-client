import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const FoodCard = ({ item }) => {

    const { name, recipe, image, price, _id } = item;

    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch() // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully Added to the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order Your Favorite Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

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
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 w-[200px]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;