import InfoCard from "./components/InfoCard";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path='/' element={<InfoCard />} />
		</Routes>
	)
}

export default App
