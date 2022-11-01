import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <br />
        <Link href="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default NavBar;
