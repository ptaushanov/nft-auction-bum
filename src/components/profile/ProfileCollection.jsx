import styles from "./ProfileCollection.module.scss";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";
import { Container, Grid, Typography } from "@mui/material";

export default function ProfileCollection({ user, filters, items }) {
  return (
    <div className={styles["profile-collection"]}>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant={"h3"}>Collection</Typography>
          </Grid>
          <Grid item xs={9}>
            <ProfileCollectionFilters filters={filters} />
          </Grid>
        </Grid>

        <Grid container>
          {items.map((item, i) => (
            <Grid item xs={3} key={i}>
              <Card
                name={item.name}
                likes={item.likes}
                mediaUrl={item.source.url}
                price={item.price}
                currency={item.currency}
                user={{
                  verified: false,
                  avatarUrl: user.avatar.url,
                }}
                timeLeft={3000}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
