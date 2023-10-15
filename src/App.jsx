import { useState } from "react";
import "./App.css";
import MiApi from "./components/MiApi/MIapi";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";

function App() {
	const urlApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
	const [data, setData] = useState([]);
	const [render, setRender] = useState([]);
	const [filtro, setFiltro] = useState("");

	return (
		<>
			<Header data={data} filtro={filtro} setFiltro={setFiltro} setRender={setRender} setData={setData} />
			<main className="main_container">
				<h2 className="text-center px-5 mt-5">Busca el platillo de tu preferencia y podrás encontrar todo la información referente, origen, ingredientes, preparación y videos tutoriales...</h2>
				<Alert render={render} mensaje={`No hay coincidencias para tu "BÚSQUEDA"`}/>
				<MiApi data={data} setData={setData} urlApi={urlApi} render={render} />
			</main>
			<Footer />
		</>
	);
}

export default App;
