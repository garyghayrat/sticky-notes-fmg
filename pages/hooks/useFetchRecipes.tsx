import { Key, useEffect, useState } from "react";
import { Recipe } from "../types/Recipe";

export const FetchRecipes = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/hello", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log("response is", response);
      setData(await response.json());
      // setData(response);
      console.log("getRecipe setData was successful and data is", data);

      if (response.status !== 200) {
        console.log("something went wrong");
      } else {
        console.log("got data successffully");
        console.log("data is", data);
        console.log("api response is", response);
      }
    } catch (error) {
      console.log("there was an error reading from the db", error);
    }

    console.log("called getRecipes()");
  };

  return data?.recipes;
};

export const PostRecipes = async (newRecipe: Recipe) => {
  try {
    const response = await fetch("api/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe),
    });
    if (response.status !== 200) {
      console.log("something went wrong");
    } else {
      console.log("posted data successffully");
      console.log("api response is", response);
      FetchRecipes();
    }
  } catch (error) {
    console.log("There was an error posting data", error);
  }
};
