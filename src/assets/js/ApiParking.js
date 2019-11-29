import React, { Component } from 'react';
import Header from './Header.js';


class ApiParking extends Component {
    constructor(props){
        super(props);

        /*["desplegarClick",].forEach((method) => {
            this[method] = this[method].bind(this);
        });*/

        this.state = {
            infoParking: {
                "@graph": [],
            },
            items: []
        }
    }

    componentDidMount(){
        var targetUrl = 'https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json';
        fetch(targetUrl)
            .then(function(response) {
                //console.log(response.status);
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                return response.json();
            })
            .then(data =>{
                this.setState({infoParking: data["@graph"]});
                //console.log(data["@graph"]);
            }).catch(function(error) {  
                console.log('Petición fallida', error);
            });
    }

    render(){
        const renderParking = items => {
                console.log(this.state.infoParking)
            return (
                <>
                {this.state.items.map((i) => {
                    //console.log(i.title);
                    if(this.state.items !== "0"){
                        return (
                            <li key={i.title} id={"ds-"+i.title}>
                                <div>Nombre<span>{i.dt_txt}</span></div>
                                <div>Dirección<span>{i.main.temp}</span></div>
                                <div className="btn-base">Cómo llegar<span>{i.wind.speed}</span></div>
                            </li>
                        )
                    }
                    else
                        return (<div>Ha habido un error</div>);
                })}
                </>
            )
        }
        return(
            <>
                <Header/>
                <article className="weather">
                    <section className="txt">
                        <div>
                            <h1>Api Json para el parking</h1>
                            <p>Esta es una API para recoger los datos del parking en Madrid. He utilizado un formato <a href="https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json" target="_blank" rel="noopener noreferrer">JSON</a>. La web está realizada con React y la maquetación está hecha con SASS.</p>
                        </div>
                        <h2>El parking en <span>Madrid</span></h2>
                    </section>
                    <section className="data">
                        <ul>
                            {renderParking()}
                        </ul>
                    </section>
                </article>
            </>
        )
    }
}
export default ApiParking;