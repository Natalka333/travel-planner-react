import css from "./TravelCard.module.css"


const TravelCard = ({ city, country, image, description, date, endDate, days}) => {
    return (
        <li className={css.card}>
            <img src={image} alt={description} className={css.img_card} loading="lazy"/>
            <div className={css.card_header}>
                <h3>{city}</h3>
                <p>{country }</p>
            </div>
            
            <div className={css.card_content}>
                <p>{description}</p>
                <p>{date} — {endDate}</p>
                <p>{days} days</p>
            </div>
            {/* <ul>
                {attractions.map((attraction) => (
                <li key={attraction}>{attraction}</li>
                ))}
             </ul> */}
        </li>
    )
}

export default TravelCard;