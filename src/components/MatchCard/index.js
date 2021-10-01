// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchesDetails
  return (
    <li className="match-card-item">
      <div className="responsive-design">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo"
        />
        <p className="competing-team">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
