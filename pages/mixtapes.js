import Sidebar from "../components/Sidebar";
import Player from "../components/player/Player";
import Header from "../components/Header";
import { getSession } from "next-auth/react";

export default function Mixtapes() { 
  return (
    <div className="flex flex-col bg-groovyBlue h-screen border-black border-4 border-opacity-100">
      <div className="basis-1/12">
       <Header />
      </div>
      
      <div className="basis-11/12 flex flex-row justify-center h-screen overflow-hidden">

        <div className="flex basis-1/4"><Sidebar /></div>

        <div className="flex basis-3/4"><Player /></div>
        
      </div>
     
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}