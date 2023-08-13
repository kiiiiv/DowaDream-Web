import React from "react";

function Table() {
  const cols = [0, 1, 2, 3, 4, 5];

  return (
    <>
    <Table>
      <TableContainer>
        <Header>태그</Header>
        <Main></Main>
      </TableContainer>
      <TableContainer>
        <Header>모집기관</Header>
        <Main></Main>
      </TableContainer>
      <TableContainer>
        <Header>장소</Header>
        <Main></Main>
      </TableContainer>
    </Table>
    <Table>
    <TableContainer>
      <Header>모집기간</Header>
      <Main></Main>
    </TableContainer>
    <TableContainer>
      <Header>봉사기간</Header>
      <Main></Main>
    </TableContainer>
    <TableContainer>
      <Header>봉사시간</Header>
      <Main></Main>
    </TableContainer>
  </Table>
  <Table>
  <TableContainer>
    <Header>등록기관</Header>
    <Main></Main>
  </TableContainer>
  <TableContainer>
    <Header>성인 신청가능여부</Header>
    <Main></Main>
  </TableContainer>
  <TableContainer>
    <Header>청소년 신청가능여부</Header>
    <Main></Main>
  </TableContainer>
</Table>
</>
  );
}

export default Table;

const Table = styled.div`

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;

width: 1536px;
height: 53px;

/* Light Gray Color */
border-bottom: 1px solid #D9D9D9;

`
const TableContainer = styled.div`

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

margin: 0 auto;
width: 512px;

`
const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 10px;
gap: 10px;

width: 114px;
height: 53px;
background: #FFFAC9;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;


`
const Main = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;

width: 398px;
height: 41px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

color: #000000;


`









