import React, { Component } from 'react';
import Header from './Header.js';


class ApiWeather extends Component {
    constructor(props){
        super(props);

        /*["desplegarClick",].forEach((method) => {
            this[method] = this[method].bind(this);
        });*/

        this.state = {
            infoWeather: {
                list: [],
            }
        }
    }

    componentDidMount(){
        fetch('https://openweathermap.org/data/2.5/forecast?q=Rivas-Vaciamadrid,ES&appid=b6907d289e10d714a6e88b30761fae22')
            .then(function(response) {
                //console.log(response.status);
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                return response.json();
            })
            .then(data =>{
                this.setState({infoWeather: data});
                //console.log(data);
            }).catch(function(error) {  
                console.log('Petición fallida', error);
            });
    }

    render(){
        const renderWeather = items => {
            return (
                <>
                {items.map((i) => {
                    //console.log(i.main.temp);
                    if(i.dt !== "0"){
                        return (
                            <li key={i.dt} id={"ds-"+i.dt}>
                                <div>Fecha<span>{i.dt_txt}</span></div>
                                <div>Temperatura<span>{i.main.temp}</span></div>
                                <div>V. Viento<span>{i.wind.speed}</span></div>
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
                            <h1>Api Json para el tiempo</h1>
                            <p>Esta es una API para recoger los datos en tiempo real del clima en Rivas-Vaciamadrid. He utilizado un formato <a href="https://openweathermap.org/data/2.5/forecast?q=Rivas-Vaciamadrid,ES&appid=b6907d289e10d714a6e88b30761fae22" target="_blank" rel="noopener noreferrer">JSON</a>. La web está realizada con React y la maquetación está hecha con SASS.</p>
                        </div>
                        <h2>El tiempo en <span>Rivas-Vaciamadrid</span></h2>
                    </section>
                    <section className="data">
                        <ul>
                            {renderWeather(this.state.infoWeather.list)}
                        </ul>
                    </section>
                </article>
            </>
        )
    }
}
export default ApiWeather;