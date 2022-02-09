import React from "react";
import { useParams } from "react-router";
import { Pokemon } from "../../Pokedex";
import Card from "./SubFile/Card";
import Detail from "./SubFile/Detail";
import NewDetail from "./SubFile/NewDetail";
import Evoluation from "./SubFile/Evoluation";

function Each() {
  const { id } = useParams();
  const eachPokemon = Pokemon.filter((item) => item.id == id);
  return (
    <>
      {/* <Detail eachPokemon={eachPokemon} /> */}
      <NewDetail eachPokemon={eachPokemon} />
      <Evoluation eachPokemon={eachPokemon} />
      {/* <Card eachPokemon={eachPokemon} /> */}
    </>
  );
}

export default Each;
