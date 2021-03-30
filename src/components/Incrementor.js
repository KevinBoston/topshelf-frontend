import React from 'react';

class Incrementor extends React.Component {

    state = {
        likes: 0
    }
    handleClick = e => {
        // this.setState({
        //     likes: this.state.likes + 1
        // })
        console.log('a');

        fetch('http://localhost:3000/items')
            .then(resp => {
                console.log('b', resp);
                return resp.json();
            })
            .then(data => console.log('c', data))

        for(let i = 0; i < 5000; i++) {
            console.log('d');
        }

        // a, d(5000), b, c

    }

    render() {
        return(
            <div class="like-button">
                <button onClick={this.handleClick}>Click to Like me!</button>
                Likes: {this.state.likes}
            </div>
        )
        

    }
}
export default Incrementor