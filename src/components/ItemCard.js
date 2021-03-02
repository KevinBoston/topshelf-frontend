import React from 'react'
import {Link} from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';


const ItemCard = props => {
    //console.log(props.item)
    //debugger
    return(
        <Link key={props.id} to={`/items/${props.item.id}`}>
        <Card className = 'ItemCard'>
            <CardBody>
                <CardTitle>{props.item.name} - {props.item.category}</CardTitle>
                <CardImg width="60%" height="40%" className='ItemImage' src={props.item.image_url}/>
                <Button onClick={() => {console.log(props.id, " was clicked")}}>View details</Button>
            </CardBody>
        </Card>
        </Link>
        )
}

export default ItemCard