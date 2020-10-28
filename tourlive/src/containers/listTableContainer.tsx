import React, { useState } from "react";
import ListTable from "../components/listTable";

import { Ilists } from "../interfaces/states";

type listTableContainer = {
  lists: Ilists;
  totalCount: number;
};

const ListTableComponent: React.FC<listTableContainer> = ({
  lists,
  totalCount,
}) => {
  return <ListTable lists={lists} totalCount={totalCount}></ListTable>;
};

export default ListTableComponent;
