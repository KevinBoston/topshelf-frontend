import React from 'react'
import {NavLink} from 'react-router-dom'
import ItemContainer from '../containers/ItemContainer'

const AddItemButton = () => {
    return(
        <>
        <NavLink to='/items/new' className="AddItemButton">Add Item</NavLink>
        </>
    )
}

export default AddItemButton