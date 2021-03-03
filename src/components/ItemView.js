import React from 'react'
import ItemButtons from './ItemButtons'
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

const ItemView = props => {
    console.log(props)

    const theItem = props.item.attributes
    //debugger

    return (
        <div>
        <Card className = 'ItemView'>
        <CardBody>
          <CardTitle style={{border: 'solid' }}>{theItem && theItem.name}</CardTitle>
          <CardImg className='ItemImage' src={theItem && theItem.image_url} alt={theItem && theItem.name} /><br></br><br></br>
          <ul>
            <li>Category: {theItem.category}</li>
            <li>Subategory: {theItem.subcategory}</li>
            <li>Alcohol Content: {theItem.abv}%</li>
            <li>Style: {theItem.style}</li>
            <li>Country: {theItem.country}</li>
          </ul>
        </CardBody>
      </Card>
      <ItemButtons itemId={props.item.id} />
      </div>
    )


}

export default ItemView