import Navigation from "../components/Main/Navigation"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import MyProfile from "./MyProfile"
import Blog from "./Blog"
import Events from "./Events"
import Notifications from "./Notifications"
import Group from "./Group"
import Settings from "./Settings"



export default function Main() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
      <main>
        <div className="container">
          <div className="row g-4">
            {/* pages start here */}
              <Routes>
                {/* Home Page */}
                <Route path="/" element={<Home />} />
                {/* Profile Page */}

                <Route path="/my-profile" element={<MyProfile page="my-profile"/>} />  
                {/* Profile About Page */}

                <Route path="/my-profile-about" element={<MyProfile page="my-profile-about"/>} />  
                {/* Profile About Connections */}

                <Route path="/my-profile-connections" element={<MyProfile page="my-profile-connections"/>} />  

                {/* Profile About Media */}
                <Route path="my-profile-media" element={<MyProfile page="my-profile-media"/>} />

                {/* Profile About Media */}
                <Route path="my-profile-media" element={<MyProfile page="my-profile-media"/>} />  
                
                {/* Profile About Videos */}
                <Route path="my-profile-videos" element={<MyProfile page="my-profile-videos"/>} />  
                
                {/* Profile About Events */}
                <Route path="my-profile-events" element={<MyProfile page="my-profile-events"/>} /> 
                
                {/* Profile About Activity */}
                <Route path="my-profile-activity" element={<MyProfile page="my-profile-activity"/>} />

                {/* Blog */}
                <Route path="blog" element={<Blog />} />

                {/* Events */}
                <Route path="events" element={<Events />} /> 

                {/* Notifications */}
                <Route path="notifications" element={<Notifications />} /> 

                {/* Notifications */}
                <Route path="groups" element={<Group />}></Route>
                
                {/* Settings */}
                <Route path="settings" element={<Settings />}></Route>
              
              </Routes>
            {/* pages end here */}
          </div>
        </div>
      </main>
      </BrowserRouter>
    </>
  )
}
