import React, { useState } from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = (props) => {
  const addQuoteHandler = (QuoteData) => {
    console.log(QuoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
