import React, { Component } from "react";
import Data from "../APIGods.json";
import FilterAge from "./FilterAge";
import FilterTag from "./FilterTag";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "All",
      ageRange: [0, 100],
      tag: "",
      tagArr: [],
    };
    this.onTypeTag = this.onTypeTag.bind(this);
  }

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
    const { newGender, tag, tagArr } = this.state;
    return (
      <div>
        {console.log(tagArr)}
        {console.log(tag)}
        <select
          value={newGender}
          onChange={this.onClickChange}
          name="gender"
          id="gender"
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Animal</option>
        </select>
        <FilterAge onChange={this.onClickAge} />
        <FilterTag tagArr={tagArr} onClick={this.onTypeTag} />
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
            .map((gode) => (
              <div>
                <img
                  style={{ width: "25%" }}
                  src={gode.Photo}
                  alt={gode.Name}
                ></img>
                <h1>{gode.Name}</h1>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Filters;
>>>>>>> c9171e9eb75e6a4202a3a21ce8e01811eaf273cb
