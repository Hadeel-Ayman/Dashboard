import React, { useEffect, useState } from 'react'
import { localhost } from '../../config/config';
import './style.css'

const Home = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        let res = await fetch(`${localhost}/products`)
        res = await res.json()
        setProducts(res)
    }

    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <ul className='items'>
                <li>name</li>
                <li>price</li>
                <li>category</li>
                <li>company</li>
            </ul>

            {
                Products.map((item, index) => (
                    <ul key={index} className='items'>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Home
