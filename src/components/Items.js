import React from 'react';
import ItemCard from './ItemCard'

const Items = (props) => {
    //console.log(props)
    //debugger

    
    return(
        <>
            {props.items && props.items.map((item =>{
                return(<ItemCard item={item.attributes} key={item.id} />)
            }))}
        </>
    )
}

export default Items