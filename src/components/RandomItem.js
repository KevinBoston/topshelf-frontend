import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

class RandomItem extends React.Component {
  
    randomID = () => {
        
        if (this.props.items) {
            const randomItem = this.props.items[Math.floor(Math.random() * this.props.items.length)];
            
            if (randomItem) {
                return randomItem
            } else {
                this.randomID()
            }
        }
    }

    makeCard = (item) => {

        if (this.props.items) {
            console.log(item)
            
            return(
                <Link to={`/items/${item.attributes.id}`}>
                 <Card>
                 <CardBody>
                        <CardImg align="left" width="30%" height="30%" src={item.attributes.image_url} />
                 </CardBody>
                 <CardTitle>
                       Check out {item.attributes.name}!
                 </CardTitle>
                     
                 </Card>
                 </Link>
            )
        }  else {
            return null
        }      
    }
    

    render() {
        const setRandomID = this.randomID()
    
        return(
            
             <div className="RandomItem">
                    {this.makeCard(setRandomID)}
            </div>
        )
        
    }
}
const mapStateToProps = state => {
    
    return {items: state.items}
}

export default connect(mapStateToProps)(RandomItem)