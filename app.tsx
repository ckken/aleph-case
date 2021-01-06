import React, { ComponentType } from "react";
import { Head } from "aleph";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Page {...pageProps} />
    </>
  );
}
