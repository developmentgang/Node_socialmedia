import ProfileFeeds from "../components/MyProfile/ProfileFeeds"
import ProfileHeader from "../components/MyProfile/ProfileHeader"
import ProfileInfo from "../components/MyProfile/ProfileInfo"



export default function MyProfile(props) {
  return (
    <>
      <div className="col-lg-8 vstack gap-4">
          <ProfileHeader />
          {props.page === "my-profile" ? <ProfileFeeds /> : null }
          {props.page === "my-profile-about" ? <ProfileInfo /> : props.page }
          {props.page === "my-profile-about" ? <ProfileInfo /> : props.page }
          {props.page === "my-profile-connections" ? <ProfileInfo /> : props.page }
          {props.page === "my-profile-media" ? <ProfileInfo /> : props.page }
          {props.page === "my-profile-videos" ? <ProfileInfo /> : props.page }
          {props.page === "my-profile-events" ? <ProfileInfo /> : props.page }
          {props.page === "my-profile-activity" ? <ProfileInfo /> : props.page }
          
      </div>
      <div className="col-lg-4">
        sidebar About
      </div>
    </>
  )
}
