import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const StyledDiv = styled.div`
    width: 200px;
    height: 250px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;

    select {
        width: 80%;
        height: 30px;
        border-radius: 5px;
    }
`;

const StyledFileUpload = styled.div`
    width: 70%;
    height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        margin: 5px;
        position: absolute;
    }

    label > img {
        width: 50px;
        height: 50px;
        margin: 0px 5px;
    }

    label > p {
        margin: 5px;
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

    async function loadOptions(event: React.SyntheticEvent) {
        console.log('hello?')
        event.preventDefault();

        await fetch('http://localhost:3000/search', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((res) => res.json())
            .then(data => console.log('set stuff', data))
            .catch((err) => console.log(err))
    }

    return (
        <StyledDiv>
            <StyledForm encType="multipart/form-data">
                <select onChange={loadOptions}>
                    <option value='database-1' >Database 1</option>
                    <option value='database-2' >Database 2</option>
                </select>
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
