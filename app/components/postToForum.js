import React from 'react';

export default class PostToForum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handlePost(e) {
      e.preventDefault();
      var forumCommentText = this.state.value.trim();
      if (forumCommentText !== "") {
        this.props.onForumPost(forumCommentText);
          this.setState({value: ""});
      }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

render() {
    return (
      <div className="panel panel-default">
          <div className="panel-body">
          <div className="media-body">
            <div className="form-group">
              <textarea className="form-control" rows="2" placeholder="Chat privately with your teammates here"
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
