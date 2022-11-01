import type { NextPage } from "next";
import NavBar from "./components/NavBar";
import HomePage from "./home-page";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <p className="font-serif text-2xl flex justify-center">Your Recipes</p>
      </div>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Home;
