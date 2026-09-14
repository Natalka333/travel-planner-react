import css from "./TravelCard.module.css"


const TravelCard = ({ city, country, image, description, date, days }) => {
    return (
        <li className={css.card}>
            <div className={css.card_header}>
                <h3>{city}</h3>
                <p>{country }</p>
            </div>
            <img src={image} alt={description} className={css.img_card} />
            <div className={css.card_content}>
                <p>{description}</p>
                <p>{date}</p>
                <p>{days} days</p>
            </div>
        </li>
    )
}

export default TravelCard;