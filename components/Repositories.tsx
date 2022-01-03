interface RepositoriesProps {
  public_repos: number;
  following: number;
  followers: number;
}

export default function Repositories({
  followers,
  public_repos,
  following,
}: RepositoriesProps) {
  return (
    <div className="repositories">
      <div className="repositories__repos">
        <p className="repositories__following__title">Repos</p>
        <p className="repositories__repos__value">{public_repos}</p>
      </div>

      <div className="repositories__following">
        <p className="repositories__following__title">Following</p>
        <p className="repositories__following__value">{following}</p>
      </div>

      <div className="repositories__followers">
        <p className="repositories__following__title">followers</p>
        <p className="repositories__followers__value">{followers}</p>
      </div>
    </div>
  );
}
