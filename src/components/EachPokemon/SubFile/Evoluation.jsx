import React from "react";
import { Fragment } from "react";

function Evoluation({ eachPokemon }) {
  const evo = eachPokemon[0].evoluation;
  return (
    <div className="evocontainer">
      <h3 className="evotitle">Evoluation</h3>
      <div className="container-evolutaion ">
        {eachPokemon[0].evoluation.map((item, i) => {
          return (
            <Fragment key={i}>
              <img src={process.env.PUBLIC_URL + item} alt="Pokemon photo" />
              {evo.length > i + 1 ? (
                <img
                  className="arrow"
                  src={process.env.PUBLIC_URL + "/images/arrow.svg"}
                  alt="arrow"
                />
              ) : (
                ""
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Evoluation;
