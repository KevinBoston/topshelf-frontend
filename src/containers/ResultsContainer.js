import React from 'react'
import { connect } from 'react-redux'

class ResultsContainer extends React.Component {

    handleResults() {
        console.log("loaded", this.props, this.state)
        if (!this.props.searchTerm){
            return <div>No results at this time</div>
        } else {
            return <div>Results for: {this.props.searchTerm}</div>
        }
        
    }

    render() {
        return (
            <>
            {this.handleResults()}
            </>
        )
    }


}

export default ResultsContainer