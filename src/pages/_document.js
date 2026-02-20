import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
          rel="preload"
          href="/assets/placeholder_globe.JPG"
          as="image"
        />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head >
      <body className="antialiased">
       
       <Main />
        <NextScript />
      </body>
    </Html>
  );
}
