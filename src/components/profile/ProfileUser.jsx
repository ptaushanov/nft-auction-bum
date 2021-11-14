import styles from "./ProfileUser.module.scss";
import Typography from "@mui/material/Typography";
import Avatar from "../avatar/Avatar";

export default function ProfileUser({ name, info, avatar, verified }) {
  return (
    <div className={styles["profile-user"]}>
      <Avatar url={avatar} verified={verified} />
      <Typography variant={"h3"}>{name}</Typography>
      <Typography>{info}</Typography>
    </div>
  );
}
