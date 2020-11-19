import React, { Component } from 'react';
import './App.css';
import FavoriteCard from './components/FavoriteCard';
import GodCard from './components/GodCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gods: [{
        id: 1,
        name: "Dyonisos",
        gender: "Male",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dionysos_satyr_Altemps_Inv8606.jpg/1200px-Dionysos_satyr_Altemps_Inv8606.jpg",
        age: 63,
        othersItems: {
          astroSign: "Barrel",
          sports: "Barathon",
          godsType: "Party",
          passion: ["Wine ", "Drinks ", "Sex "],
        },
        registerSince: 12 / 12 / 2019,
        peopleLiked: ["Athena ", "Medusa ", "Zeus "],
        contact: {
          phone: "033-789-457",
          address: "46 St. Petrus, Olympia",
          instaGod: "@DionyWine",
        }
      },
      {
        id: 2,
        name: "Aphrodite",
        gender: "Female",
        photo: "https://vignette.wikia.nocookie.net/mythologies/images/e/ec/La_Naissance_de_V%C3%A9nus_de_Boticelli_%281484%29.jpg/revision/latest/scale-to-width-down/1000?cb=20190508153536&path-prefix=fr",
        age: 35,
        othersItems: {
          astroSign: "Pinup",
          sports: "110m haie",
          godsType: "Orgie",
          passion: ["Wine ", "Drinks ", "Sex "],
        },
        registerSince: 12 / 12 / 2019,
        peopleLiked: ["Athena ", "Medusa ", "Zeus "],
        contact: {
          phone: "033-789-457",
          address: "46 St. Petrus, Olympia",
          instaGod: "@DionyWine",
        },
      }],
      godsFav: [ {
        id: 2,
        name: "Aphrodite",
        gender: "Female",
        photo: "https://vignette.wikia.nocookie.net/mythologies/images/e/ec/La_Naissance_de_V%C3%A9nus_de_Boticelli_%281484%29.jpg/revision/latest/scale-to-width-down/1000?cb=20190508153536&path-prefix=fr",
        age: 35,
        othersItems: {
          astroSign: "Pinup",
          sports: "110m haie",
          godsType: "Orgie",
          passion: ["Wine ", "Drinks ", "Sex "],
        },
        registerSince: 12 / 12 / 2019,
        peopleLiked: ["Athena ", "Medusa ", "Zeus "],
        contact: {
          phone: "033-789-457",
          address: "46 St. Petrus, Olympia",
          instaGod: "@DionyWine",
        },
      }],
    }
  }

  addToFavorite = (id) => {
    const { gods, godsFav } = this.state;
    const data = gods.find((item) => item.id === id);
    this.setState({
      godsFav: [...godsFav, data]
    });
  };

  removeToFavorite = (id) => {
    const { godsFav } = this.state;
    const hapus = godsFav.filter((item) => item.id !== id);
    this.setState({ godsFav: hapus });
  };

  render() {
    const { gods, godsFav } = this.state;
    return (
      <div>
        <GodCard gods={gods} add={this.addToFavorite} />
        <FavoriteCard godsFav={godsFav} remove={this.removeToFavorite} />
      </div>
    )
  }
}

export default App;
