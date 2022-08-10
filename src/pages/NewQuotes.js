import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = (props) => {
  const history = useHistory();
  const addQuoteHandler = (QuoteData) => {
    console.log(QuoteData);

    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
