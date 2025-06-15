
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectDestination({ destinations }) {

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        overflowY: 'auto',
      },
    },
  };

  const uniqueDestinations = Array.isArray(destinations)
    ? destinations.filter((item, index, self) =>
        index === self.findIndex((i) => i.label === item.label)
      )
    : [];

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">City</InputLabel>
      <Select
        id="demo-multiple-name"
        value={{}}
        onChange={() => {}}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {uniqueDestinations.map((cities) => (
          <MenuItem key={cities.id} value={cities.id}>
            {cities.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectDestination;