import { useState } from "react";
import "./Buscador.css";

const Buscador = () => {
	const [filtro, setFiltro] = useState("");

	const evento = (e) => {
		setFiltro(e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
			<div className="container_buscador">
				<form className="">
					<label htmlFor="filter">Buscador:</label>
					<input className="" placeholder="Filtra tu busqueda" type="text" name={filtro} id="filter" onChange={evento} />
				</form>
			</div>
		</>
	);
};

export default Buscador;
