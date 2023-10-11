import { useState, useEffect } from "react";
import "./MiApi.css";

const MiApi = () => {

	const [data, setData] = useState([])
	const urlApi = "https://www.themealdb.com/api/json/v1/1/search.php?s="

	const callApi = async () => {
		const response = await fetch(urlApi)
		const datos = await response.json()
		console.log(datos.meals)
		setData(datos.meals)
	}
	useEffect(() => {
		callApi()
	}, [])

	return (
		<>
			{data.map((ele) =>{
				return(
					<div key={ele.idMeal}>
						<img src={ele.strMealThumb} alt="" />
						<p>Nombre:{ele.strMeal}</p>
						<p>Apellido:{ele.strArea}</p>
					</div>
				)
			})}
		</>
	)
// 	const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e080a380f8msh46c262551d1accap122864jsn4cc620b3e85c',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };
// 	const getapi = async () => {
// 		try {
// 			const response = await fetch(url, options);
// 			const result = await response.text();
// 			console.log(result);
// 		} catch (error) {
// 			console.error(error);
// 		}
// }
//  useEffect(() => {
// 		getapi()
// 	}, [])

};

export default MiApi;
