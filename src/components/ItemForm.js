import React from 'react';
import SubCatForm from './SubCatForm'
import {connect} from 'react-redux'
import {addItem} from '../actions/UserActions'
import {withRouter} from 'react-router-dom'


class ItemForm extends React.Component {

    state = {
        name: "",
        category:"",
        subcategory:"",
        image_url:"",
        abv:"",
        vintage:"n/a",
        style:"",
        country:""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props)
        debugger
        console.log(this.state)
        this.props.addItem(this.state)
        this.props.history.push('/items')
        this.setState({
            name: "",
            category:"",
            subcategory:"",
            image_url:"",
            abv:"",
            vintage:"n/a",
            style:"",
            country:""
        })
    }

    render() {
        return(
            <div className='ItemForm'>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add an Item</h5>
                    <label>Item Name: </label>
                    <input type="text" name="name" onChange={this.handleChange} placeholder="Jack Daniels, MacAllan, Barefoot..." value={this.state.name} /><br />
                    <label>Category: </label>
                    <input type="radio" name="category" onChange={this.handleChange} value="Beer" />Beer
                    <input type="radio" name="category" onChange={this.handleChange} value="Wine" />Wine
                    <input type="radio" name="category" onChange={this.handleChange} value="Spirit" />Distilled Spirit
                    <br />
                    <SubCatForm category={this.state.category} handleChange={this.handleChange}/>

                    <label>Image URL: </label>
                    <input type="text" name="image_url" onChange={this.handleChange} placeholder="https://www.conehealth.com/app/files/public/10f2c6b9-9feb-4de4-8f5e-527267ca24fe/7-Things-Drinking-Alcohol-Does-to-Your-Body.jpg" value={this.state.image_url} /><br />
                    <label>Alcohol Content: </label>
                    <input type="text" name="abv" onChange={this.handleChange} placeholder="5, 12, 43..." value={this.state.abv} /><br />
                    <label>Vintage: </label>
                    <input type="text" name="vintage" onChange={this.handleChange} value={this.state.vintage} /><br />
                    <label>Style: </label>
                    <input type="text" name="style" onChange={this.handleChange} placeholder="IPA, Stout, Burgundy, Single Malt..." value={this.state.style} /><br />
                    <label>Country of Origin: </label>
                    <input type="text" name="country" onChange={this.handleChange} placeholder="USA, Scotland, France..." value={this.state.country} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {items: state.items}
}

export default withRouter(connect(mapStateToProps, {addItem})(ItemForm))