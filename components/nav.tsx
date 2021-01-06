import { Head, Import, Link } from "aleph";
import React from "react";
export default function nav({ title }: any) {
  return (
    <div className="nav">
      <Import from="./nav.less" />
      <Head>
        {title && <title>{title}</title>}
      </Head>
      <h1>Nav</h1>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/markdown/info">info</Link></li>
      </ul>
    </div>
  );
}
