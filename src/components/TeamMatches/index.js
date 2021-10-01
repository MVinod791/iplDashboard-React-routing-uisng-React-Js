// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    iplData: {},
    latestMatchDetails: {},
    recentMatchData: [],
    isLoading: true,
  }

  // make an API call
  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,

      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        date: eachMatch.date,
        firstInnings: eachMatch.first_innings,
        id: eachMatch.id,
        manOfTheMatch: eachMatch.man_of_the_match,
        matchStatus: eachMatch.match_status,
        result: eachMatch.result,
        secondInnings: eachMatch.second_innings,
        umpires: eachMatch.umpires,
        venue: eachMatch.venue,
      })),
    }
    console.log(updatedData)

    this.setState({
      iplData: updatedData,
      latestMatchDetails: updatedData.latestMatchDetails,
      recentMatchData: updatedData.recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      iplData,
      isLoading,
      latestMatchDetails,
      recentMatchData,
      id,
    } = this.state
    const {teamBannerUrl} = iplData
    return (
      <div className="team-matches-container">
        <div className="responsive-team-container">
          <img src={teamBannerUrl} className="banner-image" alt="team banner" />
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div>
              <ul className="latest-match-list">
                <LatestMatch latestMatchDetails={latestMatchDetails} />
              </ul>
              <ul className="matches-list">
                {recentMatchData.map(eachItem => (
                  <MatchCard
                    recentMatchesDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
