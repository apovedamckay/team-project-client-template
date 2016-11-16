import React from 'react';

export default class Challenge extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isFancyWindowOpen: false//,
        //challenger: "",
      //  challengedate: "",
      //  challengetime: ""
      }
    }
    render() {
      return (
        <div>
          <button onClick={() => this.openFancyWindow()}>Challenge Us!</button>
          <FancyWindow isOpen={this.state.isFancyWindowOpen} onClose={() => this.closeFancyWindow()}>
            <h1>Challenge Sent!</h1>
            /*<form onSubmit={this.handleSubmit}>
              Team:
              <input type="text" value={this.state.challenger} onChange={this.handleChange} />
              <br></br>Date:
              <input type="text" value={this.state.challengedate} onChange={this.handleChange} />
              <br></br>Time:
              <input type="text" value={this.state.challengetime} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>*/
            <p><button onClick={() => this.closeFancyWindow()}>Close</button></p>
          </FancyWindow>
        </div>
      )
    }

    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('submitted challenge' + this.state.challenger + this.state.challengedate + this.state.challengetime);
    event.preventDefault();
  }


    openFancyWindow() {
      this.setState({ isFancyWindowOpen: true })
    }

    closeFancyWindow() {
      this.setState({ isFancyWindowOpen: false })
    }
  }

  class FancyWindow extends React.Component {
    render() {
      if (this.props.isOpen === false)
        return null

      let FancyWindowStyle = {
        position: 'absolute',
        top: '50%', //puts it in the center of the page vertically
        left: '50%', //puts it in the center of the page horizontally
        transform: 'translate(-50%, -50%)', //changes it to be in the center of the div instead of the page as a whole
        zIndex: '9999', //makes sure the window comes up on top
        background: '#fff' //temp background
      }

      return (
        <div className={this.props.containerClassName}>
          <div className={this.props.className} style={FancyWindowStyle}>
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
