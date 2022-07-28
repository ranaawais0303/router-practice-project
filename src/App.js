import { Switch, Route, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  return (
    <Switch>
      {/* <Route path="/">
        <Redirect to="/quotes" exact />
      </Route> */}
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
