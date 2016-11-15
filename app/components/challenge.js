import React from 'react';

export default class Challenge extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isFancyWindowOpen: false }
    }

    render() {
      return (
        <div>
          <button onClick={() => this.openFancyWindow()}>Challenge Us!</button>
          <FancyWindow isOpen={this.state.isFancyWindowOpen} onClose={() => this.closeFancyWindow()}>
            <h1>Work in Progress!</h1>
            <p><button onClick={() => this.closeFancyWindow()}>Close</button></p>
          </FancyWindow>
        </div>
      )
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff'
      }

      if (this.props.width && this.props.height) {
        FancyWindowStyle.width = this.props.width + 'px'
        FancyWindowStyle.height = this.props.height + 'px'
        FancyWindowStyle.marginLeft = '-' + (this.props.width/2) + 'px',
        FancyWindowStyle.marginTop = '-' + (this.props.height/2) + 'px',
        FancyWindowStyle.transform = null
      }

      if (this.props.style) {
        for (let key in this.props.style) {
          FancyWindowStyle[key] = this.props.style[key]
        }
      }

      let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, .5)'
      }

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key]
        }
      }

      return (
        <div className={this.props.containerClassName}>
          <div className={this.props.className} style={FancyWindowStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
              <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>}
        </div>
      )
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }
