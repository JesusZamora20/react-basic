import React from 'react';

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}
class AjaxApis extends React.Component{

    state = {
        pokemons: [],
    }

    componentDidMount(){
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                let pokemons = [];
                json.results.forEach(el => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(json =>{
                            // console.log(json);
                            let pokemon ={
                                id:json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };

                            pokemons = [...pokemons, pokemon];
                            this.setState({pokemons});
                        })
                });
            })
    }
    render(){
        return(
            <>
                <h3>Ajax and APIs</h3>
                {this.state.pokemons.length === 0 ? (<h4>Cargando...</h4>) :
                (this.state.pokemons.map(el => 
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))}
            </>
        );   
    }
}

export default AjaxApis;