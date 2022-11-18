import React from 'react'

import PostCol from '../components/Home/PostCol'
import ProfileCol from '../components/Home/ProfileCol'
import RecentUpdates from '../components/Home/RecentUpdates'
import UsersComp from '../components/Home/UsersComp'


export default function Home(userData) {
  return (
    <>
    <div className="col-lg-3">
       <ProfileCol/>
       </div>
       <div className="col-md-8 col-lg-6 vstack gap-4">
       <PostCol/>
       </div>
       <div className="col-lg-3">
        <div className="row g-4">
          <UsersComp users = {userData}/>
          <RecentUpdates />
        </div>  
       </div>
    </>
  )
}
