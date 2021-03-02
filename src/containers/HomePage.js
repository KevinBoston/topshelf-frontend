import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import RandomItem from '../components/RandomItem'
import AddItemButton from '../components/AddItemButton'

const HomePage = () => {

    return(
        <div className='HomePage'>
            <h2>Welcome to </h2>
            <h1>TopShelf!</h1>
            <LoginContainer />
            {/* <AddItemButton /> */}
            <RandomItem/>
        </div>
    )
}

export default HomePage