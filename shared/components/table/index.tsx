import styled from "styled-components";

const StyledTable = styled.table`
  width: 80%;
  margin: 0px 10%;
  caption-side: top;
  border: 2px solid white;
  border-collapse: collapse;
  caption-side: bottom;
  th {
    background-color: white;
    color: #005AA3;
    border: 1px solide white;
  }
  td {
    padding: 5px 10px;
    border: 1px solid white;
  }
  tbody tr {
    :nth-of-type {
      background-color: #ffffff;
    }
    :hover {
      background-color: #66FCF1;
      color: black;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`;
export default ({ data }: any) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);
const TableMarkup = ({ titles, data }: any) => (
  <StyledTable>
    <thead>
      <tr>
        {titles.map((title: string, index: number) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item: string, index: number) => (
        <tr key={index}>
          {titles.map((title: any, index: number) => (
            <td style={{textAlign: 'center'}} key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
