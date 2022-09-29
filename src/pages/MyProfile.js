import ProfileFeeds from "../components/MyProfile/ProfileFeeds"
import ProfileHeader from "../components/MyProfile/ProfileHeader"

export default function MyProfile() {
  return (
    <>
      <div className="col-lg-8 vstack gap-4">
          <ProfileHeader />
          <ProfileFeeds />
      </div>
      <div className="col-lg-4">
        sidebar About
      </div>
    </>
  )
}
