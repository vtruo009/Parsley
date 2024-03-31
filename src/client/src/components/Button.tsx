import styled from "styled-components";

const StyledButton = styled.button`
    width: 10em;
    height: 50px;
    background: none;
    border: 1px solid gray;
    border-radius: 25px;
    cursor: pointer;
    background-color: #B9EBFF;

    h2 {
        margin: auto;
    }
`;

function Button({ file }: { file: File | undefined }) {

    function handleButtonClick(event: React.SyntheticEvent) {
        event.preventDefault();

        if (typeof file === 'undefined') {
            console.log('Error: file is undefined');
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
            <h2>Create</h2>
        </StyledButton >
    );
}

export default Button;
