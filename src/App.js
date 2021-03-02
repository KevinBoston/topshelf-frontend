import './App.css';
import HomePage from './containers/HomePage'
import ItemContainer from './containers/ItemContainer'
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'
import {fetchItems} from './actions/UserActions'
import {connect} from 'react-redux'

function App() {
    // componentDidMount = () => {
    //   this.props.fetchItems()
    // }
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={HomePage} />      
      <ItemContainer />
      {/* items={this.props.items}/> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {items: state.items}
}

export default App;
//connect(mapStateToProps, {fetchItems})(App);
