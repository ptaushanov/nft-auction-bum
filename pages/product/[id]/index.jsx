import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Product() {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(async () => {
    if (router.isReady) {
      const id = router.query.id;
      try {
        const responce = await fetch(`${process.env.apiUrl}/nfts/${id}`);
        const dataNft = await responce.json();
        setProduct(dataNft);
      } catch (error) {
        console.error(error.message);
      }
    }
  }, [router]);

  return (
    <div>
      <Header />
      {product && (
        <ProductContainer
          name={product.name}
          owner={product.owner}
          price={product.price}
          currency={product.currency}
          likes={product.likes}
          auction_end={product.auction_end}
          details={
            "Fugiat magna ipsum exercitation consequat pariatur ullamco consequat minim. Sunt velit do pariatur qui ad cillum dolor aute tempor minim et. Occaecat amet cupidatat officia non laboris enim adipisicing ut aliquip duis amet incididunt dolor. Aute magna enim et dolore dolor."
          }
          bids={product.bids.map(bid => {
            return {
              user: {
                name: bid.user.username,
                avatar: bid.user.avatar,
                verified: bid.user.verified,
              },
              amount: bid.amount,
              date: bid.date,
            };
          })}
          source={product.source}
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
