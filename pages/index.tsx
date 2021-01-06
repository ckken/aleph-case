import { Head, Import, useDeno } from "aleph";
import React, { useState } from "react";
import Logo from "../components/logo.tsx";
import Nav from "../components/nav.tsx";
export default function Home() {
  // const [count, setCount] = useState(0)
  const version = useDeno(() => {
    return Deno.version;
  });

  return (
    <div className="page">
      <Nav title="home" />
      {/* <Import from="../style/index.less" /> */}
      <p className="logo"><Logo /></p>
      <h1>ENV</h1>
      <ul>
        <li>deno {version.deno}</li>
        <li>typescript {version.typescript}</li>
        <li>v8 {version.v8}</li>
      </ul>
    </div>
  );
}
Home.meta = {
  title: "home",
};
