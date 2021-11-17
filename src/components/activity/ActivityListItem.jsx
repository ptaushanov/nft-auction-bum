import styles from "./ActivityListItem.module.scss";
import { parseISO, formatDistance } from "date-fns";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";

export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  let activity;

  switch (type) {
    case "like":
      activity = "liked";
      break;
    case "buy":
      activity = "bought";
      break;
  }

  return (
    <div className={styles["activity-list-item"]}>
      <Avatar size={56} url={user.avatarUrl} verified={user.verified} />
      <div className={styles["activity-info"]}>
        <p className={styles.text}>
          <span className={styles.name}>{user.name}</span>
          <span> {activity} </span>
          <Link href={"#"} className={styles.link}>
            {nft.name}
          </Link>
          <span> by </span>
          <Link href={"#"} className={styles.link}>
            {nft.user.name}
          </Link>
        </p>
        <p className={styles.elapsed}>
          {formatDistance(Date.now(), parseISO(created_at))}
        </p>
      </div>
    </div>
  );
}
