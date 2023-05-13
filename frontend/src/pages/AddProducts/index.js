import React, { useReducer } from 'react'
import { Input } from '../../component'
import { initialState1, reducer1 } from '../../reducer/ProductReducer'

const AddProducts = () => {
    const [state, dispatch] = useReducer(reducer1, initialState1)

    const name = state.name
    const price = state.price
    const category = state.category
    const company = state.company


    const handleClick = async (e) => {
        e.preventDefault()

        let data = await fetch('http://localhost:5000/add-products', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const fetchdata = data.json()
        console.log(fetchdata)
    }


    return (
        <div>
            <form>

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

                <button onClick={handleClick}>Add Products</button>
            </form>
        </div>
    )
}

export default AddProducts
