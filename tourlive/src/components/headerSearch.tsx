import React, { useRef } from "react";
import styled from "styled-components";

const Header = styled.div`
  padding-left: 10px;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 400;
`;
const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  vertical-align: baseline;
`;
const HeaderLogo = styled.div``;
const HeaderLogoA = styled.a``;
const HeaderLogoAImg = styled.img`
  content: url("https://tourlive-api-staging.s3.ap-northeast-2.amazonaws.com/test_images/images/logo.png");
  height: 15px;
`;

const HeaderSearchBar = styled.div`
  width: 100%;
  margin: 0 10px;
  display: flex;
  align-items: center;
  border-color: #ff5a5f;
  border: solid 2px #ff5a5f;
`;
const HeaderSearchForm = styled.form`
  display: flex;
  width: 100%;
`;
const HeaderSearchBarInput = styled.input`
  width: calc(100% - 60px);
  height: 40px;
  font-size: 14px;
  padding: 0 0 0 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const HeaderSearchBarBtn = styled.button`
  width: 40px;
  height: 40px;
  background: url(https://tourlive-api-staging.s3.ap-northeast-2.amazonaws.com/test_images/images/icon-search.png)
    no-repeat 50%;
  border: none;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;
type headerProps = {
  searchForKeyword: (text: string, isFullUrl?: boolean) => void;
};

const HeaderSearch: React.FC<headerProps> = ({ searchForKeyword }) => {
  const inputText = useRef<HTMLInputElement>(null);
  function searchSubmitEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputText.current) {
      return;
    }
    searchForKeyword(inputText.current.value);
  }
  return (
    <Header>
      <HeaderWrap>
        <HeaderLogo>
          <HeaderLogoA>
            <HeaderLogoAImg></HeaderLogoAImg>
          </HeaderLogoA>
        </HeaderLogo>
        <HeaderSearchBar>
          <HeaderSearchForm onSubmit={searchSubmitEvent}>
            <HeaderSearchBarInput ref={inputText}></HeaderSearchBarInput>
            <HeaderSearchBarBtn></HeaderSearchBarBtn>
          </HeaderSearchForm>
        </HeaderSearchBar>
      </HeaderWrap>
    </Header>
  );
};

export default HeaderSearch;
