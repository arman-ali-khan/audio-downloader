import React from "react";
import Maintenance from "../components/Maintenance/Maintenance";

const Main = ({ children, title, description, thumb, keyword }) => {
  return (
    <div>
        {/* <Navbar />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
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
      <Footer /> */}
      <Maintenance />
    </div>
  );
};

export default Main;
