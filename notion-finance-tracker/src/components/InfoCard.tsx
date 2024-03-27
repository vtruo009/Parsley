import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const StyledDiv = styled.div`
    width: 500px;
    height: 600px;
    border: solid 2px gray;
    border-radius: 20px;
    background-color: #F5F5F2;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
`;

const StyledTitle = styled.h3`
    text-align: center;
    font-size: xx-large;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0px 10px;
`;

const StyledInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
`;

function InfoCard() {

    const [file, setFile] = useState<File | undefined>();

    async function handleOnChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;

        if (!target.files) {
            console.debug('No file selected...');
            return;
        }
        setFile(target.files[0])
    }

    return (
        <StyledDiv>
            <StyledTitle>Notion Finance Tracker</StyledTitle>
            <StyledForm encType="multipart/form-data">
                <StyledInputDiv>
                    <label>Notion API Token</label>
                    <input type='text' name='password' id='api-token' />
                </StyledInputDiv>
                <StyledInputDiv>
                    <label>Notion Database ID</label>
                    <input type='text' name='password' id='api-token' />
                </StyledInputDiv>
                <StyledInputDiv>
                    <label>CSV File</label>
                    <input type='file' name='csvFIle' id='csv-file' onChange={handleOnChange} />
                </StyledInputDiv>
                <Button file={file} />
            </StyledForm>
        </StyledDiv>
    );
}

export default InfoCard;
