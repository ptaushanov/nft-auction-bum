import Header from "../header/Header";
import Footer from "../footer/Footer"
import How from "../how/How"

export default function Copyright() {
  return (
    <div>
      <Header />
        <How 
          title=""
          description=""
          items={[
            {
              title:"Digital Currency",
              description:"You can get ETH and digital currency that fuels transactions on the Etherium blockchain from a digital currency exchange"
            },
            {
              title:"Digital Currency",
              description:"You can get ETH and digital currency that fuels transactions on the Etherium blockchain from a digital currency exchange"
            },
            {
              title:"Digital Currency",
              description:"You can get ETH and digital currency that fuels transactions on the Etherium blockchain from a digital currency exchange"
            }
          ]}
          link=""
        />
      <Footer />
    </div>
  );
}
