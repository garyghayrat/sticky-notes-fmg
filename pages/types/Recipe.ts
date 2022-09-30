import { Key } from "react";

export interface Recipe {
  id: Key;
  title: String;
  ingredients: String;
  method: String;
  cookingTime: String;
}
