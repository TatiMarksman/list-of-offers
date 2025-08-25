import React from "react";
import { offers } from "./data/offers";
import OfferList from "./components/OfferList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>List of Offers</h1>
      <OfferList offers={offers} />
    </div>
  );
}

export default App;
