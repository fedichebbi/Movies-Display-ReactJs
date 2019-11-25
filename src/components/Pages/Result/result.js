import React from "react";
import "./result.css";
export class result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }
  /*
   ** Call Single Movie API
   ** Fetch Data and store them in movie state
   */
  componentWillMount() {
    const { id } = this.props.match.params; // Movie's id passed in url
    fetch("http://api.tvmaze.com/shows/" + id)
      .then(response => response.json())
      .then(resData => {
        this.setState({ movie: resData });
      });
  }
  render() {
    const { movie } = this.state;
    return (
      <div className="DetailContainer">
        <div className="DetailShowContainer">
          <div>
            <img
              className="DetailImage"
              src={
                movie.image != null
                  ? movie.image.original
                  : "https://pics.me.me/oops-image-not-found-meme-2895834.png"
              }
              alt={movie.name}
            ></img>
          </div>
          <div className="DetailTextContainer">
            <div className="Summary">{movie.name}</div>
            <div>Type : {movie.type}</div>
            <div>Language : {movie.language}</div>
            <div dangerouslySetInnerHTML={{ __html: movie.summary }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default result;
