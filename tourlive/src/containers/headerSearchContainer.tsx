import React from "react";
import HeaderSearch from "../components/headerSearch";
import { headerProps } from "../interfaces/states";

const SearchComponent: React.FC<headerProps> = ({ searchForKeyword }) => {
  return <HeaderSearch searchForKeyword={searchForKeyword} />;
};

export default SearchComponent;
