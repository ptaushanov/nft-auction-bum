import styles from "./ActivityFilters.module.scss";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function ActivityFilters({ filters }) {
  const [sortBy, setSortBy] = useState("");
  const [type, setType] = useState("");

  return (
    <div className={styles["activity-filters"]}>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <FormControl>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            value={sortBy}
            sx={{ width: "13.75rem" }}
            color={"primary"}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {filters.sort.map((filter) => {
              return (
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            value={type}
            sx={{ minWidth: "13.75rem" }}
            color={"primary"}
            onChange={(e) => setType(e.target.value)}
          >
            {filters.type.map((filter) => {
              return (
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={styles["search-icon"]} />
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
