import React from 'react';

export default class Challenge extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        teams: [],
        isChallengeWindowOpen: false,
        challenger: "",
        challengedatemonth: "",
        challengedate: "",
        challengetimehours: "",
        challengetimeclock: ""
      }
    }
    render() {
      return (
        <div>
          <button onClick={() => this.openChallengeWindow()}>Challenge Us!</button>
          <ChallengeWindow isOpen={this.state.isChallengeWindowOpen} onClose={() => this.closeChallengeWindow()}>
            <form onSubmit={this.handleSubmit}>
              Your Team:
                 <textarea className="form-control" rows="1" placeholder="Your Team"></textarea>
              <br></br>
              Select the Date:
              <select value={this.state.challengedatemonth} onChange={this.handleDateMonth}>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
                <option value="11"> 11 </option>
                <option value="12"> 12 </option>
              </select>
              <select value={this.state.challengedate} onChange={this.handleDate}>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
                <option value="11"> 11 </option>
                <option value="12"> 12 </option>
                <option value="13"> 13 </option>
                <option value="14"> 14 </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="21"> 21 </option>
                <option value="22"> 22 </option>
                <option value="23"> 23 </option>
                <option value="24"> 24 </option>
                <option value="25"> 25 </option>
                <option value="26"> 26 </option>
                <option value="27"> 27 </option>
                <option value="28"> 28 </option>
                <option value="29"> 29 </option>
                <option value="30"> 30 </option>
                <option value="31"> 31 </option>
              </select>
              <br></br>
              Select the Time:
              <select value={this.state.challengetimehours} onChange={this.handleTime}>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
                <option value="11"> 11 </option>
                <option value="12"> 12 </option>
              </select>
              <select value={this.state.challengetimeclock} onChange={this.handleTimePeriod}>
                <option value="AM"> AM </option>
                <option value="PM"> PM </option>
              </select>
              <input type="submit" value="Challenge!" />
            </form>
          </ChallengeWindow>
        </div>
      )
    }

  handleChallenger(event) {
    event.preventDefault();
    this.setState({challenger: event.target.value});
  }

  handleDateMonth(event) {
    event.preventDefault();
    this.setState({challengedatemonth: event.target.value});
  }

  handleDate(event) {
    event.preventDefault();
    this.setState({challengedate: event.target.value});
  }

  handleTime(event) {
    event.preventDefault();
    this.setState({challengetimehours: event.target.value});
  }
  handleTimePeriod(event) {
    event.preventDefault();
    this.setState({challengetimeclock: event.target.value});
  }

  handleSubmit(event) {
    this.closeChallengeWindow();
    alert('submitted challenge as Team ' + this.state.challenger + ' on ' + this.state.challengedatemonth + '/' + this.state.challengedate + ' at ' + this.state.challengetimehours + this.state.challengetimeclock);
    this.setState ({
      challenger: "",
      challengedate: "",
      challengetimehours: "",
      challengetimeclock: ""
    })
    event.preventDefault();
  }


    openChallengeWindow() {
      this.setState({ isChallengeWindowOpen: true })
    }

    closeChallengeWindow() {
      this.setState({ isChallengeWindowOpen: false })
    }
  }

  class ChallengeWindow extends React.Component {
    render() {
      if (this.props.isOpen === false)
        return null

      let ChallengeWindowStyle = {
        position: 'absolute',
        top: '50%', //puts it in the center of the page vertically
        left: '50%', //puts it in the center of the page horizontally
        transform: 'translate(-50%, -50%)', //changes it to be in the center of the div instead of the page as a whole
        zIndex: '9999', //makes sure the window comes up on top
        background: '#fff' //temp background
      }

      return (
        <div className={this.props.containerClassName}>
          <div className={this.props.className} style={ChallengeWindowStyle}>
            {this.props.children}
          </div>
        </div>
      )
    }

    close(e) {
      e.preventDefault()
        this.props.onClose()
    }
  }
