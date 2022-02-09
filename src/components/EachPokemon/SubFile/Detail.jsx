import React from "react";

function Detail({ eachPokemon }) {
  return (
    <div className="container">
      <div className="box-container">
        <div className="box image">
          <img
            className="pokemon"
            src={process.env.PUBLIC_URL + eachPokemon[0].image}
            alt="002"
          />
        </div>
        <div
          className="box first"
          style={{ backgroundColor: eachPokemon[0].bgcolor }}
        >
          <h3>Bulbasaur</h3>
          <div className="detail">
            <div className="item">
              <h4>Type</h4>
              <div className="image">
                {eachPokemon[0].ability.map((item, i) => {
                  return (
                    <img
                      className="icons"
                      src={process.env.PUBLIC_URL + item}
                      alt="Nature"
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
            <div className="item">
              <h4>Hp</h4>
              <h5>{eachPokemon[0].hp}</h5>
            </div>
            <div className="item">
              <h4>Resistance</h4>
              <div className="image">
                <img
                  className="icons"
                  src={process.env.PUBLIC_URL + "/images/icons/poison.svg"}
                  alt="poison"
                />
              </div>
            </div>
            <div className="item">
              <h4>Wakeness</h4>
              <div className="image">
                <img
                  className="icons"
                  src={process.env.PUBLIC_URL + "/images/icons/fire.svg"}
                  alt="fire"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="box second">
          <h3>Battle</h3>
          <div className="detail">
            <div className="item">
              <h4>Type</h4>
              <h5>Medium</h5>
            </div>
            <div className="item">
              <h4>Defense</h4>
              <h5>Medium</h5>
            </div>
            <div className="item">
              <h4>Speed</h4>
              <h5>Slow</h5>
            </div>
          </div>
        </div>
        <div className="box second">
          <div className="detail">
            <div className="item">
              <h4>Height</h4>
              <h5>3' 3''</h5>
            </div>
            <div className="item">
              <h4>Weight</h4>
              <h5>28lbs</h5>
            </div>
            <div className="item">
              <h4>Gender</h4>
              <h5>male</h5>
            </div>
            <div className="item">
              <h4>Catagory</h4>
              <h5>Seed</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
