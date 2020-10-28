import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import axios from "axios";
const TestP = styled.p`
  margin-bottom: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: baseline;
  line-height: 32px;
  font-size: 16px;
  color: rgb(97, 97, 97);
  font-family: "Noto Sans KR", sans-serif;
`;
function splitTag(textTag: string) {
  let result = "";

  result = textTag.split(">").reduce((acc, cur) => {
    if (cur[0] === "<") {
      return acc;
    }

    cur = cur.replace(/&nbsp/g, "\n");
    cur = cur.replace(/<br/, "\n");
    cur = cur.replace(/<\/p/g, "");
    cur = cur.replace(/;/g, "");
    cur = cur.replace(/&amp/g, "");
    return acc + cur;
  }, "");

  return result;
}

const DetailPage: React.SFC<RouteComponentProps> = ({ match }) => {
  const id: any = match.params;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [content, setContent] = useState("");

  const baseUrl =
    "http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours";
  useEffect(() => {
    axios
      .get(baseUrl + `/${id.id}`)
      .then((res) => {
        setTitle(res.data.data.title);
        setImage(res.data.data.image);
        setPrice(res.data.data.price);
        setRate(res.data.data.rate);
        const content = splitTag(res.data.data.content);
        setContent(content);
        console.log(splitTag(res.data.data.content));
      })
      .catch();
  }, []);

  return (
    <>
      <div>{`${title}`}</div>
      <img src={image}>{}</img>
      <div>{`가격 : ${price}`}</div>
      <div>{`평점 : ${rate}`}</div>
      {content.split("\n").map(function (item, idx) {
        return (
          <span key={idx}>
            {item}
            <br />
          </span>
        );
      })}
    </>
  );
};

export default withRouter(DetailPage);
