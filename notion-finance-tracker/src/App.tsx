import styled from "styled-components";
import InfoCard from "./components/InfoCard";
import { Routes, Route } from "react-router-dom";

const StyledContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

function App() {
	return (
		<StyledContainer>
			<Routes>
				<Route path='/' element={<InfoCard />} />
			</Routes>
		</StyledContainer>
	)
}

export default App
