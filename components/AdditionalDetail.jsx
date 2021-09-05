import Image from "next/image";
import { useContext } from "react";
import { profileData } from "../pages";

export default function AdditionalDetail() {
  // const { searchResult } = useContext(profileData);
  // const { location, twitter_username, company, blog } = searchResult;
  return (
    <div className="additionaldetail">
      <div className="additionaldetail__location">
        <Image
          src="/icon-location.svg"
          alt="location icon"
          width="14px"
          height="20px"
        />
        <p>
          loremipsum
          {/* {location !== null ? location : "Unavailable"} */}
        </p>
      </div>

      <div className="additionaldetail__twitter">
        <Image
          src="/icon-twitter.svg"
          alt="twitter icon"
          width="20px"
          height="20px"
        />
        <p>
          {/* {twitter_username !== null ? twitter_username : "Unavailable"} */}
          loremipsum
        </p>
      </div>

      <div className="additionaldetail__blog">
        <Image
          src="/icon-website.svg"
          alt="website icon"
          width="20px"
          height="20px"
        />
        <p>
          {/* {blog !== "" ? blog : "Unavailable"} */}
          loremipsum
        </p>
      </div>

      <div className="additionaldetail__company">
        <Image
          src="/icon-company.svg"
          alt="Company Icon"
          width="20px"
          height="20px"
        />
        <p>
          {/* {company !== null ? company : "Unavailable"} */}
          loremipsum
        </p>
      </div>
    </div>
  );
}
