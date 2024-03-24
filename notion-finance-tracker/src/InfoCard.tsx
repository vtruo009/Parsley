import styled from "styled-components";
import InputField from "./InputField";

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
`;

function InfoCard() {
    return (
        <StyledDiv>
            <StyledTitle>Notion Finance Tracker</StyledTitle>
            <StyledForm action="/create-transactions" method="POST" encType="multipart/form-data">
                <InputField label='API Token: ' type='password' name='apiToken' id='api-token' />
                <InputField label='Database ID:' type='text' name='databaseID' id='database-id' />
                <InputField type='file' name='csvFile' id='csv-file' />
                <div>
                    <button type="submit">Upload</button>
                </div>
            </StyledForm>
        </StyledDiv>
    )
}

export default InfoCard;
