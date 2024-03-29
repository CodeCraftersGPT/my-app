import React from 'react';

function Orders() {
    const orders = [
        {
            id: 1,
            product: "Laptop",
            qty: 1,
            price: 1000
        },
        {
            id: 2,
            product: "Mobile",
            qty: 2,
            price: 500
        },
        {
            id: 3,
            product: "Headset",
            qty: 1,
            price: 100
        }
    ]
    return (
        <div>
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.product}</td>
                                    <td>{order.qty}</td>
                                    <td>{order.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Orders;