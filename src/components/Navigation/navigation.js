import { NavLink } from "react-router-dom";
import styles from "../../styles.module.css"

const Navigation =()=>(
<nav>
    <NavLink exact to="/" className={styles.link}
     activeClassName={styles.activeLink}>HomePage</NavLink>
    <NavLink to="/movies" className={styles.link} activeClassName={styles.activeLink}>MoviesPage</NavLink>
    <NavLink exact to="/movies/:movieId" className={styles.link} activeClassName={styles.activeLink}>MovieDetailsPage</NavLink>
    <NavLink to="/movies/:movieId/cast" className={styles.link} activeClassName={styles.activeLink} >Cast</NavLink>
    <NavLink to="/movies/:movieId/reviews" className={styles.link} activeClassName={styles.activeLink}>Reviews</NavLink>



    </nav>
)
    export default Navigation;