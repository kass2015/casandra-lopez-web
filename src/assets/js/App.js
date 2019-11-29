import React, { Component } from 'react';
import Header from './Header.js';

class App extends Component {
	constructor(props, context){
			super(props, context);
	}

	render(){
		return (
			<>
				<Header/>
				<article className="curriculum">
					<section className="txt">
						<h1>Casandra López - Frontend developer</h1>
						<p>Soy una desarrolladora frontend. Me encanta programar con <span>React</span> y utilizo <span>Sass</span> en todos mis proyectos.</p>
						<p>Empecé estudiando <span>Diseño gráfico</span> y después, me pasé al <span>Diseño web</span>. Tras llevar un tiempo diseñando fue cuando me di cuenta de que lo mío realmente era el mundo web, así que <span>estudié Html, Css(Sass), Javascript</span> y un poco de php y mysql.</p>
						<p>Cuando tuve una visión global de lo que era el mundo web, decidí especializarme en la parte frontend (al fin y al cabo, vengo de diseño) y lo que más <span>me divierte es la maquetación</span>, aunque me desenvuelvo estupendamente con <span>javascript</span>.</p>
						<p>Todos tenemos un pasado... el mío es jQuery. Aunque me siento orgullosa de él, ahora mismo se está quedando obsoleto, por lo que mi código ahora es <span>JS puro</span>.</p>
						<p><span>Me apasiona React</span> y todo lo que está relacionado con el framework. Llevo más de 6 meses trabajando con él y siento que debería haberlo conocido hace muchos años. De hecho, la web que estás viendo está creada en React.</p>
						<p>Si has leído todo este rollo, estás preparado para conocerme más:</p>
					</section>
					<section className="datos">
						<h2>Un poco sobre mí</h2>
						<ul>
							<li>Cuando nací:<span> 11 de enero de 1987</span></li>
							<li>Mi teléfono:<span> 609383454</span></li>
							<li>Mi email:<span> kass2015@hotmail.com</span></li>
							<li>Dónde vivo:<span> Rivas-Vaciamadrid (Madrid)</span></li>
						</ul>
					</section>
				</article>
			</>
		)
	}
}
export default App;
