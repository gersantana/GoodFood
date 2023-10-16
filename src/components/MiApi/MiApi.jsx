import { useEffect } from "react";
import propsTypes from "prop-types";
import "./MiApi.css";

const MiApi = ({ setData, urlApi, render}) => {
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
		<div className="grid_main">
			{render?.map((ele) => {
				return (
					<div className="card" key={ele.idMeal}>
						<div className="img_container">
							<img src={ele.strMealThumb} alt="meal" />
						</div>
						<div className="card_body_container">
							<p>
								Platillo: <span>{ele.strMeal}</span>
							</p>
							<p>
								Origen: <span>{ele.strArea}</span>
							</p>
							<p>
								Categoría: <span>{ele.strCategory}</span>
							</p>
							<div className="container_buttons">
								<div className="cont_btn">
									<a target="blank" href={ele.strSource}>
										Ingredientes
									</a>
								</div>
								<div className="cont_btn">
									<a target="blank" href={ele.strYoutube}>
										Preparación
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

MiApi.propTypes = {
	render: propsTypes.array.isRequired,
	setData: propsTypes.func.isRequired,
	urlApi: propsTypes.string.isRequired,
};

export default MiApi;
