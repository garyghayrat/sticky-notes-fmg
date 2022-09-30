import type { NextPage } from "next";
import Link from "next/link";
import { Key } from "react";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import { useFetch } from "./hooks/useFetch";

const Home: NextPage = () => {
  const { data, isPending, error } = useFetch(
    new URL("http://localhost:3010/recipes")
  );
  console.log("called");

  return (
    <div>
      <p className="font-extrabold">Hello</p>
      <NavBar />
      {error && <p>{error}</p>}
      {isPending && <p>Loading..</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
