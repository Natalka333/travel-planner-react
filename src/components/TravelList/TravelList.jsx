import TravelCard from "../TravelCard/TravelCard";

import css from "./TravelList.module.css"

const TravelList = ({ trips }) => {
    return (
        <div>
           <ul className={css.list}>
                {trips.map((trip) => (
                    <TravelCard key={trip.id}
                    {...trip}
        // id={trip.id}
        // city={trip.city}
        // country={trip.country}
        // image={trip.image}
        // description={trip.description}
        // date={trip.date}
        // days={trip.days} 
        />
                ))}
           </ul>
        </div>
        
)
}

export default TravelList;