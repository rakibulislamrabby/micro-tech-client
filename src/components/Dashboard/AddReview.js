import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase_init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const review = {
            name: user.displayName,
            email: user.email,
            description: data.description,
            rating: data.rating,
        }
        console.log(review);
        fetch("https://gentle-ocean-30847.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
                if (inserted.insertedId) {
                    toast.success("Added Successfull");
                    reset();
                }


            })
    }
    return (
        <div>
            <h2 className="text-2xl text-center text-primary font-bold">Hi {user?.displayName}</h2>
            <form className='w-full max-w-xs mx-auto' onSubmit={handleSubmit(onSubmit)}>
                {/* Name with validation */}
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Product Name is Required"
                            },

                        })}
                        value={user?.displayName}
                        type="name" placeholder="Product Name"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>

                {/* Description */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <input
                        {...register("description", {
                            required: {
                                value: true,
                                message: "description is Required"
                            },

                        })}
                        type="text" placeholder="Your Review"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                {/* rating  */}
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        {...register("rating", {
                            required: {
                                value: true,
                                message: "Rating is Required"
                            },

                        })}
                        type="number" placeholder="Rating"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>
                <input className='btn w-full  max-w-xs text-white' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddReview;