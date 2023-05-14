import React, { useReducer } from 'react'
import { Input } from '../../component'
import { initialState1, reducer1 } from '../../reducer/ProductReducer'
import { localhost } from '../../config/config'
import './style.css'

const AddProducts = () => {
    const [state, dispatch] = useReducer(reducer1, initialState1)
    const name = state.name
    const price = state.price
    const category = state.category
    const company = state.company


    const handleClick = async (e) => {
        e.preventDefault()

        const userId = JSON.parse(localStorage.getItem('user'))._id
        let data = await fetch(`${localhost}/add-products`, {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        data = await data.json();
        console.log(data)
    }


    return (
        <div className='addProduct'>
            <form onSubmit={handleClick}>
                <Input
                    placeholder='Enter the name of product'
                    value={state.name}
                    onChange={(e) => dispatch({ type: 'name', value: e.target.value })} />
                <Input
                    placeholder='Enter the price of product'
                    value={state.price}
                    onChange={(e) => dispatch({ type: 'price', value: e.target.value })} />
                <Input
                    placeholder='Enter the category of product'
                    value={state.category}
                    onChange={(e) => dispatch({ type: 'category', value: e.target.value })} />
                <Input
                    placeholder='Enter the company of product'
                    value={state.company}
                    onChange={(e) => dispatch({ type: 'company', value: e.target.value })} />
                <button>Add Products</button>
            </form>
        </div>
    )
}

export default AddProducts
