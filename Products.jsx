import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Products.css';



export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch("https://fakestoreapi.com/products", {
            method: "GET",
        }).then(res => res.json())
          .then(data => setProducts(data))
          .catch(error => console.error(error));
    }, [])
    console.log(localStorage.getItem("products"));


    return (
        <div>
            {Object.values(products).map(product => (

            <a className="products-container" key={product.id}>
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>Price: {product.price} $</h5>
                <p>{product.id}</p>
            </a>
            ))}
            
        </div>
    )


}








/*export default function Products()
{
    const [error, setError] = useState('');

    const fetchProducts = async () =>
    {
        setError('');
        try {
            const allProds = await fetch('https://fakestoreapi.com/products');
            if (!allProds.ok)
                throw new Error('An error occured with the API');
        }  catch (err) {setError(err.message);}
    }
}*/