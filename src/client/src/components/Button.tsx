import styled from "styled-components";

const StyledButton = styled.button<{ disabled: boolean }>`
    width: 10em;
    height: 50px;
    background: none;
    border: 1px solid gray;
    border-radius: 25px;
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
    background-color: #B9EBFF;

    h2 {
        margin: auto;
    }
`;

interface ButtonProps {
    file?: File;
    databaseID: String;
    disabled: boolean;
}

function Button(props: ButtonProps) {

    function handleButtonClick(event: React.SyntheticEvent) {
        event.preventDefault();

        if (typeof props.file === 'undefined') {
            console.log('Error: file is undefined');
            return;
        }

        const formData = new FormData();
        formData.append('csvFile', props.file);

        fetch(`http://localhost:3000/create-transactions/${props.databaseID}`, {
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
        <StyledButton disabled={props.disabled} type='submit' onClick={handleButtonClick}>
            <h2>Create</h2>
        </StyledButton >
    );
}

export default Button;
