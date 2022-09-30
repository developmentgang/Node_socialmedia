import ProfileFeeds from "../components/MyProfile/ProfileFeeds"
import ProfileHeader from "../components/MyProfile/ProfileHeader"
import ProfileInfo from "../components/MyProfile/ProfileInfo"
import ProfileConnection from "../components/MyProfile/ProfileConnection"
import ProfileMedia from "../components/MyProfile/ProfileMedia"
import ProfileVideos from "../components/MyProfile/ProfileVideos"
import ProfileEvents from "../components/MyProfile/ProfileEvents"
import ProfileActivity from "../components/MyProfile/ProfileActivity"
import AboutCard from "../components/MyProfile/RightSidebar/AboutCard"



export default function MyProfile(props) {
  return (
    <>
      <div className="col-lg-8 vstack gap-4">
          <ProfileHeader />
          {props.page === "my-profile" ? <ProfileFeeds /> :null  }
          {props.page === "my-profile-about" ? <ProfileInfo /> : null }
          {props.page === "my-profile-about" ? <ProfileInfo /> :null}
          {props.page === "my-profile-connections" ? <ProfileConnection /> : null }
          {props.page === "my-profile-media" ? <ProfileMedia /> :null}
          {props.page === "my-profile-videos" ? <ProfileVideos /> :null}
          {props.page === "my-profile-events" ? <ProfileEvents /> :null}
          {props.page === "my-profile-activity" ? <ProfileActivity /> : null}

      </div>
      <div className="col-lg-4">
          <AboutCard/>
      </div>
    </>
  )
}
