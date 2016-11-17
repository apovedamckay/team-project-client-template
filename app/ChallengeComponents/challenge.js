import React from 'react';

export default class Challenge extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isChallengeWindowOpen: false,
        value: ""
        //challenger: "",
      //  challengedate: "",
      //  challengetime: ""
      }
    }
    render() {
      return (
        <div>
          <button onClick={() => this.openChallengeWindow()}>Challenge Us!</button>
          <ChallengeWindow isOpen={this.state.isChallengeWindowOpen} onClose={() => this.closeChallengeWindow()}>
            <div className="form-group">
              <textarea className="form-control" rows="1" placeholder="Enter Challenging Team Name..."
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e)} />
            </div>
            /*<form onSubmit={this.handleSubmit}>
              Team:
              <input type="text" value={this.state.challenger} onChange={this.handleChange} />
              <br></br>Date:
              <input type="text" value={this.state.challengedate} onChange={this.handleChange} />
              <br></br>Time:
              <input type="text" value={this.state.challengetime} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>*/
            <p><button onClick={() => this.closeChallengeWindow()}>Submit</button></p>
          </ChallengeWindow>
        </div>
      )
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('submitted challenge as' );
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
