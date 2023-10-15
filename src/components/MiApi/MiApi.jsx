import { useEffect } from "react";
import propsTypes from "prop-types";
import "./MiApi.css";

const MiApi = ({ setData, urlApi, render }) => {
	const callApi = async () => {
		try {
			const response = await fetch(urlApi);
			const datos = await response.json();
			setData(datos.meals);
		} catch (error) {
			console.error(`Error al cargar datos de la api`);
		}
	};

	useEffect(() => {
		callApi();
	}, []);

	return (
		<>
			{render?.map((ele) => {
				return (
					<div className="card" key={ele.idMeal}>
						<div className="img_container">
							<img src={ele.strMealThumb} alt="meal" />
						</div>
						<div className="card_body_container">
							<p>Platillo: {ele.strMeal}</p>
							<p>Origen: {ele.strArea}</p>
						</div>
						<div className="container_buttons">
							<div className="cont_btn">
								<a target="blank" href={ele.strSource}>
									Ingredientes
								</a>
							</div>
							<div className="cont_btn">
								<a target="blank" href={ele.strYoutube}>
									Preparacion
								</a>
							</div>
						</div>
					</div>
				);
			})}
			<div className="d-flex justify-content-center alerta">
			{render.length === 0 && <p className={"alert alert-danger mt-5"}>No hay coincidencias para tu "BÚSQUEDA"</p>}
			</div>
		</>
	);
};

MiApi.propTypes = {
	render: propsTypes.array.isRequired,
	setData: propsTypes.func.isRequired,
	urlApi: propsTypes.string.isRequired,
};

export default MiApi;
