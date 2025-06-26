import ListResult from './ListResult';
import CitySelector from './SelectDestination';
import styles from './home.module.css';
import bookIcon from "../../../assets/icon/Book_icon.svg";

function Home() {

  return (
    <>
     <div className={styles.hero}>
       <h1 className={styles.main_title}>Book Perfect Stay for Your Vacation</h1>
        <div className={styles.controls}>
          <CitySelector />
        </div>
  
          <div className={styles.info_text}>
          We are Premier hotel booking service that caters to the discerning traveler in search of luxury and Sophistication
        </div>
        <div className={styles.detail_box}>
          <a href="#">
              <img src={bookIcon} alt="" />
          </a>
        </div>
        
      </div>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <div className={styles.cardsContainer}>
            <ListResult />
          </div>
        </div>
      </div>

    </>
   
  );
}

export default Home;