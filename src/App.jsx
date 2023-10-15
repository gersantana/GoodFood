import { useState } from "react";
import "./App.css";
import MiApi from "./components/MiApi/MIapi";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	const urlApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
	const [data, setData] = useState([]);
	const [render, setRender] = useState([]);
	const [filtro, setFiltro] = useState("");

	return (
		<>
			<Header data={data} filtro={filtro} setFiltro={setFiltro} setRender={setRender} setData={setData} />
			<main className="main_container grid_main">
				<MiApi data={data} setData={setData} urlApi={urlApi} render={render} />
			</main>
			<Footer />
		</>
	);
}

export default App;
