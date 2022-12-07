import React from 'react';

function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    );
}

function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    );
}

class ConditionalRendering extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            session: true,
        }
    }
    render(){
        return(
            <div>
                <h3>Conditional Rendering</h3>
                {this.state.session ? <Login /> : <Logout/>}
            </div>
        );
    }
}

export default ConditionalRendering;