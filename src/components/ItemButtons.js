import React from 'react';
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import {deleteItem} from '../actions/UserActions'
import {withRouter} from 'react-router-dom'

const ItemButtons = (props) => {
    console.log(props)
    const handleDelete = () => {
        props.deleteItem(props.itemId)
        props.history.push('/items')
    }
    return (
        <>
                <Button size="sm" onClick={handleDelete}>X</Button>
        </>
    )

}

export default withRouter(connect(null, {deleteItem})(ItemButtons))