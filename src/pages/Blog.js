import React from 'react'
import BlogList from '../components/Blog/BlogList'
import BlogSidebar from '../components/Blog/BlogSidebar'

export default function Blog() {
  return (
    <>
    <div class="col-lg-8">
        <BlogList />
    </div>
    <div class="col-lg-4">
        <BlogSidebar />
    </div>
    </>
  )
}
