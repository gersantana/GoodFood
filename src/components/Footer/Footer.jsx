import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="text-center">
			<div className="d-flex justify-content-evenly flex-wrap gap-4 pt-4">
				<div className="">
					<h4>Contactados</h4>
					<ul>
						<li>
							<a href="mailto:gerardosantana2013@gmail.com">E-mail</a>
						</li>
						<li>
							<a href="">WhatsApp</a>
						</li>
						<li>
							<a href="">Redes Sociales</a>
						</li>
					</ul>
				</div>
				<div>
					<h4>Sobre nosotros</h4>
					<ul>
						<li>
							<a target="blank" href="https://maps.app.goo.gl/TE3jgsFUyDzGxXgx8">
								Casa Matriz
							</a>
						</li>
						<li>
							<a href="">Cursos</a>
						</li>
						<li>
							<a id="final" href="">
								Vision
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="d-flex justify-content-center ">
				<p>Gastronomía Mundial 2023. Todos los derechos reservados</p>
			</div>
		</footer>
	);
};

export default Footer;
