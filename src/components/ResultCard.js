import React from 'react'
import {Link} from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
// import Incrementor from './Incrementor'


const ResultCard = props => {
    //console.log(props.result)
    //debugger
    if (props.result) {
    return(
        <>
        {/* <Link key={props.id} to={`/results/${props.result.id}`}> */}
        <Card className = 'ResultCard'>
            <CardBody>
                <CardTitle>{props.result.name} - {props.result.category}</CardTitle>
                <CardImg width="60%" height="40%" className='resultImage' src={props.result.image_url}/>
                <Button onClick={() => {console.log(props.id, " was clicked")}}>View details</Button>
            </CardBody>
        </Card>
        {/* </Link> */}
        {/* <Incrementor /> */}
        </>
        )
    } else {
        return <> </>
    }
}

export default ResultCard