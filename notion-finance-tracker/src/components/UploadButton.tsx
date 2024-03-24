import styled from "styled-components";

const StyledButton = styled.button`
    width: 10em;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
`;

function ButtonClicked() {
    fetch('http://localhost:3000/',
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

function UploadButton() {
    return (
        <StyledButton onClick={ButtonClicked}>
            <h3>Upload</h3>
        </StyledButton>
    )
}

export default UploadButton;
