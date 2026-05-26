// pages/_app.js
import "@/styles/globals.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SmoothScrollProvider from "@/common/Smoothscroll";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Add any pages you want to exclude here
  const disableSmoothScroll = ["/tracking"];
  const shouldDisable = disableSmoothScroll.includes(router.pathname);

  return shouldDisable ? (
    <Component {...pageProps} />
  ) : (
    <SmoothScrollProvider>
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}