import React, { useMemo } from "react";
import styled from "styled-components";

import { Ilists } from "../interfaces/states";
import { numberFormat } from "../utils/calculation";
import { Link } from "react-router-dom";
const SearchResultDiv = styled.div`
  padding-top: 65px;
  height: 120px;
`;
const WrapTable = styled.table`
  width: 80%;
`;
const TableHeader = styled.th`
  background-color: gray;
`;
const TableBody = styled.tbody``;
const TableRow = styled.tr`
  border: solid 2px #ff5a5f;
`;
const TableColumn = styled.td`
  border: solid 1px gray;
`;
type listTableContainer = {
  lists: Ilists;
  totalCount: number;
};
const ListTable: React.FC<listTableContainer> = ({ lists, totalCount }) => {
  const listTranceToTag = useMemo(() => {
    const returnArr = lists.lists.map((element) => {
      return (
        <TableBody key={element.id}>
          <TableRow>
            <TableColumn>
              <Link to={`/detail/${element.id}`}>{element.title}</Link>
            </TableColumn>
            <TableColumn>{element.rate}</TableColumn>
            <TableColumn>
              {element.price ? numberFormat(parseInt(element.price)) : ""}원
            </TableColumn>
            <TableColumn>{element.created_at?.slice(0, 10)}</TableColumn>
          </TableRow>
        </TableBody>
      );
    });
    return returnArr;
  }, [lists]);
  return (
    <>
      <SearchResultDiv>
        검색결과 총 {totalCount}개의 검색결과가 있습니다.
      </SearchResultDiv>
      <WrapTable>
        <TableBody>
          <TableRow>
            <TableHeader>제목</TableHeader>
            <TableHeader>별점</TableHeader>
            <TableHeader>가격</TableHeader>
            <TableHeader>생성일</TableHeader>
          </TableRow>
        </TableBody>
        {listTranceToTag}
      </WrapTable>
    </>
  );
};

export default ListTable;
