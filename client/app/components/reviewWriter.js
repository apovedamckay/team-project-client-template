import React from 'react';


export default class ReviewWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handlePost(e) {
      e.preventDefault();
      var statusUpdateText = this.state.value.trim();
      if (statusUpdateText !== "") {
        this.props.onPost(statusUpdateText);
          this.setState({value: ""});
      }
  }
  handleChange(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the
    // input event -- the <textarea> element. The textarea's
    // `value` is the entire contents of what the user has
    // typed in so far.
    this.setState({value: e.target.value});
  }

render() {
    return (
      <div className="panel panel-default">
          <div className="panel-body">
          <div className="media-body">
            <div className="form-group">
              <textarea className="form-control" rows="2" placeholder="What's on your mind?"
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e)} />
            </div>
          </div>

          <button type="button"
                  className="btn btn-default"
                  onClick={(e) => this.handlePost(e)}>
            Post
          </button>
          </div>
      </div>

      )
    }



}
