import styles from "./ProfileHero.module.scss";

export default function ProfileHero({ image }) {
  return (
    <div className={styles["profile-hero"]}>
      <img src={image} className={styles.image} />
    </div>
  );
}
