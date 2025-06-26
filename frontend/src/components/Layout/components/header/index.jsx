import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";

import { logout } from "../../../../store/slice/authSlice"; 
import Logo from "../../../../assets/icon/Logo.png";

import styles from "./header.module.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const { user } = useSelector(state => state.auth);


  return (
    <header className={styles.header}>
      <button onClick={() => navigate('/')} style={{ background: "none", border: "none", cursor: "pointer", paddingLeft: "0px" }}>
        <img src={Logo} alt="#" className={styles.logo} />
      </button>
      <div className={styles.navContainer}>
        <nav className={styles.navMenu}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
            About-Project
          </NavLink>
          <NavLink to="/hotels" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
            Hotels
          </NavLink>
          <NavLink to="/more" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
            Partner
          </NavLink>
          <NavLink to="/myHotels" className={({ isActive }) => isActive ? `${styles.item} ${styles.active}` : styles.item}>
            My-hotels
          </NavLink>

        </nav>
      </div>
      {user ? (
        <div className={styles.userSection}>
          <span className={styles.username}>{user.name || 'User'}</span>
          <button className={styles.logoutBtn} onClick={() => dispatch(logout())}>
            Logout
          </button>
        </div>
      ) : (
        <NavLink to="/login" className={styles.signup}>Login</NavLink>
      )}

    </header>
  );
}

export default Header;