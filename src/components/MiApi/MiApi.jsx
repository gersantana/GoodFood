import { useState, useEffect } from "react";
import "./MiApi.css";

const MiApi = ({ setData, urlApi, render}) => {


	const callApi = async () => {
		try {
		const response = await fetch(urlApi);
		const datos = await response.json();
		setData(datos.meals);
		// setOriginalData(datos.meals);
		} catch (error) {
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

export default MiApi;
