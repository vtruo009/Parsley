import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const StyledDiv = styled.div`
    height: 100px;
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

const StyledForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const StyledFileUpload = styled.div`
    width: 70%;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        margin: 5px;
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    label > img {
        width: 30px;
        height: 30px;
        margin: 0px 5px;
    }
    input[type='file'] {
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

function InfoCard() {

    const [file, setFile] = useState<File | undefined>();

    async function handleOnChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;

        if (!target.files) return
        setFile(target.files[0])
    }

    return (
        <StyledDiv>
            <StyledForm encType="multipart/form-data">
                <StyledFileUpload>
                    <label>
                        <img src='https://img.icons8.com/ios/250/000000/import-csv.png' />
                        {<p>{file?.name || 'Select CSV File'}</p>}
                    </label>
                    <input type='file' name='csvFIle' id='csv-file' onChange={handleOnChange} />
                </StyledFileUpload>
                <Button file={file} />
            </StyledForm>
        </StyledDiv>
    );
}

export default InfoCard;
