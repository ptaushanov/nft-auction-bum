import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import dataProfile from "../../data/profile.json";

import { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile({
      image: "",
      name: dataProfile.username,
      info: "",
      avatar: dataProfile.avatar.url,
      verified: dataProfile.verified,
      user: {
        verified: dataProfile.verified,
        avatar: dataProfile.avatar.url,
      },
      items: [...dataProfile.nfts],
      filters: {
        sort: [
          { label: "Date (Ascending)", value: 1 },
          { label: "Date (Descending)", value: 2 },
          { label: "Name (Ascending)", value: 3 },
          { label: "Name (Descending)", value: 4 },
          { label: "Price (Ascending)", value: 5 },
          { label: "Price (Descending)", value: 6 },
        ],
        price: [
          { label: "0 - 0.01 ETH", value: 7 },
          {
            label: "0.01 - 0.04 ETH",
            value: 8,
          },
          {
            label: "0.04 - 0.07 ETH",
            value: 9,
          },
        ],
      },
    });
  }, []);

  return (
    <div>
      <Header />
      {profile && (
        <>
          <ProfileHero image={profile.image} />
          <ProfileUser
            name={profile.name}
            info={profile.info}
            avatar={profile.avatar}
            verified={profile.verified}
          />
          <ProfileCollection
            user={profile.user}
            filters={profile.filters}
            items={profile.items}
          />
        </>
      )}
      <Footer />
    </div>
  );
}
