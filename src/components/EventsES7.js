import React from 'react';

class EventsES7 extends React.Component{

    state={
        contador: 0,
    }

    increase=()=>{
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    decrease=()=>{
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    reset=()=>{
        this.setState({
            contador: 0,
        })
    }

    render(){
        return(
            <div>
                <h3>Events ES7 with property initializers</h3>
                <div>
                    <button onClick={this.increase}>+</button>
                    <button onClick={this.decrease}>-</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
                <h4>{this.state.contador}</h4>
            </div>
        );
    }
}

export {EventsES7};
