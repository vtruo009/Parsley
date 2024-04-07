import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { Database } from '../../../server/src/utils/interfaces';
import AsyncSelect from 'react-select/async';

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
`;

const StyledAsyncSelect = styled(AsyncSelect)`
    width: 80%;
    height: 30px;
    border-radius: 5px;
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
    const [disabled, setDisabled] = useState<boolean>(true);
    const [databaseID, setDatabaseID] = useState<string>('');
    const [query, setQuery] = useState("");

    async function handleOnChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;

        if (!target.files) return
        setFile(target.files[0])
        setDisabled(false);
    }

    async function loadOptions(): Promise<Database[]> {
        return await fetch(`http://localhost:3000/search/${query}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }

    return (
        <StyledDiv>
            <StyledForm encType="multipart/form-data">
                <StyledAsyncSelect
                    cacheOptions
                    defaultOptions
                    loadOptions={loadOptions}
                    onInputChange={(value) => setQuery(value)}
                    getOptionLabel={(option) => (option as Database).title}
                    getOptionValue={(option) => (option as Database).id}
                    onChange={(value) => setDatabaseID((value as Database).id)}
                    styles={{
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: state.isFocused ? '#B9EBFF' : 'white',
                        }),
                    }}
                    placeholder='🔎 database...'
                />
                <StyledFileUpload>
                    <label>
                        <img src='https://img.icons8.com/ios/250/000000/import-csv.png' />
                        {<p>{file?.name || 'Select CSV File'}</p>}
                    </label>
                    <input type='file' name='csvFIle' id='csv-file' onChange={handleOnChange} />
                </StyledFileUpload>
                <Button file={file} databaseID={databaseID} disabled={disabled} />
            </StyledForm>
        </StyledDiv>
    );
}

export default InfoCard;
