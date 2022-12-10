import React from 'react';

class Father extends React.Component{

    state ={
        contador:0,
    }

    increase = (e) => {
        this.setState({contador: this.state.contador + 1});
    }

    render(){
        return(
            <>
                <h2>Comunication between components</h2>
                <Son increaseCounter ={this.increase} msg="Message for Son 1" />
                <Son increaseCounter ={this.increase} msg="Message for Son 2" />
                <h4>{this.state.contador}</h4>
            </>
        );
    }
}

function Son(props){
    return(
        <>
            <h4>{props.msg}</h4>
            <button onClick={props.increaseCounter}>+</button>
        </>
    );   
}

export default Father;