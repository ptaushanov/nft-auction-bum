import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from "../header/Header";
import User  from "../user/User";

export default function Copyright() {
  return (
    <div>
      <Header/>
      <User name="terika77" info="134 items" avatar={"images/avatar.png"} verified={true} />
    </div>
  );
}
