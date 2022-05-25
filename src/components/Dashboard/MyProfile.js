import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    // const [userInfo, setUserInfo] = useLoadingUserInfo(user?.email);
    const handleSubmit = () => {

    }
    return (
        <div className="container">
            <h1 className="text-center text-3xl">
                Hello{" "}
                <span className="text-[#f97316] font-extrabold">
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
            <div className="pb-20 flex justify-center mt-10">
                <div className="card bg-orange-500 shadow-xl w-full">
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
            </div>
        </div>
    );
};

export default MyProfile;