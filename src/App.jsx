
import { useState } from "react";

import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import TravelList from "./components/TravelList/TravelList";

import travels from "./data/travels.json";

import "./App.css";

function App() {
  const trips = travels;
  const [searchQuery, setSearchQuery] = useState("");

  // сохраняет поисковую строку в state
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

// вычисляется автоматически на основании trips и searchQuery.
// Если поле пустое, показываем все поездки
  const filteredTrips = searchQuery.trim()
    ? trips.filter(
        (trip) =>
          trip.city.toLowerCase() ===
          searchQuery.trim().toLowerCase()
      )
    : trips;

  return (
    <>
      <Header />

      <SearchForm onSearch={handleSearch} />

      <TravelList trips={filteredTrips} />
    </>
  );
}

export default App;
