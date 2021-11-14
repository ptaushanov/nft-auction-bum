import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";

export default function How() {
  return (
    <div>
      <Header />
      <Hero text={"How it works"} />
      <Description
        text={
          "Occaecat incididunt cillum irure ea Lorem officia eu adipisicing deserunt tempor laboris ea irure qui. Magna qui pariatur consequat voluptate. Nostrud non incididunt excepteur aliquip irure do laborum tempor. Nostrud mollit ex reprehenderit velit. Enim dolore eiusmod exercitation ut est in. Id aliquip cillum non duis nostrud sunt qui magna."
        }
        image={"images/nft.jpg"}
      />
      <Footer />
    </div>
  );
}
