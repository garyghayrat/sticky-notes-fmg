import Link from "next/link";
import React from "react";
import { Recipe } from "../types/Recipe";

type Props = {
  recipes: any;
};

const RecipeList = ({ recipes }: Props) => {
  return (
    <div>
      {recipes.map((recipe: Recipe) => (
        <div key={recipe.id}>
          <p className="m-4">{recipe.title}</p>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link href={`recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
