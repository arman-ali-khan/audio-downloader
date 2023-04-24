import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import Head from "next/head";
import React from "react";

const Main = ({ children, title, description, thumb }) => {
  return (
    <div>
        <Navbar />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={thumb}
        />
      </Head>

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
