import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Header from "../components/Header";

export default function Mixtapes() { 
  return (
    <div className=" bg-groovyBlue h-screen border-black border-4 border-opacity-100">
      <Header />
      <main className="m-4">
        <Player />
        {/* <Sidebar /> */}
      </main>
    </div>
  )
}