import React from "react";
import { Link } from "react-router-dom";
import {
  GridList,
  GridListTile,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import "./searchPage.css";

export class searchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      moviesList: [],
      moviesFiltred: [],
      language: ""
    };
  }
  /*
   ** Call All Movies API
   ** Fetch Data and store them in moviesList state
   */
  componentWillMount() {
    fetch("https://api.tvmaze.com/search/shows?q=test")
      .then(response => response.json())
      .then(resData => {
        this.setState({ moviesList: resData });
      });
  }
  /*
   ** TextField Elastic Search Action
   ** Store TextField value into searchText state to trigger List Filtering in render()
   */
  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };
  handleChangeLanguage = event => {
    this.setState({ language: event.target.value });
  };

  render() {
    let { moviesList, moviesFiltred, searchText, language } = this.state;
    // Store filtered data into moviesFiltred (by name and language)
    moviesFiltred = Object.values(moviesList).filter(item => {
      if (language != "")
        return (
          item.show.name.toLowerCase().includes(searchText) &&
          item.show.language == language
        );
      else return item.show.name.toLowerCase().includes(searchText);
    });

    return (
      <div className="Container">
        <div className="InputContainer">
          <TextField
            className="TextField"
            label="Movie's Name"
            id="outlined-margin-normal"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            color="primary"
          />
          <FormControl className="FormControl">
            <InputLabel id="demo-simple-select-helper-label">
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={this.handleChangeLanguage}
              value={language}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="root">
          <GridList className={"gridList"} cols={3} cellHeight={350}>
            {moviesFiltred.map((movie, i) => (
              <GridListTile className="ImageContainer" key={i} cols={1}>
                <Link to={{ pathname: "/result/" + movie.show.id }}>
                  <img
                    className="image"
                    src={
                      movie.show.image != null
                        ? movie.show.image.original
                        : "https://pics.me.me/oops-image-not-found-meme-2895834.png"
                    }
                    alt={movie.show.name}
                  />
                </Link>
                <div className="TitleContainer">{movie.show.name}</div>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default searchPage;
