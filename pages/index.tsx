import type { NextPage } from "next";
import NavBar from "./components/NavBar";
import HomePage from "./home-page";

const Home: NextPage = () => {
  return (
    <div>
      <p className="font-extrabold">Hello</p>
      <NavBar />
      <HomePage />

      <h2>Hello</h2>
    </div>
  );
};

export default Home;
