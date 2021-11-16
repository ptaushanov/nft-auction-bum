import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import dataProfile from "../../data/profile.json";
import dataFiltersProfile from "../../data/filtersProfile.json";

import { useState, useEffect, Fragment } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    setFilters({ ...dataFiltersProfile });

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
      filters: filters,
    });
  }, []);

  return (
    <div>
      <Header />
      {filters && profile && (
        <Fragment>
          <ProfileHero image={profile.image} />
          <ProfileUser
            name={profile.name}
            info={profile.info}
            avatar={profile.avatar}
            verified={profile.verified}
          />
          <ProfileCollection
            user={profile.user}
            filters={filters}
            items={profile.items}
          />
        </Fragment>
      )}
      <Footer />
    </div>
  );
}
