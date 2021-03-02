import React from 'react'

import UserForm from '../components/UserForm'

class SelectLogin extends React.Component {

    renderSignup(e) {
        e.preventDefault();
        <UserForm onSubmit={signupSubmit} />

    }
    renderLogin(e) {
        e.preventDefault();
        <UserForm onSubmit={loginSubmit} />
    }

    render(){
        return(
            <>
            <button className="signupbutton" onClick={e => this.renderSignup(e)}>Signup</button>
            <button className="loginbutton" onClick={e => this.renderLogin(e)}>Login</button>
            </>
        )
    }
    
    // render(){
    //     <Switch>
    //         <Route exact path="/login">
    //             <UserForm onSubmit={loginSubmit} />
    //         </Route>
    //         <Route exact path="/signup">
    //             <UserForm onSubmit={signupSubmit} />
    //         </Route>
    //     </Switch>
    // }

}

export default SelectLogin