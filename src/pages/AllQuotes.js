import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Awais", text: "React Quote Practice" },
  { id: "q2", author: "Sarmad", text: "React Quote Learning" },
];
const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
