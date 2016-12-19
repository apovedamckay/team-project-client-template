import React from 'react';


export default class ReviewWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      starValue: 4
    };
  }

  handlePost(e) {
      e.preventDefault();
      var statusUpdateText = this.state.value.trim();
      var starValue = this.state.starValue;
      if (statusUpdateText !== "") {
        this.props.onPost(statusUpdateText, starValue);
          this.setState({value: "", starValue:"4"});
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
  handleStarChange(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();

    this.setState({starValue: e.target.value});

  }

render() {
    return (
      <div className="panel panel-default">
          <div className="panel-body">
          <div className="media-body">
            <div className="form-group">
                <text>Stars: </text>
                <select value={this.state.starValue} onChange={(e) => this.handleStarChange(e)}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>

              <textarea className="form-control" rows="2" placeholder="What did you think?"
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
