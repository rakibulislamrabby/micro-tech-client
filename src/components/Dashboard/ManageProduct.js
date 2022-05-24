import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmation from './DeleteConfirmation';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    const [removeProduct, setRemoveProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://gentle-ocean-30847.herokuapp.com/manageproduct', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Products {products.length}</h2>
            <div class="overflow-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price per pis</th>
                            <th>Available Q:</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ManageProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setRemoveProduct={setRemoveProduct}
                            ></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                removeProduct && <DeleteConfirmation
                    removeProduct={removeProduct}
                    refetch={refetch}
                    setRemoveProduct={setRemoveProduct}
                ></DeleteConfirmation>
            }
        </div>
    );
};

export default ManageProduct;