import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase_init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const [userInfo, setUserInfo] = useLoadingUserInfo(user?.email);
    const onSubmit = (data) => {
        const email = user.email;
        const profile = {
            email: user.email,
            address: data.address,
            education: data.education,
            phone: data.phone,
            linkedin: data.linkedin,
        };
        console.log(profile);
        fetch(`https://gentle-ocean-30847.herokuapp.com/user/profile/${email}`, {
            method: "PUT",
            headers: {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            },
            body: JSON.stringify(profile),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount > 0) {

                    toast.success(` is Successfully Updated`)
                }
            });
    }
    return (
        <div className="container">
            <h1 className="text-center text-3xl">
                Hello{" "}
                <span className="text-[#fd715c] font-extrabold">
                    {user?.displayName}
                </span>
            </h1>

            {/* table */}
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    <tbody>
                        {/* email*/}
                        <tr className="active">
                            <td>
                                <strong>Email: </strong>
                            </td>
                            <td>{user?.email}</td>
                        </tr>
                        {/* address*/}
                        <tr>
                            <td>
                                <strong>Address: </strong>
                            </td>
                            {/* <td>{userInfo?.address}</td> */}
                        </tr>
                        {/* education*/}
                        <tr className="active">
                            <td>
                                <strong>Education: </strong>
                            </td>
                            {/* <td>{userInfo?.education}</td> */}
                        </tr>
                        {/* phone*/}
                        <tr>
                            <td>
                                <strong>Phone: </strong>
                            </td>
                            {/* <td>{userInfo?.phone}</td> */}
                        </tr>
                        {/* linkedin*/}
                        <tr className="active">
                            <td>
                                <strong>Linkedin Profile: </strong>
                            </td>
                            <td>
                                {/* <a
                                    href={userInfo?.linkedin}
                                    target="_blank"
                                    className="text-blue-700 text-sm underline"
                                >
                                    {userInfo?.linkedin}
                                </a> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* form */}
            <form className='w-full max-w-xs mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-[#fd715c] text-3xl font-bold'>Edit Profile</h2>
                {/* address with validation */}
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        {...register("address", {
                            required: {
                                value: true,
                                message: "Address is Required"
                            },

                        })}

                        type="name" placeholder="Your address"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>


                {/* Description */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        {...register("education", {
                            required: {
                                value: true,
                                message: "education is Required"
                            },

                        })}
                        type="text" placeholder="Subject-University"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                {/* phone  */}
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        {...register("phone", {
                            required: {
                                value: true,
                                message: "phone is Required"
                            },

                        })}
                        type="number" placeholder="Phone"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>
                {/* linked in  */}
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">linkedin Profile link</span>
                    </label>
                    <input
                        {...register("linkedin", {
                            required: {
                                value: true,
                                message: "linkedin is Required"
                            },

                        })}
                        type="link" placeholder="linkedin-Profile Link"
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                        {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                    </label>
                </div>

                <input className='btn w-full  max-w-xs text-white' type="submit" value="ADD" />
            </form>
            {/* 
            <div className="pb-20 flex justify-center mt-10">
                <div className="card bg-purple-500 shadow-xl w-full">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-4xl">Update Details</h2>
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <textarea
                                        type="textarea"
                                        className="input input-bordered "
                                        placeholder="Your Address"
                                        name="address"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Education</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered "
                                        placeholder="Subject, University"
                                        name="education"
                                    />
                                </div>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Contact Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered "
                                        placeholder="Your Phone Number"
                                        name="phone"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Linkedin Profile</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered "
                                        placeholder="Linkedin Profile Link"
                                        name="linkedin"
                                    />
                                </div>

                                <div className="form-control">
                                    <button className="btn btn-primary mt-8">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MyProfile;