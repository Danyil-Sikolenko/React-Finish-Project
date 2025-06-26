import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCity } from '../../../store/slice/citySelector';
import { fetchCities } from "../../../store/thunk/fetchDataHotels"
import { searchHotelsByQuery } from "../../../store/thunk/fetchDataHotels"
import { clearSearchResults } from '../../../store/slice/hotelsSearch';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';


function CitySelector() {
  const dispatch = useDispatch();
  const { selectedCity, cities } = useSelector(state => state.city);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(setSelectedCity(e.target.value));
  };

  const handleSearch = () => {
    if (selectedCity.trim() !== '') {
      dispatch(searchHotelsByQuery(selectedCity));
    }
  };

  const removeSearch = (e) => {
    const value = e.target.value;
    dispatch(setSelectedCity(value));
    if (typeof value === 'string' && value.trim() !== '') {
      dispatch(clearSearchResults());
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Paper
      component="form"
      sx={{
    width: "600px",
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '15px',
    position: 'relative',
    bottom: '40px',
    margin: '0 auto'
}}
      onSubmit={(e) => e.preventDefault()}
    >
      <IconButton sx={{ padding: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
        list="cities"
        value={selectedCity || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{ marginLeft: 1, flex: 1 }}
        placeholder="Enter city or hotel"
      />

      <IconButton onClick={handleSearch} sx={{ padding: '10px' }} aria-label="search">
            <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, margin: 0.5 }} orientation="vertical" />
      <IconButton onClick={removeSearch} color="primary" sx={{ padding: '10px' }} aria-label="directions">
        <DeleteIcon  sx={{fill: "#64c8af" }}/>
      </IconButton>
    </Paper>
  );
}

export default CitySelector;