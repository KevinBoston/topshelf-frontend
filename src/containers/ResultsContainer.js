import React from 'react'
import { connect } from 'react-redux'

class ResultsContainer extends React.Component {

    handleResults() {
        if (!this.props.results){
            return <div>No results at this time</div>
        } 
        
    }

    render() {
        {this.handleResults}
    }


}

export default ResultsContainer