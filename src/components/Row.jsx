import styled from "styled-components";

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
`;

function Row({ $columns, children }) {
  return <CommonRow $columns={$columns}>{children}</CommonRow>;
}

export default Row;
