import styles from "./ActivityFilters.module.scss";
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

export default function ActivityFilters({ filters }) {
  const [filterValue, setFilterValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  return (
    <div className={styles["activity-filters"]}>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <FormControl>
          <InputLabel id="sort-select-label">Sort by</InputLabel>
          <Select
            labelId="sort-select-label"
            label="Sort by"
            value={filterValue}
            sx={{ width: "13.75rem" }}
            color={"primary"}
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
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            label="Type"
            value={typeValue}
            sx={{ minWidth: "13.75rem" }}
            color={"primary"}
            onChange={(e) => setTypeValue(e.target.value)}
          >
            {filters.type.map((type, i) => (
              <MenuItem value={type.value} key={i}>
                {type.label}
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
            sx: { width: "21.188rem" },
          }}
          variant="standard"
        />
      </Stack>
    </div>
  );
}
