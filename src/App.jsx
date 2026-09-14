

import TravelList from "./components/TravelList/TravelList";
import Header from "./components/Header/Header";
import travels from "./data/travels.json";


import './App.css'


function App() {
  return (
    <> 
      <Header />
      <TravelList trips={travels} />  
    </>
  )
}

export default App
