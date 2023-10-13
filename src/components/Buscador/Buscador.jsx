import { useEffect} from "react";
import "./Buscador.css";

const Buscador = ({ filtro, setFiltro, data, setRender}) => {

	const evento = (e) => {
		setFiltro(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		if (!filtro) {
			setRender(data);
			console.log(data);
		} else {
			const dataFiltrada = data.filter((ele) => {
				return (
				ele.strMeal.toLowerCase().includes(filtro.toLowerCase()) ||
				ele.strArea.toLowerCase().includes(filtro.toLowerCase())
			)
		})
			setRender(dataFiltrada);
			console.log(dataFiltrada);
		}
	}, [filtro, setRender, data]);

	return (
		<>
			<div className="container_buscador">
				<form className="w-100">
					<label className="form-label fs-2" htmlFor="filter">
						Buscador:
					</label>
					<input className="form-control h-50 fs-3" placeholder="Filtra tu busqueda" type="text" name={filtro} id="filter" onChange={evento} />
				</form>
			</div>
		</>
	);
};

export default Buscador;
