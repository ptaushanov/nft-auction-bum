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
      <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
        <FormControl>
          <InputLabel id="sort-select-label">Sort by</InputLabel>
          <Select
            labelId="sort-select-label"
            label="Sort by"
            value={filterValue}
            sx={{ minWidth: "13.75rem" }}
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
            value={priceRangeValue}
            sx={{ minWidth: "13.75rem" }}
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
            sx: { minWidth: "21.188rem" },
          }}
          variant="standard"
        />
      </Stack>
    </div>
  );
}
