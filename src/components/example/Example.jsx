import Header from "../header/Header";
import Footer from "../footer/Footer"
import How from "../how/How"

export default function Copyright() {
  return (
    <div>
      <Header />
        <How 
          title="How it works"
          description="Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."

          items={
            [{
              title: "Digital Currency",
              description:
                "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
            },
            {
              title: "Crypto Wallet",
              description:
                "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
            },
            {
              title: "BUM.",
              description:
                "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space.",
            }]
          }
          link="https://www.google.com"
        />
      <Footer />
    </div>
  );
}
