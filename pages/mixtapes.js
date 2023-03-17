//import MixtapeCard from "../components/MixtapeCard";
import { 
  HomeIcon, 
  LogoutIcon
 } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

export default function Mixtapes() {
  const { data: session, status } = useSession();

  return (
    <div  className="bg-black h-screen overflow-hidden text-gray-500 p-5 text-sm border-r border-gray-500">
      <div className="space-y-4"> 
        <button className=" flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
          <LogoutIcon className="h-5 w-5"/>
        </button>
        <button className=" flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5"/>
        </button>
      </div>
      {/*Top Player ALbum Art (default to playlist image)- mixtape description - playlist - about the artist */}
      <h1>Mixtapes Page</h1>
      {/* <MixtapeCard /> */}
    </div>
  );
}
