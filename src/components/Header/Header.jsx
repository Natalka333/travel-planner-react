import css from "./Header.module.css"


const Header = () => {
    return (
        <header className={css.header}> 
            <h2 className={css.header_title}>
                <span role="img" aria-label="airplane">✈️</span> Travel Planner
            </h2>
            <nav>
            <ul className={css.header_menu}>
                <li className={css.header_item}>
                   <a className={css.header_link} href="#myTravels">My Travels</a>
                </li>
                <li className={css.header_item}>
                   <a className={css.header_link} href="#favorites">❤️Favorites</a>
                </li>
          </ul>
          </nav>
        </header>
        )
    }

export default Header;
