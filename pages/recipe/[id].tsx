import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FetchRecipes } from "../hooks/useFetchRecipes";
import { Recipe } from "../types/Recipe";

type Props = {};

const Recipe: NextPage = (props: Props) => {
  const router = useRouter();
  const id = router.query.id;

  const recipes = FetchRecipes();
  console.log("recipes inside id is", recipes);

  const filterRecipe = (recipes: any) => {
    console.log("recipes are here and they are", recipes);
    const recipe = recipes?.filter((recipe: Recipe) => recipe.id == id);

    console.log("recipe is", recipe);
    return recipe[0];
  };

  const recipe = recipes ? filterRecipe(recipes) : null;
  console.log("recipe is", recipe);

  return (
    <div>
      <p>recipe id is {id}</p>
      {recipe && (
        <>
          <p>
            {recipe.title},{recipe.id}
          </p>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <p>{recipe.ingredients}</p>
        </>
      )}
      {/* {recipes &&
        recipes?.map((recipe: any) => {
          return <h2 key={recipe.id}>{recipe.title}</h2>;
        })} */}
    </div>
  );
};

export default Recipe;
