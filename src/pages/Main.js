import PostCol from "../components/Home/PostCol"
import ProfileCol from "../components/Home/ProfileCol"
import UsersComp from "../components/Home/UsersComp"
import Navigation from "../components/Main/Navigation"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import MyProfile from "./MyProfile"


export default function () {
  return (
    <>
    <Router>
    <Navigation/>
      <main>
        <div className="container">
          <div className="row g-4">
            {/* pages start here */}
              <Routes>
                {/* Home Page */}
                <Route path="/" element={<Home />} />
                {/* Profile Page */}
                <Route path="my-profile" element={<MyProfile />} />  
              </Routes>
            {/* pages end here */}
          </div>
        </div>
      </main>
      </Router>
    </>
  )
}
