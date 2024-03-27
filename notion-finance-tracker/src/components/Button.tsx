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

function Button({ file }: { file: File | undefined }) {

    function handleButtonClick(event: React.SyntheticEvent) {
        event.preventDefault();

        if (typeof file === 'undefined') {
            console.log('File is undefined');
            return;
        }

        const formData = new FormData();
        formData.append('csvFile', file);

        fetch('http://localhost:3000/create-transactions', {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
            headers: {
                'Content-Type': 'text/csv'
            }
        })
            .then(() => console.log('Successfully sent file to server!'))
            .catch(err => console.log(`Error sending file to server...: ${err}`));
    }

    return (
        <StyledButton type='submit' onClick={handleButtonClick}>
            <h3>Process</h3>
        </StyledButton >
    );
}

export default Button;
