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
            <span className={styles.label}>Expensive hotels ⬅️</span>
         <FormControlLabel
         sx={{marginLeft: "7px"}}
            control={<Switch checked={sortAsc} onChange={() => dispatch(toggleSortOrder())} />}
             className={styles.switchLabel}
        />
        <span className={styles.label}>➡️ Cheap hotels </span>
        </div>
    );
}
export default SortButton