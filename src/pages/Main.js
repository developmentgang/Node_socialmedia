import Navigation from "../components/Main/Navigation"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import MyProfile from "./MyProfile"


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
              </Routes>
            {/* pages end here */}
          </div>
        </div>
      </main>
      </BrowserRouter>
    </>
  )
}
