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
          likes={dataNft.price}
          auction_end={dataNft.auction_end}
          details={"asdasdasd"}
          bids={[]}
          source={dataNft.source}
          isLive={false}
          buyAmount={0}
          bidAmount={0}
          onBuy={() => {}}
          onBid={() => {}}
          onTimeEnd={() => {}}
        />
      )}
      <Footer />
    </div>
  );
}
