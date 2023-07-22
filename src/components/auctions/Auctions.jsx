import styles from "./Auctions.module.scss";
import {
  FormControl,
  Grid,
  Select,
  MenuItem,
  Container,
  InputLabel,
} from "@mui/material";
import Card from "../card/Card";
import { useState } from "react";

export default function Auctions({ cards = [], filters }) {
  const [priceRange, setPriceRange] = useState("");

  return (
    <div className={styles.Auctions}>
      <Container>
        <Grid container>
          <Grid item xs={10}>
            <h1 className={styles.title}>🔥 Live Auctions</h1>
          </Grid>
          <Grid item xs={2} sx={{ display: "flex" }}>
            <FormControl fullWidth className={styles.select} size="small">
              <InputLabel id="select-label">Sort By</InputLabel>
              <Select
                labelId="select-label"
                value={priceRange}
                onChange={e => setPriceRange(e.target.value)}
              >
                {filters &&
                  filters.price.map(filter => {
                    return (
                      <MenuItem key={filter.label} value={filter.value}>
                        {filter.label}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {cards.slice(0, 4).map((card, index) => (
            <Grid item md={3} key={index}>
              <Card {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
