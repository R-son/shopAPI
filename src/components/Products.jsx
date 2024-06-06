import React from 'react'
import { useState, useEffect } from 'react';

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
            method: "GET",
        }).then(res => res.json())
          .then(data => setProducts(data))
          .catch(error => console.error(error));
    }, [])
    // console.log(products);
    console.log(localStorage.getItem('authToken'));
    return (
        <div>
            {Object.values(products).map(product => (
                <div key={product.id}>
                    <p>{product.title}</p>
                    <h2>{product.title}</h2>
                    <p>{product.id}</p>
                </div>
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