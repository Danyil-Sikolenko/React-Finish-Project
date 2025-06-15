import { NavLink } from "react-router";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src="#" alt="#" className={styles.logo} width={50} height={50} />
      <div className={styles.navContainer}>
        <nav className={styles.navMenu}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
          About-Us
        </NavLink>
        <NavLink to="/hotels" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
          Hotels
        </NavLink>
        <NavLink to="/more" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
          More
        </NavLink>

        </nav>
      </div>
      <NavLink to="/signup" className={styles.signup}>Signup</NavLink>
    </header>
  );
}

export default Header;