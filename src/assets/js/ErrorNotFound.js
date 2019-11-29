import React, { Component } from 'react';
import imgDinosaurioError from '../img/dinosaurio-error.svg';
import imgLunaError from '../img/luna-error.svg';

class ErrorNotFound extends Component {
    render(){
        return(
            <section className="bk-errores">
                <div className="bk-estrellas"></div>
                <div className="error" id="error404">
                    <div className="imgs-404">
                        <img src={imgDinosaurioError} alt="Dinosaurio"></img>
                        <img src={imgLunaError} alt="Luna"></img>
                    </div>
                    <div className="txt-404">
                        <div className="bk-txt-404">
                            <span className="huge">404</span>
                            <h1>Parece que te has perdido...</h1>
                            <h2>Pulsa <a href="/">aquí</a> para volver a la home</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ErrorNotFound;
