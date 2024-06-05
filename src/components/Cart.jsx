import React from 'react'
import {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';

export default function Cart() {
    const [error, setError] = useState('');
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        setError('');
        const token = localStorage.getItem('authToken');
        if (!token)
            <Navigate to="/login"/>
        const userId = localStorage.getItem('userId');
        fetch(`https://fakestoreapi.com/carts/user/${userId}`)
            .then(res=>res.json())
            .then(res => setProducts(res))
            .catch(error => console.error(error))
    }, [])
    console.log(products);
    return (
        <div></div>
    )
}

// export default function ShoppingCarts() {
//     const [carts, setCarts] = useState([]);

//     useEffect(() => {
//         fetch("your_api_endpoint_here")
//             .then(res => res.json())
//             .then(data => setCarts(data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <div>
//             <h2>Shopping Carts</h2>
//             {carts.map(cart => (
//                 <div key={cart.id}>
//                     <h3>Cart ID: {cart.id}</h3>
//                     <p>User ID: {cart.userId}</p>
//                     <p>Date: {cart.date}</p>
//                     <h4>Products:</h4>
//                     <ul>
//                         {cart.products.map(product => (
//                             <li key={product.productId}>
//                                 Product ID: {product.productId}, Quantity: {product.quantity}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }

// [
//     {
//         "id": 1,
//         "userId": 1,
//         "date": "2020-03-02T00:00:00.000Z",
//         "products": [
//             {
//                 "productId": 1,
//                 "quantity": 4
//             },
//             {
//                 "productId": 2,
//                 "quantity": 1
//             },
//             {
//                 "productId": 3,
//                 "quantity": 6
//             }
//         ],
//         "__v": 0
//     },
//     {
//         "id": 2,
//         "userId": 1,
//         "date": "2020-01-02T00:00:00.000Z",
//         "products": [
//             {
//                 "productId": 2,
//                 "quantity": 4
//             },
//             {
//                 "productId": 1,
//                 "quantity": 10
//             },
//             {
//                 "productId": 5,
//                 "quantity": 2
//             }
//         ],
//         "__v": 0
//     }
// ]