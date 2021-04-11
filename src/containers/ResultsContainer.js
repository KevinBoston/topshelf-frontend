import React from 'react'
import { connect } from 'react-redux'

class ResultsContainer extends React.Component {

    handleResults() {
        console.log("loaded", this.props)
        if (!this.props.results){
            return <div>No results at this time</div>
        } else {
            return <div>{this.props.results}</div>
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