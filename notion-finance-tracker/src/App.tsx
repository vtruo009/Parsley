import styled from "styled-components";
import InfoCard from "./components/InfoCard";

const StyledContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

function App() {
	return (
		<StyledContainer>
			<InfoCard />
		</StyledContainer>
	)
}

export default App
