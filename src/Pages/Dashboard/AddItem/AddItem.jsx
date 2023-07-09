import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'WoW Food Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className="w-4/5 my-5">
            <Helmet>
                <title>Happy Grill | Add Item</title>
            </Helmet>
            <SectionTitle subHeading={"What's New"} heading={"add an item"}></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5" >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Name *</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-border border-blue-600" />
                </div>

                <div className="flex mt-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Categories *</span>
                        </label>
                        <select
                            {...register("category", { required: true })}
                            className="select select-border border-blue-600" defaultValue="Pick One">
                            <option disabled>Pick One</option>
                            <option>Dessert</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Deshi</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-5">
                        <label className="label">
                            <span className="label-text font-bold">Price *</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-border border-blue-600" />
                    </div>
                </div>

                <div className="form-control mt-5">
                    <label className="label">
                        <span className="label-text">Recipe Details *</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-border border-blue-600 textarea-lg sm:h-[100px] md:h-[250px]" placeholder="Recipe Details"></textarea>
                </div>

                <div className="form-control w-full  my-5">
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-border border-blue-600 w-2/3" />
                </div>

                <div className='flex justify-center'>
                    <button className='bg-orange-700 w-[200px] h-[50px] text-[20px] text-white font-bold flex justify-center items-center'>Add Item <ImSpoonKnife className='flex items-center justify-center' /></button>
                </div>
            </form >
        </div >
    );
};

export default AddItem;