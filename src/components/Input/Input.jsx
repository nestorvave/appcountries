import React from 'react'

export const Input = ({
    onChange,
    placeholder="",
    className="",
    value=""
}) => {
    return (
        <input 
            placeholder={placeholder} 
            onChange={onChange} 
            className={className} 
            value={value}

        />
            
        
    )
}
