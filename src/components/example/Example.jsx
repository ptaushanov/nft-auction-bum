import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from "../header/Header";
import Trending from "../trending/Trending";

export default function Copyright() {
  return (
    <div>
      <Header />
      <Trending cards={[
        {
          name:"Ivy",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price: 1,
          currency:"ETH"
        },
        {
          name:"Judie",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price: 2.3,
          currency:"ETH"
        },
        {
          name:"Juniper",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price:5,
          currency:"ETH"
        },
        {
          name:"Maple",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price: 10,
          currency:"ETH"
        },
      ]}/>
    </div>
  );
}
