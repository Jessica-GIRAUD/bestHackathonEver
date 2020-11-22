import React from "react";
import "../styled/Card.css";

const Testit = () => {
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <h1> How does it work ? </h1>
      <p style={{ textAlign: "justify" }}>
        Adopt a God is a dating application for ancient Greek deities who want
        to become friends, sexfriends or find the love of their lives, even if
        fidelity to the Gods is not their strong point. You can search for the
        relationship you want with the person you have chosen thanks to our
        filters. Hopefully you can find what you are looking for with Adopt a
        God
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 25px",
            width: "350px",
          }}
        >
          <div>
            <img
              src="https://cdn.britannica.com/04/186604-050-980E8365/oil-Bacchus-canvas-Caravaggio-Florence-Italy-Uffizi.jpg"
              alt="dios1"
              style={{ width: "300px", borderRadius: "5px", height: "250px" }}
            />
            <h1 className="name">Dyonysos</h1>

            <p>
              {" "}
              No one accepted my passion for wine...On Adopt a God, i can find
              someone who looks like me
            </p>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "350px" }}
        >
          <div>
            <img
              src="https://cdn.britannica.com/00/182100-050-E1754515/Athena-Parthenos-Alan-LeQuire-1982-replica-Parthenon-Nashville-Tenessee.jpg"
              alt="dios2"
              style={{ width: "300px", borderRadius: "5px", height: "250px" }}
            />
            <div className="CardBody">
              <h1 className="Nom">Athéna</h1>

              <p>
                Impossible to fall in love with a humain...but meet a minotaure
                in the daily life, complicated
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "350px" }}
        >
          <div>
            <img
              src="https://www.alaturka.info/images/geschichte/zeus.jpg"
              alt="dios3"
              style={{ width: "300px", borderRadius: "5px", height: "250px" }}
            />
            <div className="CardBody">
              <h1 className="Nom">Zeus</h1>

              <p>
                {" "}
                After 49 weeding and 92 children, i'm looking for my soulmate !
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "350px" }}
        >
          <div>
            <img
              src="https://assets.artworkarchive.com/image/upload/t_jpg_large/v1/user_34103/Artemis_gereso"
              alt="dios4"
              style={{ width: "300px", borderRadius: "5px", height: "250px" }}
            />
            <div className="CardBody">
              <h1 className="Nom">Arthemis</h1>

              <p>Would you like to taste my arrow?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testit;
