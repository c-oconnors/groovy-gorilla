import { 
  HomeIcon, 
  LogoutIcon,
  ChevronDownIcon,
 } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
// import Header from "../components/Header";
import Player from "./Player";
import Header from "./Header";

export default function Sidebar() {
  const { data: session, status } = useSession();
  // console log username and email
  //console.log(session);
  return (
    <div  className="bg-white h-full border-black border-4 border-opacity-100 shadow-groovy overflow-auto">
      <div className="bg-groovyPink p-1 border-black border-b-4">
        <h2 className="text-3xl font-bold">Mixtapes</h2>
      </div>
      <div className="overflow-auto">
        <div className="overscroll-contain overflow-auto p-1">
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
          <div><h2 className="font-bold">Mixtape title</h2></div>
        </div>
      </div>
    </div>
  );
}
