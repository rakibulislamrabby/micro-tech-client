import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase_init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loading from '../../components/Shared/Loading';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    }
    if (user || gUser) {
        navigate(from, { replace: true });
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInError;
    if (gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast.error("Please enter your email")
        }

    }
    return (
        <div className='flex h-screen justify-center items-center mb-28'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email with validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "provide a valid email"
                                    }

                                })}
                                type="email" onBlur={e => setEmail(e.target.value)} placeholder="You email"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* password with validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 Character longer"
                                    }

                                })}
                                type="password" placeholder="You Password"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <p className='pb-6'>Forgate Password? <button onClick={resetPassword} className='text-secondary'>Reset password</button></p>
                        <input className='btn w-full  max-w-xs btn-primary text-white' type="submit" value="Login" />
                    </form>
                    <p>New to Doctor's Portal? <Link className='text-secondary' to={"/signup"}>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;