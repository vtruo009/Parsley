import styled from "styled-components";

const StyledButton = styled.button`
    width: 10em;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
`;

function UploadButton() {
    return (
        <StyledButton onClick={() => console.log('Uploading file...')}>
            <h3>Upload</h3>
        </StyledButton>
    )
}

export default UploadButton;
