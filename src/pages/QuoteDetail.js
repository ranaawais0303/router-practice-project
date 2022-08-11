import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import React, { useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = (props) => {
  ////////////////useMatch hook//////////
  const match = useRouteMatch();
  console.log(match);

  ////use Params hook/////////////////
  const params = useParams();

  const { quoteId } = params;

  //////////http request////////////////////
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);

  /////////useEffect///////////////////
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered ">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered "></p>;
  }
  if (!loadedQuotes.text) {
    return <p>No Quote founnd</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
