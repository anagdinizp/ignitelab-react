import { Header } from "../components/Header";
import { Lessons } from "../components/Lessons";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){
  return(<>
    <Header/>
    <Sidebar/>
    <Lessons/>
    <Video/>
    </>
  )
}