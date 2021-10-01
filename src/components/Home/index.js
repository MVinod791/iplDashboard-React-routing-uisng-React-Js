// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamData: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const newData = data.teams
    const updateData = newData.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamData: updateData, isLoading: false})
  }

  render() {
    const {iplTeamData, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="responsive-container">
          <div className="dashboard-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <ul className="list-of-teams-container">
            {isLoading ? (
              <div testid="loader">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              iplTeamData.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
