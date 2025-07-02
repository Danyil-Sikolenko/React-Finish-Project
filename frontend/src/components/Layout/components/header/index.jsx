import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router';
import { logout } from '../../../../store/slice/authSlice';
import Logo from '../../../../assets/icon/Logo.png';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HotelIcon from '@mui/icons-material/Hotel';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BusinessIcon from '@mui/icons-material/Business';

import styles from './header.module.css';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/about', label: 'About-Project', icon: <InfoIcon /> },
    { path: '/hotels', label: 'Hotels', icon: <HotelIcon /> },
    { path: '/more', label: 'Partner', icon: <GroupWorkIcon /> },
    { path: '/myHotels', label: 'My-Hotels', icon: <BusinessIcon /> }
  ];

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);
  const handleLogout = () => {
    dispatch(logout());
    closeMenu();
  };


  return (
    <header className={styles.header}>
      <div className={styles.left_conteiner}>
        <button onClick={() => { navigate('/'); closeMenu(); }} className={styles.logoBtn}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </button>
      </div>
      <nav className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.mobileAuth}>
          {user ? (
            <>
              <div className={styles.userRow}>
                <AccountCircleIcon />
                <span className={styles.username}>{user.name || 'User'}</span>
              </div>
              <button className={styles.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={styles.signupMobile} onClick={closeMenu}>
              Login
            </NavLink>
          )}
        </div>

        {links.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? `${styles.item} ${styles.active}` : styles.item
            }
          >
            <span className={styles.linkIcon}>{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.right_conteiner}>
        {user ? (
          <div className={styles.userSection}>
            <AccountCircleIcon />
            <span className={styles.username}>{user.name || 'User'}</span>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className={styles.signup}>
            Login
          </NavLink>
        )}

        <div className={styles.burger} onClick={toggleMenu}>
          <span className={isOpen ? styles.open1 : ''}></span>
          <span className={isOpen ? styles.open2 : ''}></span>
          <span className={isOpen ? styles.open3 : ''}></span>
        </div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
}

export default Header;