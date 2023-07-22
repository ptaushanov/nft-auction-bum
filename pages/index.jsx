import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import { useState, useEffect } from "react";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState(null);
  const [topCollectors, setTopCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState(null);
  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState(null);

  useEffect(async () => {
    const apiUrl = process.env.apiUrl;
    try {
      // Featred
      const dataFeatured = await fetch(apiUrl + "/featured").then(res =>
        res.json()
      );

      const processedFeatured = dataFeatured.nfts.map(card => {
        return { image: card.source.url };
      });
      processedFeatured[0] = { ...processedFeatured[0], cols: 3, rows: 2 };
      setFeaturedCards(processedFeatured);

      //  Trending
      const dataTrending = await fetch(apiUrl + "/trending").then(res =>
        res.json()
      );

      // Trending Nfts
      setTrendingItems(
        dataTrending.nfts.map(card => {
          return {
            name: card.name,
            likes: card.likes,
            mediaUrl: card.source.url,
            user: {
              avatarUrl: card.owner.avatar.url,
              verified: card.owner.verified,
            },
            price: card.price,
            currency: card.currency,
          };
        })
      );

      // Trending Filters
      setTrendingFilters(dataTrending.filters);

      // Top Collectors
      const dataUsers = await fetch(apiUrl + "/top-collectors").then(res =>
        res.json()
      );

      // Top Collectors Users
      setTopCollectors(
        dataUsers.users
          .map(user => {
            return {
              name: user.username,
              nftsCount: user.nfts.length,
              avatar: user.avatar.url,
              verified: user.verified,
            };
          })
          .sort((f, s) => f.nftsCount < s.nftsCount)
          .slice(0, 12)
      );

      // Top Collectors Filters
      setCollectorFilters(dataUsers.filters);

      // Live Auction
      const dataAuctions = await fetch(apiUrl + "/live-auctions").then(res =>
        res.json()
      );

      // Live Auction Nfts
      setAuctions(
        dataAuctions.nfts.map(nft => {
          return {
            name: nft.name,
            likes: nft.likes,
            mediaUrl: nft.source.url,
            user: {
              avatarUrl: nft.owner.avatar.url,
            },
            price: nft.price,
            currency: nft.currency,
            timeLeft: Math.abs(Date.parse(nft.auction_end) - Date.now()),
          };
        })
      );

      // Live Auction Filters
      setAuctionFilters(dataAuctions.filters);
    } catch (error) {
      // Fetch error or TypeError
      console.error(error.message);
    }
  }, []);

  return (
    <div>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} filters={trendingFilters} />
      <TopCollectors collectors={topCollectors} filters={collectorFilters} />
      <How
        title="How it works"
        description="Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        items={[
          {
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
          },
        ]}
        link="https://app.boom.dev"
      />
      <Auctions cards={auctions} filters={auctionFilters} />
      <Footer />
    </div>
  );
}
