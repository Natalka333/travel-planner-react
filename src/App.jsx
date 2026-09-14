import TravelList from "./components/TravelList/TravelList";
import Header from "./components/Header/Header";
import './App.css'


const trips = [];

function App() {
  return (
    <> 
      <Header />
      <TravelList trips={trips} />
        <div>
          <h1>Travel Planner</h1>    
          <p>Мои Путешествия</p>
         
        </div>   
    </>
  )
}

export default App
