import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase_init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams()
    const [product, setProduct] = useState([]);
    const { _id, name, price, img, description, availableQuantity, minimumQuantity } = product
    useEffect(() => {
        const url = `https://gentle-ocean-30847.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setquantity(data.minimumQuantity)
            });
    }, [productId, minimumQuantity]);

    const [quantity, setquantity] = useState(0);

    let incNum = () => {
        if (quantity < availableQuantity) {

            setquantity(quantity + 1);
        }
        else {
            toast.error("You can't increase Over Available quantity")
        }
    };
    let decNum = () => {
        if (quantity > minimumQuantity) {
            setquantity(quantity - 1);
        }
        else {
            toast.error("You can't decress our minimum quantity")
        }
    }
    let handleChange = (e) => {
        const numbervalue = e.target.value;
        setquantity(e.target.value);
    }
    const handleOrders = event => {
        event.preventDefault();
        const order = {
            orderId: _id,
            product: name,
            price: price,
            TotallPrice: price * quantity,
            quantity,
            buyer: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        fetch("https://gentle-ocean-30847.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json   "
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                //close
                console.log(data);
                if (data.insertedId) {
                    toast.success(` Order Success!!`);
                }
            })
    }

    return (
        <div className='px-14'>
            <h2 className='text-4xl text-center text-primary font-bold'>Purchase</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div>
                    <h2 className='text-center text-3xl font-bold pb-6'>Product Info</h2>
                    <h2 className='text-xl text-secondary font-bold'>Product Name: {name}</h2>
                    <p className='pt-4'>ID: {_id}</p>
                    <p>Description: {description}</p>
                    <p className='text-secondary font-bold pt-4'>Price: {price}</p>
                    <p>AvailableQuantity: {availableQuantity}</p>
                    <p>MinimumQuantity: {minimumQuantity}</p>
                </div>
                <div>
                    <h2 className='text-center text-3xl font-bold pb-6'>Product Image</h2>
                    <img src={img} alt="" />
                </div>
                <div>
                    <form onSubmit={handleOrders} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={name} className="input input-bordered input-success w-full " />
                        <input type="text" disabled value={user?.displayName || ""} className="input input-bordered input-secondary w-full " />
                        <input type="email" disabled value={user?.email || ""} className="input input-bordered input-secondary w-full " />
                        <input type="text" name='address' placeholder="Your address" className="input input-bordered input-secondary w-full " />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-secondary w-full " />

                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <div class="input-group">
                            <div class="input-group">
                                <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                            </div>
                            <input value={quantity} name="quantity" onChange={handleChange} type="number" placeholder="Quantity" class="input  w-full max-w-xs" />
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                            </div>
                        </div>
                        {/* <input t    ype="button" className='btn btn-primary'>-</input> */}
                        <input type="submit" disabled={quantity < minimumQuantity} value="Confirm Order" className="btn btn-secondary w-full " />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Purchase;