import styles from "./ProfileCollection.module.scss";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

export default function ProfileCollectionFilters({ filters }) {
  return (
    <div className={styles["profile-collection-filters"]}>
      <FormControl>
        <Stack direction={"row"}>
          <InputLabel id="sort-select-label">Sort by</InputLabel>
          <Select
            labelId="sort-select-label"
            label="Sort by"
            sx={{ width: "200px" }}
          >
            {filters.sort.map((filter, i) => (
              <MenuItem value={filter.value} key={i}>
                {filter.label}
              </MenuItem>
            ))}
          </Select>
          <InputLabel id="range-select-label">Price range</InputLabel>
          <Select
            labelId="range-select-label"
            label="Price range"
            sx={{ width: "200px" }}
          >
            {filters.price.map((price, i) => (
              <MenuItem value={price.value} key={i}>
                {price.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Stack>
      </FormControl>
    </div>
  );
}
