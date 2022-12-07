import React from 'react';

class EventsES6 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            contador: 0,
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
    }

    increase(){
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    decrease(){
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    reset(){
        this.setState({
            contador: 0,
        })
    }

    render(){
        return(
            <div>
                <h3>Events ES6</h3>
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

export {EventsES6};
