import styled from "styled-components";
import InputField from "./InputField";
import Button from "./Button";

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

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0px 10px;
`;

function InfoCard() {
    return (
        <StyledDiv>
            <StyledTitle>Notion Finance Tracker</StyledTitle>
            <StyledForm >
                <InputField label='API Token: ' type='password' name='apiToken' id='api-token' />
                <InputField label='Database ID:' type='text' name='databaseID' id='database-id' />
                <InputField type='file' name='csvFile' id='csv-file' />
                <Button />
            </StyledForm>
        </StyledDiv>
    )
}

export default InfoCard;
