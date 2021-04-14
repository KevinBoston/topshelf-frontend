import React from 'react'
import { connect } from 'react-redux'
import ResultsList from '../components/ResultsList'

class ResultsContainer extends React.Component {

    handleRender() {
        this.handleHeading()
        this.handleResults()
    }
    handleHeading() {
        console.log(this.props)
        debugger
        if (!this.props.searchTerm){
            return <div>No results at this time</div>
        } else {
            return <div><h2>Results for: {this.props.searchTerm}</h2></div>
        }
    }
    handleResults() {
        if (this.props.results) {
            <ResultsList results={this.props.results} />
        }
    }

    render() {
        return (
            <>
            {this.handleRender()}
            </>
        )
    }


}

export default ResultsContainer