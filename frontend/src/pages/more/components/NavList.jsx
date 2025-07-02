import NavBanner from "./NavBanner";

import searchIcon from "../../../assets/icon/search_manager.svg";
import accountIcon from "../../../assets/icon/account_manager.svg";
import flexibleIcon from  "../../../assets/icon/flexible_manager.svg"

import styles from "./more.module.css";
function NavList () {
    return(
        <>
          <h1 className={styles.main_title }>Flex Living<br/> Insights</h1>
            <div className={styles.sub_nav}>
                <ul className={styles.main_list}>
                    <li className={styles.item}>
                        <a href="#">View all</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#">Destination guide</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#">Remote working</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#">Property investing</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#">Property insights</a>
                    </li>
                </ul>
            </div>
          <div className={styles.banner}></div>
          <div className={styles.management}>
            <h2 style={{fontSize:"40px", marginBottom:"16px"}}>Corporate Partnerships</h2>
            <p style={{fontSize:"18px", fontWeight:"400" , maxWidth:"600px", margin:"auto", marginBottom:"30px"
            }}>We work with 100+  companies to meet accommodation needs in London. Offer a dedicatedbooking
                 manager that can help to find properties for your needs.</p>
          </div>
          <ul style={{display:"flex", justifyContent:"center", gap: "20px", marginBottom: "130px"}}>
            <li className={styles.item_management}>
                <img style={{marginBottom:"20px" , paddingTop:"37px", }} src={searchIcon} alt="" />
                <p  className={styles.item_management_title}>Booking manager</p>
                <span className={styles.item_management_sub_title}>We do the searching for you</span>
            </li>
             <li  className={styles.item_management}>
                <img style={{marginBottom:"20px" , paddingTop:"37px" ,}} src={accountIcon} alt="" />
                <p className={styles.item_management_title}>Account manager</p>
                <span className={styles.item_management_sub_title}>Preferred partner rates</span>
            </li>
             <li  className={styles.item_management}>
                <img style={{marginBottom:"18px" , paddingTop:"37px", }} src={flexibleIcon} alt="" />
                <p className={styles.item_management_title}>Flexible terms</p>
                <span className={styles.item_management_sub_title}>Extend on short notice</span>
            </li>
          </ul>
          <NavBanner />
           <p className={styles.copy}>&copy; 2025 Danyil.</p>
        </>
    )
}
export default NavList