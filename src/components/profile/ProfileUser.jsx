import styles from "./ProfileUser.module.scss";
import Typography from "@mui/material/Typography";
import Avatar from "../avatar/Avatar";

export default function ProfileUser({ name, info, avatar, verified }) {
  return (
    <div className={styles["profile-user"]}>
      <Avatar url={avatar} verified={verified} size={193} />
      <Typography variant={"h3"} className={styles.name}>
        {name}
      </Typography>
      <Typography className={styles.info}>{info}</Typography>
    </div>
  );
}
