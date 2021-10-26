import Header from "../header/Header";
import Auctions from "../auctions/Auctions";
import Footer from "../footer/Footer"

export default function Copyright() {
  return (
    <div>
      <Header />
      <Auctions cards={[
        {
          name:"Ivy",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price: 1,
          currency:"ETH",
          likes: 4689,
          timeLeft: 345600
        },
        {
          name:"Judie",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price: 2.3,
          currency:"ETH",
          likes: 693000,
          timeLeft: 10000000
        },
        {
          name:"Juniper",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price:5,
          currency:"ETH",
          timeLeft: 84300
        },
        {
          name:"Maple",
          user:{avatarUrl:"./images/avatar.png", verified:true},
          mediaUrl:"./images/nft.jpg",
          price: 10,
          likes: 52000,
          currency:"ETH",
          timeLeft: 135600
        },
      ]}/>

    <Footer />
    </div>
  );
}
