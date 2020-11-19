import React, { Component } from "react";
import FilterAge from "./FilterAge";
import FilterTag from "./FilterTag";

const Data = [
  {
    Name: "Dyonisos",
    Gender: "Male",
    Photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dionysos_satyr_Altemps_Inv8606.jpg/1200px-Dionysos_satyr_Altemps_Inv8606.jpg",
    Age: "63",
    OthersItems: {
      AstroSign: "Barrel",
      Sports: "Barathon",
      GodsType: "Party",
      Passion: ["Wine", "Drinks", "Sex"],
    },
    RegisterSince: "12/12/2019",
    PeopleLiked: ["Athena", "Medusa", "Zeus"],
    Contact: {
      Phone: "033-789-457",
      Address: "46 St. Petrus, Olympia",
      InstaGod: "@DionyWine",
    },
  },
  {
    Name: "Athena",
    Gender: "Female",
    Photo:
      "https://media.visualstories.com/uploads/images/1/175/5667952-696_650528588-athena-goddess-statue_p.jpg",
    Age: "25",
    OthersItems: {
      AstroSign: "Pegase",
      Sports: "Hunt",
      GodsType: "War",
      Passion: ["Animals"],
    },
    RegisterSince: "01/08/2020",
    PeopleLiked: ["Dionysos", "Medusa", "Zeus"],
    Contact: {
      Phone: "089-805-022",
      Address: "Tree 123, Central Park",
      InstaGod: "@IloveAnimals",
    },
  },

  {
    Name: "Centaur",
    Gender: "Animal",
    Photo:
      "https://i.pinimg.com/originals/7a/b2/93/7ab293105a9f0190dc8e8b04856b61a8.jpg",
    Age: "32",
    OthersItems: {
      AstroSign: "Pegase",
      Sports: "Quidditch",
      GodsType: "Nature",
      Passion: ["Animals", "Party"],
    },
    RegisterSince: "12/12/2019",
    PeopleLiked: ["Dionysos", "Medusa", "Zeus"],
    Contact: {
      Phone: "987-865-282",
      Address: "69 hinds street, Amazonia",
      InstaGod: "@BigHorn",
    },
  },
];

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
          <option value="Animal">Animal</option>
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
