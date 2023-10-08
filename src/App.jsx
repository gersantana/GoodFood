import { useState } from "react";
import "./App.css";
import MiApi from "./components/MiApi/MIapi";
import Buscador from "./components/Buscador/Buscador";

function App() {
	return (
		<div>
			<p>Iniciando proyecto React</p>
			<MiApi />
			<Buscador />
		</div>
	);
}

export default App;