import { useState } from "react";
import "./App.css";
import MiApi from "./components/MiApi/MIapi";
import Buscador from "./components/Buscador/Buscador";

function App() {
	return (
		<>
			<header id="inicio">
				<nav className="nav-bar d-flex container-fluid justify-content-around align-items-center flex-wrap gap-4">
					<div>
						<a className="m-0" href="#inicio">
							<img src="" alt="logo" />
						</a>
						{/* <p >LOGO</p> */}
					</div>
					<ul className="d-flex gap-3">
						<li>{/* <Buscador />  */}</li>
						<li>
							<a href="#inicio">Inicio</a>
						</li>
						<li>
							<a href="">Medio</a>
						</li>
						<li>
							<a href="#final">Final</a>
						</li>
					</ul>
				</nav>
				<div className="hero"></div>
			</header>
			<main className="main_container">
				<Buscador />
				<div className="grid_main">
					<MiApi />
				</div>
			</main>
			<footer className="text-center">
				<div className="d-flex justify-content-evenly flex-wrap gap-4 pt-4">
					<div className="">
						<h4>section1</h4>
						<ul>
							<li>
								<a href="">asygfhrghhfg</a>
							</li>
							<li>
								<a href="">hgjghj</a>
							</li>
							<li>
								<a href="">ewwerwerfwf</a>
							</li>
						</ul>
					</div>
					<div>
						<h4>Section2</h4>
						<ul>
							<li>
								<a href="">asadd</a>
							</li>
							<li>
								<a href="">qweqw</a>
							</li>
							<li>
								<a id="final" href="">
									sdfsdfs
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="d-flex justify-content-center ">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing!</p>
				</div>
			</footer>
		</>
	);
}

export default App;
