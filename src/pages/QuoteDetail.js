import { Route, useParams } from "react-router-dom";
import React from "react";
import Comments from "../components/comments/Comments";

const QuoteDetail = (props) => {
  const params = useParams();
  return (
    <React.Fragment>
      <h1>Quote Detail pages!</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
