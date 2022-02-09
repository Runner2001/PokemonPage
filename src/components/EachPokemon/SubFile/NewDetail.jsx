import React from "react";
import "./newDetail.css";

function NewDetail({ eachPokemon }) {
  return (
    <>
      <div className="grid">
        <img
          src={process.env.PUBLIC_URL + eachPokemon[0].ability[0]}
          alt="Icons BackGround"
          className="iconsBg"
        />
        <div className="left">
          <svg
            className="bg-desktop"
            width="524"
            height="720"
            viewBox="0 0 524 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H524L260.5 720H0V0Z" fill={eachPokemon[0].bgcolor} />
          </svg>
          <svg
            className="bg-mobile"
            width="375"
            height="483"
            viewBox="0 0 375 483"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H375L0 483V0Z" fill={eachPokemon[0].bgcolor} />
          </svg>

          <img
            src={process.env.PUBLIC_URL + eachPokemon[0].image}
            className="pokemonsImages"
            alt="Poekmons Image"
          />
        </div>
        <div className="right">
          <div className="PokemonDetail">
            <div className="header">
              <h3 className="name">{eachPokemon[0].name}</h3>
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
            <div className="brief">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                volutpat amet cras amet sed tincidunt pellentesque pretium
                tincidunt. Consequat suspendisse.
              </p>
            </div>
            <div className="ability">
              <h3>Abilities</h3>
              <ul>
                <li>Flarm Tower</li>
                <li>Claws</li>
                <li>Fire Breath</li>
              </ul>
            </div>
            <div className="weakness">
              <h3>weakness</h3>
              <ul>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/poison.svg"}
                    alt="icons"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/fire.svg"}
                    alt="icons"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/rock.svg"}
                    alt="icons"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewDetail;
