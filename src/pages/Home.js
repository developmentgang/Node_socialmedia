import React from 'react'
import Navigation from '../components/Main/Navigation'
import PostCol from '../components/Home/PostCol'
import ProfileCol from '../components/Home/ProfileCol'
import UsersComp from '../components/Home/UsersComp'


export default function Home() {
  return (
    <>
       <ProfileCol/>
       <PostCol/>
       <UsersComp/>
    </>
  )
}
