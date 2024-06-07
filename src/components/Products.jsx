import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Products.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error));
    }, []);

    const handleClick = (productId) => {
        const product = products.find(p => p.id === productId);
        navigate(`/products/${productId}`, {state: product});
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    console.log(products);
    const filteredProducts = products.filter(product => {
        if (selectedCategory !== 'All' && product.category.toLowerCase() !== selectedCategory.toLowerCase())
            return false;
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="products-wrapper">
            <div className="sidebar">
                <input type="text" className='search-bar' placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />{/*Barre de recherche*/}
                <div className="category-filter">
                    <h3>Categories</h3>
                    <button onClick={() => handleCategoryChange('All')} className={selectedCategory === 'All' ? 'active' : ''}>All</button>
                    <button onClick={() => handleCategoryChange('electronics')} className={selectedCategory === 'electronics' ? 'active' : ''}>Electronics</button>
                    <button onClick={() => handleCategoryChange('jewelery')} className={selectedCategory === 'jewelery' ? 'active' : ''}>Jewelery</button>
                    <button onClick={() => handleCategoryChange("men's clothing")} className={selectedCategory === "men's clothing" ? 'active' : ''}>Men's Clothing</button>
                    <button onClick={() => handleCategoryChange("women's clothing")} className={selectedCategory === "women's clothing" ? 'active' : ''}>Women's Clothing</button>
                </div>
            </div>
            <div className="products-container">
                {filteredProducts.map(product => (
                    <div className="product" key={product.id} onClick={() => handleClick(product.id)}>
                        <img src={product.image} alt={product.title}/>{/*Image*/}
                        <h5>{product.title}</h5>{/*Nom*/}
                        <h5>{product.price} $</h5>{/*Prix*/}
                    </div>
                ))}
            </div>
        </div>
    );
}