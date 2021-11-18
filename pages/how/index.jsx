import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";

export default function How() {
  return (
    <div>
      <Header />
      <Hero text={"How it works".toUpperCase()} />
      <Description
        text={`Ullamco deserunt consequat adipisicing ipsum qui ea amet et aliqua anim deserunt. Quis tempor minim ea tempor cillum. Proident magna voluptate ad officia cillum. Sint qui laboris quis ea ullamco exercitation tempor.
Exercitation qui sit veniam irure laborum ipsum duis ut do exercitation eiusmod. Fugiat commodo consequat pariatur dolor quis excepteur. Eu amet laborum commodo eiusmod aliqua ullamco. Nulla laboris nostrud mollit eiusmod sit irure do nulla ut qui culpa occaecat dolore ipsum.
Ut deserunt duis ut mollit nostrud nisi aliquip incididunt magna est nisi ullamco Lorem. Cupidatat eu nostrud pariatur fugiat ex veniam et excepteur. Duis ut et sunt qui.
Excepteur ipsum consequat enim laborum ad ipsum nostrud aliquip deserunt fugiat. Ex tempor aliquip fugiat duis irure consectetur. Nisi non elit et in aliquip.
Nostrud est aliquip eiusmod occaecat laborum deserunt labore nisi sint. Deserunt sunt occaecat esse tempor consectetur cupidatat eiusmod duis. Amet dolore voluptate ullamco minim aliqua irure sint commodo culpa adipisicing consectetur duis amet. Exercitation duis deserunt ipsum ex eu do laboris elit non occaecat laborum amet. Incididunt culpa aliqua commodo aliquip aute eu consectetur enim sint consequat pariatur cupidatat nisi elit. Cupidatat enim esse proident aliquip.
Commodo nostrud dolore Lorem dolor nulla do. Deserunt veniam ea minim sunt nulla deserunt eu officia commodo velit esse tempor. Eu proident exercitation consequat nostrud amet. Ex commodo aliqua enim eiusmod aliquip elit ex nisi dolor aliqua sunt ut voluptate laborum. Nulla commodo veniam anim mollit magna excepteur incididunt ex incididunt labore nisi aliqua. Elit tempor enim deserunt ad aliquip dolore quis laboris. Non elit sunt ad mollit do exercitation nostrud do duis reprehenderit incididunt minim.
Ea qui ullamco labore velit velit anim culpa. Lorem aute anim sunt labore pariatur. Anim ullamco ut excepteur fugiat amet labore sit ipsum nostrud exercitation nulla.
`}
        image={"images/nft.jpg"}
      />
      <Footer />
    </div>
  );
}
