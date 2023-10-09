import { useState, useEffect } from "react";
import "./MiApi.css";

const MiApi = () => {

	const [data, setData] = useState([])
	const urlApi = "https://randomuser.me/api"

	const callApi = async () => {
		const response = await fetch(urlApi)
		const datos = await response.json()
		setData(datos.results)
		console.log(datos.results)
	}
	useEffect(() => {
		callApi()
	}, [])

	return (
		<>
			{data.map((ele, i) =>{
				return(
					<div key={i}>
						<p>Nombre:{ele.name.first}</p>
						<p>Apellido:{ele.name.last}</p>
					</div>
				)
			})}
		</>
	)

	

};

export default MiApi;
