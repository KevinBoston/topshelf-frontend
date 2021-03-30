import Items from '../components/Items'
import ItemForm from '../components/ItemForm'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddItemButton from '../components/AddItemButton'
import SearchBar from '../components/SearchBar'
import {fetchItems} from '../actions/UserActions'
import { connect } from 'react-redux'
import ItemView from '../components/ItemView'
class ItemContainer extends React.Component {

    componentDidMount() {
        
        this.props.fetchItems()
        
        //debugger

    }

    getItemId(id) {
        const itemId = this.props.items.filter(property => property.id === id)
        return itemId
        
    }

    render() {
        // debugger
        return (
            <div className="ItemContainer">
            <Switch>
                 <Route exact path="/items">
                    <AddItemButton />
                    <SearchBar />
                    <Items items={this.props.items}/>
                </Route>
                <Route path="/items/new">
                    <ItemForm />
                </Route>
                <Route exact path="/items/:id" render={((routerProps) => <ItemView item={this.props.items.find(item => item.attributes.id === parseInt(routerProps.match.params.id))} />)} /> 

            </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {items: state.items}
}

export default connect(mapStateToProps, {fetchItems})(ItemContainer)