import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Container, Stack } from "@mui/material";

export default function ActivityList({ items = [] }) {
  return (
    <div className={styles["activity-list"]}>
      <Container>
        <Stack direction={"column"} spacing={2}>
          {items.map((item, i) => {
            return <ActivityListItem key={i} {...item} />;
          })}
        </Stack>
      </Container>
    </div>
  );
}
