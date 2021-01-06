import { Head, Link } from "aleph";
import React, { ComponentType } from "react";
import Nav from "../components/nav.tsx";
interface Metadata {
  title: string;
  author: string;
  date: string;
}

export default function Markdown(
  { Page }: { Page: ComponentType & { meta: Metadata } },
) {
  return (
    <>
      <Nav title={Page.meta.title} />
      <Page />
    </>
  );
}
