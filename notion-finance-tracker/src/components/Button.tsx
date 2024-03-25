import styled from "styled-components";

const StyledButton = styled.button`
    width: 10em;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    background-color: #EEB39E;
    margin-top: 100px;
`;

function ButtonClicked() {
    fetch('http://localhost:3000/test',
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(() => console.log('Button is clicked!'));
}

function Button() {
    return (
        <StyledButton onClick={ButtonClicked}>
            <h3>Process</h3>
        </StyledButton>
    )
}

export default Button;
