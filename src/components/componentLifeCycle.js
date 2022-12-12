import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log(3,'Component is deleted from the DOM');
    }

    render(){
        return <h3>{this.props.hour}</h3>
    }
}

class ComponentLifeCycle extends React.Component {

    constructor(props){
        super(props);
        console.log(0,'Component initialized');

        this.state = {
            hour: new Date().toLocaleTimeString(),
            visible: false,
        }
        this.timer = null;
    }

    componentDidMount(){
        console.log(1,"Component is now in the DOM")
    }

    componentDidUpdate (prevProps, prevState){
        console.log(2, "The state or props have been changed")
        console.log(prevProps);
        console.log(prevState);
    }

    everySecond = () => {
        this.timer = setInterval(()=>{
            this.setState({ hour: new Date().toLocaleTimeString()})
        },1000);
    }

    Start = () => {
        this.everySecond();
        this.setState({
            visible: true,
        });
    }

    Stop = () => {
        clearInterval(this.timer);
        this.setState({
            visible: false,
        })
    }

    render(){
        console.log(4,"Component is drawed (or updated) in the DOM");
        return(
            <>
                <h3>Component Life Cycle</h3>
                {this.state.visible && <Clock hour ={this.state.hour} />}
                <div>
                    <button onClick={this.Start}>Start</button>
                    <button onClick={this.Stop}>Stop</button>
                </div>
            </>
        );
    }
}

export default ComponentLifeCycle;

