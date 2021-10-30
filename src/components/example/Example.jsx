import Header from "../header/Header";
import Footer from "../footer/Footer"
import CollectorColumn from "../collectors/CollectorColumn";

export default function Copyright() {
  return (
    <div>
      <Header />
      <CollectorColumn 
        items={
        [{
          id: 1,
          name: "Peter",
          nftsCount: 12312,
          avatar: "/images/avatar.png",
          verified: true,
        },
        {
          id: 2,
          name: "John",
          nftsCount: 1111,
          avatar: "/images/avatar.png",
        },
        {
          id: 3,
          name: "Steven",
          nftsCount: 432,
          avatar: "/images/avatar.png",
        }]}
      />
      <Footer />
    </div>
  );
}
