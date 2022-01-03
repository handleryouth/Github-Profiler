import format from "date-fns/format";

interface ProfileNameProps {
  created_at: string;
  name: string;
  login: string;
}

export default function ProfileName({
  created_at,
  login,
  name,
}: ProfileNameProps) {
  const convertedDate = format(new Date(created_at), "PPP");
  return (
    <div className="profilename">
      <div className="profilename__container1">
        <h2>{name}</h2>
        <p>Joined {convertedDate}</p>
      </div>

      <div className="profilename__container2">
        <p>@{login}</p>
      </div>
    </div>
  );
}
