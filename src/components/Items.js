import React from 'react';
import ItemCard from './ItemCard'

const Items = (props) => {      
    return(
        <>
            {props.items && props.items.map((item =>{
                console.log(item)
                return(<ItemCard item={item.attributes} key={item.id} />)
            }))}
        </>
    )
}

export default Items