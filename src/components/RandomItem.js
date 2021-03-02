import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

class RandomItem extends React.Component {
  
    randomID = () => {
        if (this.props.items) {
            const randomID = Math.floor(Math.random() * this.props.items.length) + 1
            const randomItem = this.props.items.find(item => parseInt(item.id) === randomID)
            if (randomItem) {
                console.log(randomID)
                console.log(randomItem)
                debugger
                return parseInt(randomItem.id)
            } else {
                this.randomID()
            }
        }
    }

    makeCard = (itemId) => {
        console.log(itemId)
        debugger
        if (this.props.items) {
            const item = this.props.items.find(item => parseInt(item.id) === itemId)
            return(
                <Card>
                    <CardTitle>
                        {item.attributes.title}
                    </CardTitle>
                </Card>
            )
        }        
    }
    

    render() {
        const setRandomID = this.randomID()

        return(
            <div className="RandomItem">
                <Link to={`/items/${setRandomID}`}>
                    {this.makeCard(setRandomID)}
                </Link>
            </div>
        )
        
    }
}
const mapStateToProps = state => {
    return {items: state.items}
}

export default connect(mapStateToProps)(RandomItem)