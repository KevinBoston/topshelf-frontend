import './App.css';
import HomePage from './containers/HomePage'
import ItemContainer from './containers/ItemContainer'
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'
import React from 'react'
import {fetchItems} from './actions/UserActions'
import {connect} from 'react-redux'
import SearchResultsContainer from './containers/SearchResultsContainer';

class App extends React.Component {
    componentDidMount() {
      
       this.props.fetchItems()
    }
  render(){
    //debugger
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={HomePage} /> 
        <ItemContainer />
        <Route exact path='/results' component={SearchResultsContainer} />
        {/* items={this.props.items}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {items: state.items}
}

export default connect(mapStateToProps, {fetchItems})(App);
