import "./Header.css"
import Buscador from "../Buscador/Buscador"
import propsTypes from "prop-types"

const Header = ({filtro, setData, setFiltro, data, setRender}) => {
  return (
    <header id="inicio">
				<nav className="nav-bar gap-5">
					<div className="container-logo">
						<a className="logoo" href="#inicio">
							<p className="m-0 logo"><span>Good</span>Food <span>:)</span></p>
						</a>					
					</div>
					<ul className="d-flex gap-5 m-0">
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
						<h1>Good<span>Food.</span></h1>
						<p>Gastronomía mundial a un click. </p>
						<Buscador filtro={filtro} setFiltro={setFiltro} setData={setData} data={data} setRender={setRender} />
						<p>Cada lugar, un sabor!!!</p>
						<span id="productos"></span>
					</div>
				</div>
			</header>
  )
}

Header.propTypes = {
	filtro: propsTypes.string.isRequired,
	setData: propsTypes.func.isRequired,
	setFiltro: propsTypes.func.isRequired, 
	data: propsTypes.array.isRequired, 
	setRender: propsTypes.func.isRequired
}

export default Header