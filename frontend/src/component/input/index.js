import React from 'react'
import './style.css'

const Input = ({ placeholder, onChange, value, type }) => {
    return (
        <div>
            <input placeholder={placeholder} onChange={onChange} value={value} type={type} />
        </div>
    )
}

export default Input
