import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from "../header/Header";
import Avatar  from "../avatar/Avatar";

export default function Copyright() {
  return (
    <div>
      <Header/>
      <Avatar url={"images/avatar.png"} verified={true} />
    </div>
  );
}
