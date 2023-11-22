import React from 'react'

export const Capitalize = ({ str }) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const ComponentsWebbase = () => {
    return (
        <div>
            components test webbase
        </div>
    )
}

export default function index() {

    return (
        <div>
            {ComponentsWebbase}
        </div>
    )
}
