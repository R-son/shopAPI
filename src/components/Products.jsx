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
    console.log(products);
    return (
        <div>
            <h1>{products.data}</h1>
            <img src={products.image} alt='test'/>
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