import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuotes = (props) => {
  ///////////custom http hook and pass api////
  const { sendRequest, status } = useHttp(addQuote);

  //////use history//////////

  const history = useHistory();

  ///useEffect ////////////
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (QuoteData) => {
    // console.log(QuoteData);
    sendRequest(QuoteData);

    // history.push("/quotes");
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuotes;
