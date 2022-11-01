import { Key, useEffect, useState } from "react";
import type { NextPage } from "next";
import { FetchRecipes, PostRecipes } from "./hooks/useFetchRecipes";
import { Recipe } from "./types/Recipe";
import RecipeList from "./components/RecipeList";

type Props = {};

const HomePage: NextPage = (props: Props) => {
  const recipes = FetchRecipes();
  console.log("data instide homepage is", recipes);

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
      {/* {recipes &&
        recipes?.map((recipe: any) => {
          return <h2 key={recipe.id}>{recipe.title}</h2>;
        })} */}
      <button onClick={callPostRecipes}>Test button</button>
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default HomePage;
