import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import dataNfts from "../../../data/nfts.json";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Product() {
  const router = useRouter();
  const id = router.query.id;
  const [dataNft, setDataNft] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setDataNft(dataNfts.find((nft) => nft.id == id));
    }
  }, [router]);

  return (
    <div>
      <Header />
      {dataNft && (
        <ProductContainer
          name={dataNft.name}
          owner={dataNft.owner}
          price={dataNft.price}
          currency={dataNft.currency}
          likes={dataNft.likes}
          auction_end={dataNft.auction_end}
          details={
            "Fugiat magna ipsum exercitation consequat pariatur ullamco consequat minim. Sunt velit do pariatur qui ad cillum dolor aute tempor minim et. Occaecat amet cupidatat officia non laboris enim adipisicing ut aliquip duis amet incididunt dolor. Aute magna enim et dolore dolor."
          }
          bids={[
            {
              user: {
                avatar: "/images/avatar.png",
                name: "hrisi",
                verified: true,
              },
              amount: 30,
              date: "2021-10-22T08:29:23.382Z",
            },
            {
              user: {
                avatar: "/images/avatar.png",
                name: "maxi",
                verified: true,
              },
              amount: 1000,
              date: "2021-10-22T08:29:23.382Z",
            },
            {
              user: {
                avatar: "/images/avatar.png",
                name: "hrisi",
                verified: true,
              },
              amount: 30,
              date: "2021-10-22T08:29:23.382Z",
            },
            {
              user: {
                avatar: "/images/avatar.png",
                name: "maxi",
                verified: true,
              },
              amount: 1000,
              date: "2021-10-22T08:29:23.382Z",
            },
          ]}
          source={dataNft.source}
          isLive={true}
          buyAmount={3}
          bidAmount={1}
          onBuy={() => {}}
          onBid={() => {}}
          onTimeEnd={() => {}}
        />
      )}
      <Footer />
    </div>
  );
}
