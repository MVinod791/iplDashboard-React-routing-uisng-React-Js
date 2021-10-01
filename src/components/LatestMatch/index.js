// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    venue,
    result,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <li className="latest-item">
      <p className="latest-match">Latest Matches</p>
      <div className="responsive-container">
        <div className="latest-items-container">
          <div className="upper-container">
            <div className="left-items">
              <p className="competing-team">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="competing-logo"
            />
          </div>
          <hr className="line" />
          <div className="right-items">
            <label htmlFor="first" className="label-name">
              First Innings
            </label>
            <p id="first" className="label-value">
              {firstInnings}
            </p>
            <label htmlFor="second" className="label-name">
              Second Innings
            </label>
            <p id="second" className="label-value">
              {secondInnings}
            </p>
            <label htmlFor="matchWinner" className="label-name">
              Man Of The Match
            </label>
            <p id="matchWinner" className="label-value">
              {manOfTheMatch}
            </p>
            <label htmlFor="umpires" className="label-name">
              Umpires
            </label>
            <p id="umpires" className="label-value">
              {umpires}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default LatestMatch
