import React from 'react';
import {connect} from 'react-redux'
import {searchForItem} from '../actions/UserActions'

class SearchBar extends React.Component {

        
    constructor() {
        super();

        this.state = {
            searchTerm: "",
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        debugger
        this.props.searchForItem(this.state.searchTerm)
        this.setState({
            searchTerm: ""
        })
    }

    render() {
        return(
            <div className="SearchContainer">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Search for an item" />
                <button type="submit" disabled={this.state.searchTerm===""}>Search</button>
            </form>
            </div>


        )
    }

}
export default connect(null, {searchForItem})(SearchBar)