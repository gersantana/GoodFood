import { useEffect } from "react";
import propsTypes from "prop-types"
import "./MiApi.css";

const MiApi = ({ setData, urlApi, render}) => {

	const callApi = async () => {
		try {
		const response = await fetch(urlApi);
		const datos = await response.json();
		setData(datos.meals);
		} 
		catch (error) {
			console.error(`Error al cargar datos de la api`)
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
							<img src={ele.strMealThumb} alt="" />
						</div>
						<div className="card_body_container">
							<p>Nombre:{ele.strMeal}</p>
							<p>Apellido:{ele.strArea}</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

MiApi.propTypes = {
	render: propsTypes.array.isRequired,
	setData: propsTypes.func.isRequired,
	urlApi: propsTypes.string.isRequired
}

export default MiApi;
