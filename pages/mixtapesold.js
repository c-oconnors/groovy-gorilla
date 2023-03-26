import FeaturedMixtape from "../components/FeaturedMixtape";
import { 
  HomeIcon, 
  LogoutIcon,
  ChevronDownIcon,
 } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import Header from "../components/Header";
import TrackListRow from "../components/TrackListRow";

export default function Mixtapes() {
  const { data: session, status } = useSession();
  // console log username and email
  console.log(session);
  return (
    <div  className="bg-groovyBlue h-screen overflow-hidden text-gray-500 text-sm border-black border-4 border-opacity-100">
      {/* <Header /> */}
      <header className="absolute top-5 right-8">
        <div className="flex items-center  ">
            <img className="rounded-full w-10 h-10 border-solid border-4 border-black" src={session?.user?.image} alt="" />
          <button className=" flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
            <h2>{session?.user.name}</h2>
            <LogoutIcon className="h-5 w-5"/>
          </button>
        </div>
      </header>
      <div className="space-y-4"> 
        {/* HomeIcon button links to homepage */}
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5"/>
          <h2>Home</h2>
        </button>
        <div className="flex items-center space-x-3 ">
        </div>
      </div>
      {/*Top Player ALbum Art (default to playlist image)- mixtape description - playlist - about the artist */}
      <h1>Mixtapes Page</h1>
      <FeaturedMixtape />
      {/* <TrackListRow /> */}
      {/* <MixtapeGrid /> */}
    </div>
  );
}
