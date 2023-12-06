import { Inter } from "next/font/google";
import Main from "../Layout/Main";
import Maintenance from "../components/Maintenance/Maintenance";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const metaImage = "/thumb.png";

  return (
    <Main
      title={"Bhoot.top || Download Bhoot.com and All Bangla Radio Episodes HD"}
      description={
        "Bhoot.com || Downloade Bangladeshi Radio Episodes with super fast speed.bhoot.com,bhoot.fm,bhoot dot com,afnan the horror world, bhoot studio, rj russess, afnan vai, bhoutiggota, odvootoore,sunday suspense, raio mirchi, radio milan "
      }
      thumb={metaImage}
    >
      {/* <div>
        <Hero />
      </div>
      <div className="w-full md:flex gap-2">
        <div className="md:w-3/12 hidden sm:block">
          <Popular />
        </div>
        <div className="md:w-6/12">
          <Recent />
        </div>
        <div className="md:w-3/12  sm:hidden">
          <Popular />
        </div>
        <div className="md:w-3/12">
          <Categories />
        </div>
      </div>
      <div></div>
      <div></div> */}
      <Maintenance />
    </Main>
  );
}
