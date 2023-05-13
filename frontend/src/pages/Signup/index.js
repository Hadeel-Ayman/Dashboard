import React, { useEffect, useReducer } from 'react'
import { Input } from '../../component'
import './style.css'
import { initialState, reducer } from '../../reducer/userReducer'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigation = useNavigate()

    useEffect(() => {
        const getData = localStorage.getItem('user')
        if (getData) {
            navigation('/')
        }
    }, [])


    const [state, dispatch] = useReducer(reducer, initialState)

    const username = state.username;
    const password = state.password;
    const email = state.email;

    const handleForm = async (e) => {
        e.preventDefault()

        let fetchData = await fetch('http://localhost:5000/regestier', {
            method: 'post',
            body: JSON.stringify({ username, password, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        fetchData = await fetchData.json()
        console.log(fetchData)

        localStorage.setItem('user', JSON.stringify(fetchData))
        if (fetchData) {
            navigation('/')
        }
    }

    return (
        <div className='register'>
            <h2>Register</h2>
            <form onSubmit={handleForm}>
                <Input
                    value={state.username}
                    placeholder={'Enter username'}
                    onChange={(e) => dispatch({ type: 'username', value: e.target.value })} />
                <Input
                    value={state.email}
                    placeholder={'Enter email'}
                    onChange={(e) => dispatch({ type: 'email', value: e.target.value })} />
                <Input
                    value={state.password}
                    placeholder={'Enter password'}
                    type={'password'}
                    onChange={(e) => dispatch({ type: 'password', value: e.target.value })} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Signup
