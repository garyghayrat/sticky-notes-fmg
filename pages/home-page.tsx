import { Key, useEffect, useState } from "react";
import type { NextPage } from "next";
import { FetchRecipes, PostRecipes } from "./hooks/useFetchRecipes";
import { Recipe } from "./types/Recipe";

type Props = {};

const HomePage: NextPage = (props: Props) => {
  const test = FetchRecipes();
  console.log("data instide homepage is", test);

  const callPostRecipes = () => {
    PostRecipes({
      id: "1",
      title: "testRecipe",
      ingredients: "test",
      method: "test",
      cookingTime: "5min",
    });
  };

  return (
    <div>
      {/* {data && console.log("data inside div is", data)} */}

      {test &&
        test?.map((recipe: any) => {
          return <h2 key={recipe.id}>{recipe.title}</h2>;
        })}
      <button onClick={callPostRecipes}>Test button</button>
    </div>
  );
};

export default HomePage;
