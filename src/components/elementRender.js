import React from 'react';
import data from '../helpers/data.json'

function ListItem(props){
    return(
        <li>
            <a href={props.el.web} target='_blank'>
                {props.el.name}</a>
        </li>
    );
}

class ElementRender extends React.Component{
    constructor(props){
        super(props);
        this.state={
            seasons:['spring','summer','fall','winter']
        }
    }
    render(){
        return(
            <div>
                <h3>Element Rendering</h3>
                <h4>Seasons</h4>
                <ol>
                    {
                        this.state.seasons.map((el)=><li key={el}>{el}</li>)
                    }
                </ol>
                <h4>Frameworks Frontend JavaScript</h4>
                <ul>
                    {
                    data.frameworks.map((el) => 
                    <ListItem key={el.id}
                    el={el}/>)
                    }
                </ul>
            </div>
        );
    }
}

export default ElementRender;