import { useState } from "react";
import "./App.css";
import MiApi from "./components/MiApi/MIapi";
import Buscador from "./components/Buscador/Buscador";

function App() {
	const urlApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
	const [data, setData] = useState([]);
	// const [originalData, setOriginalData] = useState([]);
	const [render, setRender] =useState([])
	const [filtro, setFiltro] = useState("");


	return (
		<>
			<header id="inicio">
				<nav className="nav-bar d-flex container-fluid justify-content-around align-items-center flex-wrap gap-5">
					<div>
						<a className="m-0" href="#inicio">
							<img src="" alt="logo" />
						</a>
						{/* <p >LOGO</p> */}
					</div>
					<ul className="d-flex gap-5 m-0">
						{/* <li><Buscador /> </li> */}
						<li>
							<a href="#inicio">Inicio</a>
						</li>
						<li>
							<a href="#productos">Productos</a>
						</li>
						<li>
							<a href="#final">Contáctenos</a>
						</li>
					</ul>
				</nav>
				<div id="" className="hero">
					<div className="content_hero">
						<h1>Titulo de la pagina</h1>
						<p>Gastronomia del mundo </p>
						<Buscador filtro={filtro} setFiltro={setFiltro} setData={setData} data={data}  setRender={setRender}/>
						<p>Cada lugar, un sabor!!!</p>
					</div>
				</div>
			</header>
			<main id="productos" className="main_container">
				<div className="grid_main">
					<MiApi data={data} setData={setData} urlApi={urlApi} render={render}/>
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
