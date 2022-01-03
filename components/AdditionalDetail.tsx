import Image from "next/image";

interface AdditionalDetailProps {
  twitter_username: string;
  blog: string;
  company: string;
  location: string;
}

export default function AdditionalDetail({
  twitter_username,
  blog,
  company,
  location,
}: AdditionalDetailProps) {
  return (
    <div className="additionaldetail">
      <div className="additionaldetail__location">
        <Image
          src="/icon-location.svg"
          alt="location icon"
          width="14px"
          height="20px"
          layout="fixed"
        />
        <p>{location ? location : "Unavailable"}</p>
      </div>

      <div className="additionaldetail__twitter">
        <Image
          src="/icon-twitter.svg"
          alt="twitter icon"
          width="20px"
          height="20px"
          layout="fixed"
        />
        <p>{twitter_username ? twitter_username : "Unavailable"}</p>
      </div>

      <div className="additionaldetail__blog">
        <Image
          src="/icon-website.svg"
          alt="website icon"
          width="20px"
          height="20px"
          layout="fixed"
        />
        <p>{blog ? blog : "Unavailable"}</p>
      </div>

      <div className="additionaldetail__company">
        <Image
          src="/icon-company.svg"
          alt="Company Icon"
          width="20px"
          height="20px"
          layout="fixed"
        />
        <p>{company ? company : "Unavailable"}</p>
      </div>
    </div>
  );
}
