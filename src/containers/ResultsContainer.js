import React from 'react'
import { connect } from 'react-redux'
import ResultsList from '../components/ResultsList'

class ResultsContainer extends React.Component {

    handleRender() {
        debugger
        return(
            <>
                {this.handleHeading()}
                {this.handleResults()}
            </>
        )
    }
    handleHeading() {
        console.log(this.props)
        //debugger
        if (!this.props.searchTerm){
            return ( 
            <div className="ResultsHeader">
                No results at this time
            </div>
            )} else {
            return (
            <div className="ResultsHeader">
                Results for: {this.props.searchTerm}
            </div>)
        }
    }
    handleResults() {
        debugger
        if (this.props.results) {
            <ResultsList results={this.props.results} searchTerm={this.props.searchTerm} />
        }
    }

    render() {
        debugger
        return (
            <div className="ResultsContainer">
                {this.handleRender()}
            </div>
        )
    }


}

export default ResultsContainer