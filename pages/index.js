/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Services />
    </>
  );
}
