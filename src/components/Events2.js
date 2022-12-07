import React from 'react';

function Button (props){
    return(
        <button onClick={props.myOnClick}>this Button is a component</button>
    );
}

class Events2 extends React.Component{

    handleClick = (e, msg) =>{
        console.log(e);//evento sintetico
        console.log(e.nativeEvent);//evento nativo
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(msg);
    }
    render(){
        return(
            <div>
                <h3>More about events</h3>
                <button onClick={(e) =>this.handleClick(e,"Hello")}>Saludar</button>
                {/* <Button 
                onClick ={(e) =>this.handleClick(e,"Hello")}/> */}
                <Button 
                myOnClick ={(e) =>this.handleClick(e,"Hello")}/>
            </div>
        );
    }
}

export {Events2};