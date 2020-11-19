import React, {Component} from 'react';

const Data = [{
 Name: "Dyonisos",
 Gender: "Male",
 Photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dionysos_satyr_Altemps_Inv8606.jpg/1200px-Dionysos_satyr_Altemps_Inv8606.jpg",
 Age: "63",
 OthersItems: {
   AstroSign: "Barrel",
   Sports: "Barathon",
   GodsType: "Party",
   Passion: ["Wine", "Drinks", "Sex"]
          },
 RegisterSince: "12/12/2019",
 PeopleLiked : ["Athena", "Medusa", "Zeus"], 
 Contact: {
   Phone: "033-789-457",
   Address: "46 St. Petrus, Olympia",
   InstaGod: "@DionyWine",
 }
 },
 {
 Name: "Athena",
 Gender: "Female",
 Photo:"https://media.visualstories.com/uploads/images/1/175/5667952-696_650528588-athena-goddess-statue_p.jpg",
 Age: "25",
 OthersItems: {
   AstroSign: "Pegase",
   Sports: "Hunt",
   GodsType: "War",
   Passion: ["Animals"]
          },
          RegisterSince: "01/08/2020",
          PeopleLiked : ["Dionysos", "Medusa", "Zeus"],
          Contact: {
                  Phone: "089-805-022",
                  Address: "Tree 123, Central Park",
                  InstaGod: "@IloveAnimals",
          }
          },
          
          {
          Name: "Centaur",
          Gender: "Male",
          Photo:"https://i.pinimg.com/originals/7a/b2/93/7ab293105a9f0190dc8e8b04856b61a8.jpg",
          Age: "32",
          OthersItems: {
                  AstroSign: "Pegase",
                  Sports: "Quidditch",
                  GodsType: "Nature",
                  Passion: ["Animals", "Party"]
          },
          RegisterSince: "12/12/2019",
          PeopleLiked : ["Dionysos", "Medusa", "Zeus"],
          Contact: {
                  Phone: "987-865-282",
                  Address: "69 hinds street, Amazonia",
                  InstaGod: "@BigHorn"
          }
          }]

class Filters extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: Data, 
        };
  }

  render() {
        const { data } = this.state;
      return (
      <div>
      {data.map((res) => (
        <button value={res.OthersItems.AstroSign}>{res.OthersItems.AstroSign}</button>
      ))}
      {data.map((res) => (
        <button value={res.OthersItems.GodsType}>{res.OthersItems.GodsType}</button>
      ))}
     </div>
      );
    }
  }
  
  export default Filters;

