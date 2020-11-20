import React, { Component } from "react";
import Data from "../APIGods.json";
import FilterAge from "./FilterAge";
import FilterTag from "./FilterTag";
import GodCard from "./GodCard";
import FavoriteCard from "./FavoriteCard";
import Carousell from "./Carousell";
import "../styled/Accordion.css"
import "../styled/Card.css"
import styled from "styled-components";

const Select = styled.select`
  left: 75px;
  font-size: 14px;
  color: white;
  border: none;
  width: 250px;
  height: 24px;
  background-color: #000000;
  color: white;
  border-radius: 5px;
  outline: none;
  margin: 80px;
  padding-bottom:20px;
`;

const Label = styled.label`
background : black;
color: #FF1493;
font-size: 1em;
margin: auto;
padding: 0.25em 1em;
border: 2px solid #FF1493;
border-radius: 3px;
width: 10em;
`;

const WrapFilters = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-evenly;
  background:black;
  opacity: 30%;
`;


class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "All",
      ageRange: [0, 100],
      tag: "",
      tagArr: [],
      godsFav: [],
    };
    this.onTypeTag = this.onTypeTag.bind(this);
  }

  addToFavorite = (Key) => {
    const { godsFav } = this.state;
    const gods = Data;
    const data = gods.find((item) => item.Key === Key);
    this.setState({
      godsFav: [...godsFav, data]
    });
  };

  removeToFavorite = (Key) => {
    const { godsFav } = this.state;
    const hapus = godsFav.filter((item) => item.Key !== Key);
    this.setState({ godsFav: hapus });
  };


  onClickChange = (e) => {
    const newGender = e.target.value;
    this.setState({
      gender: newGender,
    });
  };

  onClickAge = (e, newValue) => {
    this.setState({
      ageRange: newValue,
    });
  };
  onTypeTag = (newTag) => {
    const tagArr = this.state.tagArr;
    tagArr.push(newTag);
    this.setState({ tagArr });
  };

  render() {
    const { newGender, tag, tagArr, godsFav } = this.state;
    return (
      <div>
        <div className="accordion">
        <input type="checkbox" id="filter-options" className="toggle" />
        <Label className="title" htmlFor="filter-options">FILTER MY SEARCH</Label>
        <WrapFilters className="content">
        <Select
          value={newGender}
          onChange={this.onClickChange}
          name="gender"
          id="gender"
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Animal</option>
        </Select>
        <br/>
        <FilterAge onChange={this.onClickAge} />
        <br/>
        <FilterTag tagArr={tagArr} onClick={this.onTypeTag} />
        </WrapFilters>
        </div>
        <div>
          {Data.filter(
            (genre) =>
              genre.Gender === this.state.gender || this.state.gender === "All"
          )
            .filter(
              (item) =>
                this.state.ageRange[0] < item.Age &&
                item.Age < this.state.ageRange[1]
            )
            .filter(
              (item) =>
                tagArr.length === 0 ||
                tagArr.includes(item.OthersItems.AstroSign) ||
                tagArr.includes(item.OthersItems.Sports) ||
                tagArr.includes(item.OthersItems.GodsType) ||
                tagArr.filter((value) =>
                  item.OthersItems.Passion.includes(value)
                ).length > 0
              //Object.fromEntries(item.OthersItems.Passion).includes(tagArr)
            )
            .map((God) => (
              <GodCard className="GodCard" god={God} add={this.addToFavorite} />
              ))}
              <FavoriteCard godsFav={godsFav} remove={this.removeToFavorite} />
        </div>
      </div>
    );
  }
}

export default Filters;
