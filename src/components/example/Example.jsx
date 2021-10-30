import Header from "../header/Header";
import Footer from "../footer/Footer"
import How from "../how/How"

export default function Copyright() {
  return (
    <div>
      <Header />
        <How 
          title="How it works"
          description="Irure ex et quis tempor elit voluptate nostrud. Sunt dolor est incididunt sunt quis magna non ut. Id sit in eiusmod id aute velit ad consequat. Reprehenderit irure ex do dolor nostrud culpa tempor ullamco pariatur sint. Nulla dolor et non exercitation. Aliqua excepteur culpa reprehenderit minim non enim do sint culpa anim. Elit ex qui quis eu nisi ex consectetur dolor."
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
          link="https://www.google.com"
        />
      <Footer />
    </div>
  );
}
