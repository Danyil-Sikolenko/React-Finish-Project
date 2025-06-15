import { useEffect } from 'react';
import { fetchDataHotels } from '../../../store/thunk/fetchDataHotels';
import { useSelector, useDispatch } from 'react-redux';
import banner from '../../../assets/img/main_banner.jpg';
import SelectDestination from './SelectDestination';

import styles from './home.module.css';

function Home() {
    const { destinations, loading, error } = useSelector((state) => state.hotelsData);


    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <SelectDestination destinations={destinations} />
            </div>
        </div>
    );
}

export default Home;