import Header from "../header/Header";
import Footer from "../footer/Footer"
import TopCollectors from "../collectors/TopCollectors";

export default function Copyright() {
  return (
    <div>
      <Header />
      <TopCollectors 
        collectors={
        [{
          name: "Peter",
          nftsCount: 12312,
          avatar: "/images/avatar.png",
          verified: true,
        },
        {
          name: "John",
          nftsCount: 1111,
          avatar: "/images/avatar.png",
        },
        {
          name: "Steven",
          nftsCount: 432,
          avatar: "/images/avatar.png",
        },
        {
          name: "Peter",
          nftsCount: 12312,
          avatar: "/images/avatar.png",
          verified: true,
        },
        {
          name: "John",
          nftsCount: 1111,
          avatar: "/images/avatar.png",
        },
        {
          name: "Steven",
          nftsCount: 432,
          avatar: "/images/avatar.png",
        },
        {
          name: "Peter",
          nftsCount: 12312,
          avatar: "/images/avatar.png",
          verified: true,
        },
        {
          name: "John",
          nftsCount: 1111,
          avatar: "/images/avatar.png",
        },
        {
          name: "Steven",
          nftsCount: 432,
          avatar: "/images/avatar.png",
        },
        {
          name: "Peter",
          nftsCount: 12312,
          avatar: "/images/avatar.png",
          verified: true,
        },
        {
          name: "John",
          nftsCount: 1111,
          avatar: "/images/avatar.png",
        },
        {
          name: "Steven",
          nftsCount: 432,
          avatar: "/images/avatar.png",
        }]}
      />
      <Footer />
    </div>
  );
}
