import styles from "./ProfileCollectionFilters.module.scss";
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

import { useState } from "react";

export default function ProfileCollectionFilters({ filters }) {
  const [filterValue, setFilterValue] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState("");

  return (
    <div className={styles["profile-collection-filters"]}>
      <Stack direction={"row"} spacing={2}>
        <FormControl>
          <InputLabel id="sort-select-label">Sort by</InputLabel>
          <Select
            labelId="sort-select-label"
            label="Sort by"
            sx={{ width: "200px" }}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            {filters.sort.map((filter, i) => (
              <MenuItem value={filter.value} key={i}>
                {filter.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="range-select-label">Price range</InputLabel>
          <Select
            labelId="range-select-label"
            label="Price range"
            sx={{ width: "200px" }}
            value={priceRangeValue}
            onChange={(e) => setPriceRangeValue(e.target.value)}
          >
            {filters.price.map((price, i) => (
              <MenuItem value={price.value} key={i}>
                {price.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className={styles["search-icon"]} />
              </InputAdornment>
            ),
            className: styles.search,
            disableUnderline: true,
          }}
          variant="standard"
        />
      </Stack>
    </div>
  );
}
