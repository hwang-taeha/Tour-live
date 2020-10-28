import React from "react";
import styled from "styled-components";

const Button = styled.button``;

type pagebutton = {
  text: string;
  pagingString: string;
  searchForKeyword: (text: string, isFullUrl?: boolean) => void;
};

const PagingButton: React.FC<pagebutton> = ({
  text,
  pagingString,
  searchForKeyword,
}) => {
  function pagingClickEvent() {
    searchForKeyword(pagingString, true);
  }
  return (
    <>
      <Button disabled={pagingString ? false : true} onClick={pagingClickEvent}>
        {text}
      </Button>
    </>
  );
};

export default PagingButton;
