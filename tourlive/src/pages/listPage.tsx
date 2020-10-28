import React, { useState, useEffect } from "react";
//import styled from "styled-components";
import axios from "axios";

import HeaderSearch from "../containers/headerSearchContainer";
import ListTable from "../containers/listTableContainer";
import PageingBtn from "../components/pagingbutton";
import { Ilists } from "../interfaces/states";

const data: Ilists = {
  lists: [],
};

const ListPage = () => {
  const [curList, setCurList] = useState(data);
  const [totalCount, setTotalCount] = useState(0);
  const [prePageUrl, setPrePageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const baseUrl =
    "http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours";

  function searchForKeyword(text: string, isFullUrl?: boolean) {
    let url = isFullUrl ? text : `${baseUrl}?search=${text}`;

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (data.success) {
          setTotalCount(data.data.count);
          setCurList({ lists: data.data.results });
          setPrePageUrl(data.data.previous);
          setNextPageUrl(data.data.next);
        }
      })
      .catch((err) => {});
  }

  useEffect(() => {
    searchForKeyword("");
  }, []);
  return (
    <>
      <HeaderSearch searchForKeyword={searchForKeyword}></HeaderSearch>
      <ListTable lists={curList} totalCount={totalCount}></ListTable>
      <PageingBtn
        text="pre"
        pagingString={prePageUrl}
        searchForKeyword={searchForKeyword}
      ></PageingBtn>
      <PageingBtn
        text="next"
        pagingString={nextPageUrl}
        searchForKeyword={searchForKeyword}
      ></PageingBtn>
    </>
  );
};

export default ListPage;
