import styled from 'styled-components';

interface InputFieldProps {
    label?: string;
    type: string;
    name: string;
    id: string;
}

const StyledInputField = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 50%;
`;

function InputField(props: InputFieldProps) {
    return (
        <StyledInputField>
            {props.label && <label>{props.label}</label>}
            <input type={props.type} name={props.name} id={props.id} />
        </StyledInputField>
    )
}

export default InputField;
