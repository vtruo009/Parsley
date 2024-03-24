import styled from "styled-components";

const StyledDiv = styled.div`
    width: 500px;
    height: 600px;
    border: solid 2px gray;
    border-radius: 20px;
`;

function InfoCard() {
    return (
        <StyledDiv>
            <h3>Notion Finance Tracker</h3>
            <form action="/create-transactions" method="POST" encType="multipart/form-data">
                <div>
                    <label>Notion API Token:</label>
                    <input type="password" name="notionAPIToken" id="notion-api-token" />
                </div>
                <div>
                    <label>Notion Database ID:</label>
                    <input type="text" name="notionDatabaseID" id="notion-database-id" />
                </div>
                <div>
                    <input type="file" name="csvFile" id="csv-file" />
                    <button type="submit">Upload</button>
                </div>
            </form>
        </StyledDiv>
    )
}

export default InfoCard;
