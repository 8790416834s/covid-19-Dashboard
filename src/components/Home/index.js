import {Component} from 'react'
import './index.css'

class Home extends Component {
  componentDidMount() {
    this.getHomeDetails()
  }

  getHomeDetails = async () => {
    const homeApiUrl = `https://apis.ccbp.in/covid19-state-wise-data`
    const response = await fetch(homeApiUrl)
    const data = await response.json()
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}
export default Home
