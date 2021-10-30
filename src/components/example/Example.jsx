import Header from "../header/Header";
import Footer from "../footer/Footer"
import Collector from "../colectors/Collector";

export default function Copyright() {
  return (
    <div>
      <Header />
      <Collector id = {1} name = "Peter" nftsCount = {12312} avatar = "/images/avatar.png" verified = {true}/>
      <Footer />
    </div>
  );
}
