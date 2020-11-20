import React from 'react';



const Testit= (props) => {
  return (
    <div className="CardGroup">
      <div className ="Card1">
        <img src="image" alt="image" />
        <div className="CardBody">
          <h1 className="Nom">Card title</h1>
          <CardText>Texte à rentrer </CardText>
        </div>
      </div>
      <div className="Card2">
        <img src="image" alt="image" />
        <div className="CardBody">
          <h1 className="Nom">Card title</h1>
          <CardText>Texte à rentrer </CardText>
        </div>
      </div>
      <div className="Card3">
        <img  src="image" alt="image" />
        <div className="CardBody">
          <h1 className="Nom">Card title</h1>
          <CardText>Texte à rentrer </CardText>
        </div>
      </div>
      <div classsName="Card4">
        <img  src="image" alt="image" />
        <div className="CardBody">
          <h1 className="Nom">Card title</h1>
          <CardText>Texte à rentrer </CardText>
        </div>
      </div>
    </div>
  );
};

export default Testit;