import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorage_key = 'ecf851763e96e8ecc8aa85989a918bf9'

    const onSubmit = (data) => {
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        price: data.price,
                        minimumQuantity: data.minimumQuantity,
                        availableQuantity: data.availableQuantity,
                        description: data.description,
                        img: img
                    }
                    //send database
                    fetch("https://gentle-ocean-30847.herokuapp.com/product", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Added Successfull");
                                reset();
                            }
                            else {
                                toast.error("Failed to add product");
                            }

                        })
                }
                // console.log("imgbb", result);
            })
    }
    return (
        <div>
            <h2 className="text-2xl text-center text-primary">Add A New Product</h2>
            <form className='w-full max-w-xs mx-auto' onSubmit={handleSubmit(onSubmit)}>
                {/* Name with validation */}
                <div className="form-control w-full max-w-xs ">
                    {/* <label className="label">
                        <span className="label-text">Name</span>
                    </label> */}
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Product Name is Required"
                            },

                        })}
                        type="name" placeholder="Product Name"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>

                {/* Price  */}
                <div className="form-control w-full max-w-xs ">
                    <input
                        {...register("price", {
                            required: {
                                value: true,
                                message: "Price is Required"
                            },

                        })}
                        type="number" placeholder="Price"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>
                {/* Minimum Quantity */}
                <div className="form-control w-full max-w-xs ">
                    <input
                        {...register("minimumQuantity", {
                            required: {
                                value: true,
                                message: "minimumQuantity is Required"
                            },

                        })}
                        type="number" placeholder="MinimumQuantity"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.minimumQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumQuantity.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>
                {/* Available Quantity */}
                <div className="form-control w-full max-w-xs ">
                    <input
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: "availableQuantity is Required"
                            },

                        })}
                        type="number" placeholder="AvailableQuantity"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>
                {/* Description */}
                <div className="form-control w-full max-w-xs">
                    <input
                        {...register("description", {
                            required: {
                                value: true,
                                message: "description is Required"
                            },

                        })}
                        type="text" placeholder="Product description"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>


                {/* Photo */}
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required"
                            },

                        })}
                        type="file" placeholder="Product Image"
                        className="input  w-full max-w-xs" />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>
                <input className='btn w-full  max-w-xs text-white' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddProduct;