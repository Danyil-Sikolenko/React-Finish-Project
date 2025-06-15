import { useDispatch, useSelector } from "react-redux";
import { toggleSortOrder } from "../../../store/slice/dataHotelsSlice";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import styles from './hotels.module.css';

function SortButton() {
   const dispatch = useDispatch();
    const sortAsc = useSelector((state) => state.hotelsData.sortAsc);

    return (
        <div className={styles.container}>
         <FormControlLabel
            control={<Switch checked={sortAsc} onChange={() => dispatch(toggleSortOrder())} />}
            label={sortAsc ? "По возрастанию ⭐" : "По убыванию ⭐"}
        />
        </div>
    );
}
export default SortButton